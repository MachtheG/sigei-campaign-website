import { expect, test } from "@playwright/test";

const PAGES = [
  "",
  "/record",
  "/second-term",
  "/gallery",
  "/news",
  "/about",
  "/party",
  "/elections",
  "/get-involved",
  "/contact",
  "/privacy",
];

for (const locale of ["en", "sw"]) {
  test(`all tabs render in ${locale}`, async ({ page }) => {
    for (const p of PAGES) {
      const res = await page.goto(`/${locale}${p}`);
      expect(res?.status(), p).toBe(200);
      await expect(page.locator("h1").first(), p).toBeVisible();
      await expect(page.locator("html")).toHaveAttribute("lang", locale);
      // countdown pill is on every page
      await expect(page.getByRole("link", { name: /countdown|hesabu/i }).first()).toBeVisible();
    }
  });
}

test("language toggle keeps the page and the query", async ({ page }) => {
  await page.goto("/en/record?pillar=tea");
  await page
    .getByRole("button", { name: /Kiswahili/ })
    .first()
    .click();
  await page.waitForURL(/\/sw\/record\?pillar=tea/);
  await expect(page.locator("h1").first()).toHaveText("Rekodi Yangu");
});

test("countdown renders digits after hydration", async ({ page }) => {
  await page.goto("/en/elections");
  await expect(page.getByRole("timer")).toBeVisible();
  await expect(page.getByRole("timer")).toContainText(/\d/);
});

test("record filter updates URL and hides other pillars", async ({ page }) => {
  await page.goto("/en/record");
  const tea = page.getByRole("button", { name: "Tea & Farmers" }).first();
  await tea.click();
  await expect(page).toHaveURL(/pillar=tea/);
  await expect(page.locator('[data-pillar="tea"]').first()).toBeVisible();
  const hidden = page.locator('[data-pillars="education"]').first();
  await expect(hidden).toBeHidden();
  await page.reload();
  await expect(page.getByRole("button", { name: "Tea & Farmers" }).first()).toHaveAttribute(
    "aria-pressed",
    "true",
  );
});

test("gallery lightbox opens and closes", async ({ page }) => {
  await page.goto("/en/gallery");
  await page
    .getByRole("button", { name: /Open photo/ })
    .first()
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();
});

test("pledge form validates and submits", async ({ page }) => {
  await page.goto("/en/get-involved");
  const form = page.locator("form").first();
  await form.getByRole("button", { name: /Pledge my support/ }).click();
  await expect(form.getByRole("alert").first()).toBeVisible();
  await form.getByLabel("Full name").fill("Jane Chebet");
  await form.getByLabel("Phone number").fill("0712345678");
  await form.getByLabel("Constituency").selectOption("sotik");
  await form.getByRole("checkbox").check();
  await form.getByRole("button", { name: /Pledge my support/ }).click();
  await expect(page.getByRole("status")).toContainText(/Asante/);
});

test("election calendar file downloads", async ({ request }) => {
  const r = await request.get("/api/election.ics");
  expect(r.headers()["content-type"]).toContain("text/calendar");
  expect(await r.text()).toContain("DTSTART:20270810T030000Z");
});

test("stat share card renders", async ({ request }) => {
  const r = await request.get("/api/og?stat=growers&locale=sw");
  expect(r.status()).toBe(200);
  expect(r.headers()["content-type"]).toContain("image/png");
});
