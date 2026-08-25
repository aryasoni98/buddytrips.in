import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { itineraries } from "../src/data/itineraries";
import { site } from "../src/data/site";
import { tours } from "../src/data/tours";
import {
  generateHomeMarkdown,
  generateItineraryMarkdown,
  generateTourMarkdown,
} from "../src/lib/markdown";

const publicDir = join(process.cwd(), "public");

function write(relPath: string, contents: string) {
  const filePath = join(publicDir, relPath);
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, `${contents.trimEnd()}\n`);
}

const llms = [
  `# ${site.name}`,
  "",
  `> ${site.description}`,
  "",
  "## For AI agents",
  "",
  "Send `Accept: text/markdown` against any URL on this site to get clean markdown at the same address.",
  "",
  "## Tours",
  ...tours.map((t) => `- ${t.title} - ${t.price} - ${t.location}`),
  "",
  "## Contact",
  `- Phone: ${site.phone}`,
  `- Email: ${site.email}`,
  `- WhatsApp: ${site.whatsapp}`,
  `- Instagram: ${site.instagram}`,
].join("\n");

const llmsFull =
  generateHomeMarkdown() +
  "\n\n---\n\n" +
  tours.map((t) => generateTourMarkdown(t)).join("\n\n---\n\n");

write("llms.txt", llms);
write("llms-full.txt", llmsFull);
write("api/md/pages/home.md", generateHomeMarkdown());

for (const itinerary of itineraries) {
  write(
    `api/md/itineraries/${itinerary.slug}.md`,
    generateItineraryMarkdown(itinerary),
  );
}
