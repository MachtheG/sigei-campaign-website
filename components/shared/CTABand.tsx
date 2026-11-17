import { Link } from "@/lib/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SenatorImage } from "./SenatorImage";

type Props = {
  title: string;
  body?: string;
  cta: string;
  href: "/get-involved" | "/kazi-iendelee" | "/record" | "/elections" | "/contact";
  photoId?: string;
};

export function CTABand({ title, body, cta, href, photoId = "events-rally" }: Props) {
  return (
    <section className="bg-accent text-on-accent">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
        <div>
          <h2 className="t-h2">{title}</h2>
          {body && <p className="text-on-accent/80 mt-4 max-w-[52ch] text-lg">{body}</p>}
          <Link
            href={href}
            className={cn(buttonVariants({ size: "lg", variant: "brand" }), "mt-8")}
          >
            {cta}
          </Link>
        </div>
        <SenatorImage
          id={photoId}
          sizes="(min-width: 768px) 560px, 100vw"
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}
