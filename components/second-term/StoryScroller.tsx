import { chapters } from "@/data/second-term/story";
import { StoryChapter } from "./StoryChapter";

/** The scroll-told story: five full-height chapters, each with a photo of the Senator. */
export function StoryScroller() {
  return (
    <div>
      {chapters.map((c, i) => (
        <StoryChapter key={c.id} chapter={c} index={i} />
      ))}
    </div>
  );
}
