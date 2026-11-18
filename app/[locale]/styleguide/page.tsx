import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ConstituencyList } from "@/components/shared/ConstituencyList";
import { CountdownBand } from "@/components/shared/CountdownBand";
import { CTABand } from "@/components/shared/CTABand";
import { Duotone } from "@/components/shared/Duotone";
import { EntryCard } from "@/components/shared/EntryCard";
import { PriorityCard } from "@/components/shared/PriorityCard";
import { SplitHeadline } from "@/components/shared/SplitHeadline";
import { StatCard } from "@/components/shared/StatCard";
import { Timeline } from "@/components/shared/Timeline";
import { Button } from "@/components/ui/button";
import { stats } from "@/data/record/stats";
import { commitments } from "@/data/second-term/commitments";

export const metadata: Metadata = { title: "Styleguide", robots: { index: false, follow: false } };

const swatches = [
  ["bg-ink", "ink #0b1a14", "text-paper"],
  ["bg-ink-deep", "ink-deep #07110d", "text-paper"],
  ["bg-forest", "forest #123d2c", "text-paper"],
  ["bg-paper", "paper #f3efe6", ""],
  ["bg-ember", "ember #c47a3d (duotone ink)", "text-ink"],
  ["bg-ember-text", "ember-text #8a4f22 (small text)", "text-paper"],
  ["bg-uda", "UDA yellow #f5b800 (stand-in)", "text-ink"],
  ["bg-surface", "surface #ffffff", ""],
];

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="t-eyebrow text-ember-text border-line mb-6 border-b pb-2 font-sans">{children}</h2>
);

/** Living reference for the design system (Phase 3). Not indexed. */
export default async function Styleguide({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const pick = (ids: string[]) => ids.map((id) => stats.find((s) => s.id === id)!);
  return (
    <div className="space-y-20 py-12">
      <div className="shell space-y-20">
        <h1 className="t-display">Styleguide</h1>

        <section>
          <H>Colour</H>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {swatches.map(([bg, name, fg]) => (
              <li
                key={name}
                className={`${bg} ${fg} border-line flex h-24 items-end rounded-md border p-3 text-sm font-semibold`}
              >
                {name}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <H>Type: Fraunces (display) + Public Sans (body)</H>
          <p className="t-display">Display 92</p>
          <p className="t-h1 mt-3">Heading 1</p>
          <p className="t-h2 mt-3">Heading 2</p>
          <p className="t-h3 mt-3">Heading 3</p>
          <p className="t-eyebrow text-ember-text mt-4">Eyebrow · Bomet County · 2022 · 2027</p>
          <p className="t-lead mt-3 max-w-[52ch]">
            Lead paragraph, Public Sans, for the first lines under a headline.
          </p>
          <p className="mt-3 max-w-[65ch]">
            Body text at 17px with a 1.6 line height and a 65-character measure.
          </p>
          <div className="mt-8">
            <SplitHeadline lines={["Five constituencies.", "One county."]} />
          </div>
        </section>

        <section>
          <H>Buttons (44px minimum)</H>
          <div className="flex flex-wrap gap-3">
            <Button>Donate (UDA accent)</Button>
            <Button variant="brand">See the record</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="bg-ink mt-4 flex flex-wrap gap-3 rounded-md p-6">
            <Button variant="paper">On dark</Button>
            <Button variant="outlineLight">Outline on dark</Button>
          </div>
        </section>

        <section>
          <H>Duotone (landscapes only; portraits stay full colour)</H>
          <Duotone
            id="field-inspection"
            sizes="(min-width: 1024px) 80rem, 100vw"
            className="h-72 rounded-md"
            scrim="bottom"
          >
            <p className="t-h3 text-paper absolute bottom-0 p-6">Bomet tea country</p>
          </Duotone>
        </section>

        <section>
          <H>EntryCard</H>
          <div className="grid gap-4 md:grid-cols-3">
            <EntryCard
              n="01"
              title="Who he is"
              body="From Ndamichonik Primary to the Senate."
              cta="The Story"
              href="/about"
            />
            <EntryCard
              n="02"
              title="The record"
              body="The Tea Bill, the Justice Committee, oversight."
              cta="The Record"
              href="/record"
            />
            <EntryCard
              n="03"
              title="What's next"
              body="Six draft priorities, each measurable."
              cta="Kazi Iendelee"
              href="/kazi-iendelee"
            />
          </div>
        </section>

        <section>
          <H>StatCard (visible source, as-of, WhatsApp share, count-up)</H>
          <div className="grid gap-4 md:grid-cols-3">
            {pick(["years-in-office", "bills-sponsored", "growers"]).map((s) => (
              <StatCard key={s.id} stat={s} />
            ))}
          </div>
        </section>

        <section>
          <H>PriorityCard (Draft badge)</H>
          <div className="grid gap-4 md:grid-cols-3">
            {commitments.slice(0, 3).map((c, i) => (
              <PriorityCard key={c.id} commitment={c} index={i} />
            ))}
          </div>
        </section>

        <section>
          <H>ConstituencyList</H>
          <ConstituencyList linked={false} />
        </section>
      </div>

      <section className="bg-ink text-paper py-12">
        <div className="shell">
          <H>Timeline</H>
          <Timeline
            steps={[
              {
                id: "a",
                title: "Ndamichonik Primary",
                period: "1987–1995",
                sourceIds: ["parliament-profile"],
              },
              { id: "b", title: "Advocate", period: "2009", sourceIds: ["parliament-profile"] },
              {
                id: "c",
                title: "Senator for Bomet",
                period: "2022",
                sourceIds: ["star-swearing-in-2022"],
              },
              { id: "d", title: "A second term?", period: "10.08.2027", future: true },
            ]}
          />
        </div>
      </section>

      <CountdownBand />

      <CTABand
        title={["This campaign", "belongs to Bomet."]}
        cta="Pledge your support"
        href="/get-involved"
        ways={[
          {
            title: "Volunteer in your constituency",
            body: "Canvass, register voters.",
            href: "/get-involved#volunteer",
          },
          {
            title: "Host a ward conversation",
            body: "The campaign comes to listen.",
            href: "/get-involved#host",
          },
          {
            title: "Tell us what Term 2 must deliver",
            body: "Your priority, in your words.",
            href: "/get-involved",
          },
        ]}
      />
    </div>
  );
}
