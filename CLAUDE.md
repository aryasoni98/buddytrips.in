# CLAUDE.md - BuddyTrips Next.js Build Instructions

> This file is the entry point for Claude Code. Read it first, then follow the references.

## Project

BuddyTrips (buddytrips.in) - premium adventure travel company website. Rebuilding from a single HTML file to a production-grade Next.js application with Apple-inspired design and full SEO/AEO/GEO.

## Read These Files First

1. **DESIGN.md** - UI charter. All design tokens, patterns, and rules. Non-negotiable.
2. **MASTER_PROMPT.md** - Full project architecture, component specs, and implementation phases.
3. **SEO_AEO_GEO.md** - Metadata, JSON-LD, sitemaps, content negotiation, llms.txt.

## Aesthetic Benchmark

The final result should feel like a fusion of Apple + Stripe + Linear + OpenAI + Vercel + Awwwards. The design must be so polished that it could realistically win Site of the Day. Do not simplify anything. Always choose the highest quality implementation.

## Tech Stack

- Next.js 15+ (App Router)
- TypeScript (strict)
- Tailwind CSS v4
- Framer Motion (motion/react)
- next/image, next/font

## Build Order

1. Phase 0: tokens.css + globals.css + data files + utils
2. Phase 1: layout.tsx + SEO shell + sitemap + robots + llms.txt + Navbar + Footer
3. Phase 2: UI primitives (GlassCard, GradientButton, CountUp, ScrollReveal, KenBurnsImage)
4. Phase 3: Section components (Hero → Marquee → Destinations → RegionExplorer → FeaturedTours → WhyChooseUs → MetricsBand → Testimonials → FinalCTA)
5. Phase 4: Compose landing page in page.tsx
6. Phase 5: Content negotiation + AEO routes
7. Phase 6: Legal pages
8. Phase 7: Quality check (Lighthouse, Rich Results Test, curl test)

## Quality Standards

1. Every visual element must have a purpose.
2. Every animation must have a reason.
3. Every number must be clickable.
4. Every state must be handled.
5. All text meets WCAG AA contrast.
6. All spacing/typography in rem/em, never px.
7. Server Components by default. "use client" only when needed.
8. next/image for all images.
9. Semantic HTML.
10. No layout shift.

## Existing Content

The current site is a single HTML file. All content (tours, destinations, regions, reviews, site config) has been extracted into typed data structures in MASTER_PROMPT.md. Use those as the single source of truth.

## Contact Info

- Phone: +91-9811295429
- Email: connect@buddytrips.in
- WhatsApp: https://wa.me/919811295429
- Instagram: https://www.instagram.com/buddytrips.in/
- Domain: https://buddytrips.in

## Begin

```
BEGIN NOW. Start with Phase 0 - write the design system plan to src/styles/tokens.css. Then Phase 1 - write the SEO shell. Then build components in dependency order. Do not skip the planning phase. Do not skip the quality check. Every visual element must have a purpose. Every animation must have a reason. Every number must be clickable. Every state must be handled. Do not stop until the website is premium, polished, accessible, and every test passes.
```

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
