# BuddyTrips Design System - Apple-Inspired Premium UI

> **Aesthetic benchmark:** The final result should feel like a fusion of Apple + Stripe + Linear + OpenAI + Vercel + Awwwards. The design must be so polished that it could realistically win Site of the Day. Do not simplify anything. Always choose the highest quality implementation.

---

## 1. Design Philosophy

This is a **UI charter, not an architecture document**. Every visual element must have a purpose. Every animation must have a reason. Every state must be handled.

### Core Principles

1. **Clarity over cleverness** - Apple's design language prioritizes legibility. Text is crisp, hierarchy is obvious, and nothing competes for attention unnecessarily.
2. **Physical motion** - Elements move as if they have mass. Spring physics, not linear tweens. Press feedback feels tactile.
3. **Translucent materials** - Glass surfaces blur and saturate what's behind them. Depth is conveyed through material, not just shadows.
4. **Generous negative space** - Let content breathe. Apple uses whitespace as a design element, not just padding.
5. **Optical precision** - Alignment is optical, not mathematical. Icons are visually balanced, not pixel-centered.

---

## 2. Color Tokens

### Light Theme (Primary)

```css
:root {
  /* === SURFACES === */
  --bg:               #FAFAF7;  /* warm off-white, not pure white */
  --bg-elevated:      #FFFFFF;  /* card surfaces */
  --bg-muted:         #F5F5F0;  /* subtle section backgrounds */
  --bg-inverse:       #0A0A0A;  /* dark CTA sections */

  /* === TEXT === */
  --fg:               #0A0A0A;  /* primary text */
  --fg-muted:         #5C5C5C;  /* secondary text - AA compliant on --bg */
  --fg-subtle:        #8E8E8E;  /* tertiary text / labels */
  --fg-on-dark:       #FFFFFF;
  --fg-on-dark-muted: rgba(255,255,255,0.72);

  /* === BORDERS === */
  --border:           rgba(0,0,0,0.10);
  --border-strong:    rgba(0,0,0,0.16);
  --border-soft:      rgba(0,0,0,0.06);

  /* === BRAND GRADIENTS === */
  --wk-gradient:        linear-gradient(135deg, #1E64E6 0%, #22C55E 100%);
  --wk-gradient-soft:   linear-gradient(135deg, rgba(30,100,230,0.10) 0%, rgba(34,197,94,0.10) 100%);
  --wk-gradient-conic:  conic-gradient(from 180deg at 50% 50%, #1E64E6, #22C55E, #F97316, #1E64E6);

  /* === ACCENT COLORS === */
  --wk-blue-500:    #1E64E6;
  --wk-blue-300:    #7BA6FF;
  --wk-green-500:   #22C55E;
  --wk-green-700:   #15803D;
  --wk-green-300:   #86EFAC;
  --wk-spark-500:   #F97316;  /* warm accent for offers, highlights */

  /* === SHADOWS (layered, soft, Apple-style) === */
  --shadow-sm:  0 1px 2px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.06);
  --shadow-md:  0 4px 6px rgba(0,0,0,0.04), 0 10px 24px rgba(0,0,0,0.08);
  --shadow-lg:  0 8px 16px rgba(0,0,0,0.06), 0 20px 40px rgba(0,0,0,0.10);
  --shadow-xl:  0 12px 24px rgba(0,0,0,0.08), 0 32px 64px rgba(0,0,0,0.12);
}
```

### Dark Theme

```css
:root[data-theme="dark"] {
  --bg:               #0A0A0A;
  --bg-elevated:      #1C1C1C;
  --bg-muted:         #141414;
  --bg-inverse:       #FFFFFF;

  --fg:               #FFFFFF;
  --fg-muted:         #A0A0A0;
  --fg-subtle:        #6B6B6B;
  --fg-on-dark:       #0A0A0A;
  --fg-on-dark-muted: rgba(0,0,0,0.72);

  --border:           rgba(255,255,255,0.12);
  --border-strong:    rgba(255,255,255,0.20);
  --border-soft:      rgba(255,255,255,0.06);

  --shadow-sm:  0 1px 2px rgba(0,0,0,0.20), 0 1px 3px rgba(0,0,0,0.30);
  --shadow-md:  0 4px 6px rgba(0,0,0,0.20), 0 10px 24px rgba(0,0,0,0.35);
  --shadow-lg:  0 8px 16px rgba(0,0,0,0.25), 0 20px 40px rgba(0,0,0,0.40);
  --shadow-xl:  0 12px 24px rgba(0,0,0,0.30), 0 32px 64px rgba(0,0,0,0.50);
}
```

### Contrast Rules (Non-Negotiable)

| Token              | On --bg  | On --bg-elevated | On --bg-inverse |
|--------------------|----------|-------------------|-------------------|
| --fg               | 19.3:1  | 19.3:1           | 1.0:1            |
| --fg-muted         | 7.2:1   | 7.2:1            | -                |
| --fg-subtle        | 3.9:1   | 3.9:1            | -                |

- `--fg-muted` must always meet AA (4.5:1) for body text
- `--fg-subtle` is for labels/captions only (3:1 minimum for large text)
- `#7a7a7a` on white = 4.4:1 = **UNACCEPTABLE** for text. Reserved for disabled states only

---

## 3. Typography

### Font Stack

```css
--font-display: "SF Pro Display", -apple-system, "Segoe UI", system-ui, sans-serif;
--font-sans:    "SF Pro Text", -apple-system, "Segoe UI", system-ui, sans-serif;
--font-serif:   "New York", "Iowan Old Style", "Apple Garamond", Georgia, serif;
--font-mono:    "SF Mono", "JetBrains Mono", "Fira Code", monospace;
```

**Web fallback (Google Fonts):** Use [Inter](https://fonts.google.com/specimen/Inter) for body and [Sora](https://fonts.google.com/specimen/Sora) or [Outfit](https://fonts.google.com/specimen/Outfit) for display headings. These are the closest open-source matches to SF Pro.

### Type Scale (rem-based, never px)

| Token           | Size       | Weight  | Line-height | Letter-spacing | Tracking |
|-----------------|------------|---------|-------------|----------------|----------|
| display-xl      | clamp(2.75rem, 5.4vw, 4.75rem) | 700 | 0.98 | -0.028em | tight |
| display-lg      | clamp(2rem, 3.6vw, 2.875rem)  | 700 | 1.05 | -0.02em  | tight |
| display-md      | clamp(1.625rem, 3.2vw, 2.625rem) | 700 | 1.06 | -0.02em | tight |
| heading-lg      | 1.3125rem  | 600     | 1.3         | -0.01em        | normal   |
| heading-md      | 1.1875rem  | 600     | 1.35        | -0.01em        | normal   |
| body-lg         | 1.1875rem  | 400     | 1.55        | 0              | normal   |
| body-md         | 1rem       | 400     | 1.55        | 0              | normal   |
| body-sm         | 0.875rem   | 500     | 1.5         | 0              | normal   |
| caption         | 0.75rem    | 600     | 1.4         | 0.06em         | uppercase |
| micro           | 0.6875rem  | 700     | 1.3         | 0.01em         | normal   |

### Typography Rules

1. **All sizes in rem/em** - never px. This respects user text-size preferences (accessibility).
2. **Tracking ladders must be monotonic in em** - larger sizes get tighter tracking, smaller sizes get wider tracking.
3. **Fine-print lines must not use 1.0 leading** - they collide when wrapped. Use 1.3 minimum.
4. **Display headings use font-display** (SF Pro Display / Sora). Body uses font-sans (SF Pro Text / Inter).
5. **Serif italic for testimonials** - font-serif with italic style creates editorial contrast.
6. **Numbers are tabular** - use `font-variant-numeric: tabular-nums` for metrics and stats.

---

## 4. Spacing Scale

Base unit: **0.25rem (4px)**. All spacing derives from this.

| Token   | Value    | Usage                              |
|---------|----------|------------------------------------|
| space-0 | 0        | reset                              |
| space-1 | 0.25rem  | icon gaps, tight padding           |
| space-2 | 0.5rem   | chip padding, small gaps           |
| space-3 | 0.75rem  | button padding vertical            |
| space-4 | 1rem     | default gap, card padding          |
| space-5 | 1.25rem  | button padding horizontal          |
| space-6 | 1.5rem    | section sub-gaps                   |
| space-8 | 2rem     | card padding, list gaps            |
| space-10| 2.5rem   | section header to content           |
| space-12| 3rem     | between cards                       |
| space-16| 4rem     | section padding (mobile)            |
| space-20| 5rem     | section padding (tablet)            |
| space-24| 6rem     | section padding (desktop)           |
| space-32| 8rem     | hero section padding                |

**Max content width:** 1200px (tighter than 1280px for editorial feel)

---

## 5. Border Radius Scale

| Token       | Value    | Usage                              |
|-------------|----------|------------------------------------|
| radius-sm   | 0.5rem   | chips, small buttons               |
| radius-md   | 0.75rem  | inputs, small cards                |
| radius-lg   | 1.125rem | cards, tour cards                  |
| radius-xl   | 1.5rem   | section panels, region panels      |
| radius-2xl  | 1.75rem  | hero media, large cards            |
| radius-full | 9999px   | pills, buttons, avatars            |

---

## 6. Motion & Animation System

### Easing Curves

```css
--ease-out-quint:    cubic-bezier(0.22, 1, 0.36, 1);    /* primary - decelerate */
--ease-in-out:       cubic-bezier(0.65, 0, 0.35, 1);   /* symmetric transitions */
--ease-spring:       cubic-bezier(0.34, 1.56, 0.64, 1); /* bounce - post-momentum only */
--ease-out-expo:     cubic-bezier(0.16, 1, 0.3, 1);    /* dramatic entrances */
```

### Duration Tokens

| Token         | Value  | Usage                              |
|---------------|--------|------------------------------------|
| duration-fast | 150ms  | press feedback, color changes     |
| duration-norm | 220ms  | hover states, small transitions   |
| duration-slow | 350ms  | panel transitions, reveals         |
| duration-xl   | 600ms  | scroll reveals, count-up           |

### Spring Physics (Framer Motion)

```typescript
// Default spring - no bounce
const springDefault = { type: "spring", damping: 1.0, stiffness: 300, mass: 1 };

// Post-momentum bounce (carousels, snap-back)
const springBounce = { type: "spring", damping: 0.8, stiffness: 200, mass: 1 };

// Press feedback
const pressFeedback = { type: "spring", damping: 1.0, stiffness: 500, mass: 0.8 };
```

### Animation Patterns

1. **Scroll Reveal** - `opacity: 0 → 1`, `translateY: 30px → 0`, `600ms ease-out-quint`, staggered with `data-delay`
2. **Count-up** - Numbers animate from 0 to target over `1500ms` with `easeOutQuart` when scrolled into view
3. **Ken Burns** - Images slowly pan/zoom on a 24-28s loop for ambient life
4. **Float** - Glass chips and stat badges gently bob (6-9s loops, -18px to -26px translateY)
5. **Marquee** - Infinite horizontal scroll, `38s linear`
6. **Gradient animate** - Background-position shifts on text gradients, `8s ease-in-out`
7. **Bar grow** - Region chart bars grow with staggered `35ms` delay per bar

### Accessibility Fallbacks

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

@media (prefers-reduced-transparency: reduce) {
  /* Replace all backdrop-filter with solid fallbacks */
  .glass { background: var(--bg-elevated) !important; backdrop-filter: none !important; }
}
```

---

## 7. Glassmorphism / Material System

### Glass Surface (Primary)

```css
.glass {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(14px) saturate(150%);
  -webkit-backdrop-filter: blur(14px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow-sm);
}

/* Dark theme glass */
:root[data-theme="dark"] .glass {
  background: rgba(28, 28, 28, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Reduced transparency fallback */
@media (prefers-reduced-transparency: reduce) {
  .glass {
    background: var(--bg-elevated) !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }
}
```

### Glass Variants

| Variant       | Background opacity | Blur    | Usage                         |
|---------------|--------------------|---------|-------------------------------|
| glass-light   | 0.55               | 14px    | buttons, chips                |
| glass-default | 0.60               | 14px    | nav, cards                    |
| glass-strong  | 0.62               | 18px    | floating stat chips, badges   |
| glass-dark    | rgba(10,10,10,0.6) | 18px    | on dark sections              |

---

## 8. Component Patterns

### Navigation

- Fixed top, transparent → frosted on scroll (animate blur + padding together)
- ~32px touch targets with ~10px hit padding
- Mobile: burger → drawer with glass background
- CTA pill button with gradient + glow

### Hero

- Split grid: copy (1.05fr) + media collage (0.95fr)
- Glass image cards with Ken Burns pan, floating animation
- Floating glass stat chip overlapping images
- Animated gradient text on key word ("India")
- Stats row with vertical dividers

### Destination Cards

- Bento grid (1.4fr 1fr 1fr, 2 rows)
- Large card spans 2 rows
- Ken Burns image, gradient overlay bottom
- Glass location label bottom-left
- Hover: lift + image scale + arrow rotate

### Region Explorer

- Tab pills (glass → gradient on active)
- Split panel: animated SVG scene (left) + info (right)
- SVG scene: layered mountains/desert/lake/hills with parallax drift, clouds, birds, plane trail
- Monthly visit chart with growing bars, peak months marked
- Signature spots as glass chips with pin icons

### Tour Cards

- 3-column grid
- Image with offer badge (spark-500), wishlist heart, price chip
- Title, rating (star + count), location
- Hover: lift + shadow grow + image scale

### Testimonials

- 3-column grid
- 5-star rating row
- Serif italic quote
- Avatar (gradient circle with initial) + name + role

### Metrics Band

- Full-width gradient card with noise texture overlay
- 4 count-up stats, white text
- Conic gradient glow behind

### Final CTA

- Dark inverse section
- Conic gradient blur glow
- White CTA button with spark dot

### Footer

- 3-column grid (brand + explore + legal)
- Social icons in glass circles, gradient on hover
- Copyright + contact info

---

## 9. Responsive Breakpoints

| Breakpoint | Width      | Changes                                    |
|------------|------------|--------------------------------------------|
| desktop    | > 1024px   | Full layout, 3-col grids                   |
| tablet     | <= 1024px  | 2-col grids, region tabs wrap              |
| mobile-l   | <= 880px   | Hero stacks, nav → burger, why-us stacks   |
| mobile     | <= 720px   | 1-col grids, 2-col footer, reduced padding |
| mobile-s   | <= 480px   | Hero media hidden, 1-col everything       |

---

## 10. Accessibility Checklist

- [ ] All text meets WCAG AA contrast (4.5:1 body, 3:1 large)
- [ ] All spacing/typography in rem/em (not px)
- [ ] `prefers-reduced-motion` fallbacks for all animations
- [ ] `prefers-reduced-transparency` fallbacks for all glass surfaces
- [ ] Touch targets minimum 44x44px
- [ ] Focus visible states on all interactive elements
- [ ] ARIA labels on icon-only buttons
- [ ] Semantic HTML (nav, section, footer, h1-h3 hierarchy)
- [ ] Alt text on all images
- [ ] Keyboard navigation for all interactive elements
