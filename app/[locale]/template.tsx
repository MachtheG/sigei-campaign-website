import { ViewTransition } from "react";

// Route changes are transitions, so this cross-fades pages with the View Transitions API
// where supported (no-op elsewhere; disabled for reduced motion in globals.css).
export default function Template({ children }: { children: React.ReactNode }) {
  return <ViewTransition>{children}</ViewTransition>;
}
