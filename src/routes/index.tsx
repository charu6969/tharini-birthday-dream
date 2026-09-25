import { createFileRoute } from "@tanstack/react-router";
import { BirthdayStory } from "@/components/birthday-story";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy 21st Birthday, Tharini 💗" },
      { name: "description", content: "A little world made with love for Tharini's 21st birthday on 26 September 2026." },
      { property: "og:title", content: "Happy 21st Birthday, Tharini 💗" },
      { property: "og:description", content: "A personal birthday story, filled with memories, laughter, and love." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <BirthdayStory />;
}
