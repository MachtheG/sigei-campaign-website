import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { SenatorImage } from "@/components/shared/SenatorImage";

export const metadata: Metadata = { title: "Styleguide", robots: { index: false, follow: false } };

const swatches = [
  ["bg-bg", "bg"], ["bg-surface", "surface"], ["bg-brand", "brand (tea green)"], ["bg-brand-2", "brand-2"],
  ["bg-accent", "accent (UDA yellow, placeholder)"], ["bg-fg", "ink"], ["bg-muted", "muted"], ["bg-line", "line"],
];

export default async function Styleguide({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 py-12 sm:px-6">
      <h1 className="t-h1">Styleguide</h1>
      <section>
        <h2 className="t-h2">Colour</h2>
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {swatches.map(([c, n]) => (
            <li key={c}><div className={`${c} h-20 rounded-2xl border border-line`} /><p className="mt-1 text-sm">{n}</p></li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="t-h2">Type</h2>
        <p className="t-display mt-4">Display</p>
        <p className="t-h1 mt-2">Heading 1</p>
        <p className="t-h2 mt-2">Heading 2</p>
        <p className="t-lead mt-2">Lead paragraph in the body face.</p>
        <p className="mt-2">Body text: legible at 17px with a 1.6 line height, set in Inter.</p>
      </section>
      <section>
        <h2 className="t-h2">Buttons</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button>Accent</Button><Button variant="brand">Brand</Button>
          <Button variant="outline">Outline</Button><Button variant="ghost">Ghost</Button>
        </div>
      </section>
      <section>
        <h2 className="t-h2">Photo placeholder</h2>
        <div className="mt-4 max-w-sm"><SenatorImage id="portrait-formal" sizes="384px" /></div>
      </section>
    </div>
  );
}
