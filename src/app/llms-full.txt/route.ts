import { generateHomeMarkdown, generateTourMarkdown } from "@/lib/markdown";
import { tours } from "@/data/tours";

export const dynamic = "force-static";

export function GET() {
  const content =
    generateHomeMarkdown() +
    "\n\n---\n\n" +
    tours.map((t) => generateTourMarkdown(t)).join("\n\n---\n\n");

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
