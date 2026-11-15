import createMiddleware from "next-intl/middleware";
import { routing } from "@/lib/i18n/routing";

// Next.js 16: the `middleware` file convention is now `proxy`.
export default createMiddleware(routing);

export const config = {
  // Everything except API routes, Next internals, and files with an extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
