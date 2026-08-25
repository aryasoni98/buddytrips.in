import { getItinerary } from "@/data/itineraries";
import { generateHomeMarkdown, generateItineraryMarkdown } from "@/lib/markdown";

const MARKDOWN_HEADERS = {
  "Content-Type": "text/markdown; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=86400",
  "X-Robots-Tag": "noindex, nofollow",
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;

  if (path.join("/") === "pages/home") {
    return new Response(generateHomeMarkdown(), { headers: MARKDOWN_HEADERS });
  }

  if (path[0] === "itineraries" && path[1]) {
    const itinerary = getItinerary(path[1]);
    if (!itinerary) return new Response("Not found", { status: 404 });
    return new Response(generateItineraryMarkdown(itinerary), { headers: MARKDOWN_HEADERS });
  }

  return new Response("Not found", { status: 404 });
}
