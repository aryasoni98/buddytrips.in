import { site } from "@/data/site";
import { tours } from "@/data/tours";

export const dynamic = "force-static";

export function GET() {
  const lines = [
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
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
