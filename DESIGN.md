# Design System Specification

A dark-first, high-contrast design system with neon green accents. Built for content-heavy interfaces requiring readability, energy, and a premium feel.

## 1. Visual Theme & Atmosphere

This design system embodies a vibrant, modern digital aesthetic. The interface merges bold neon accents with deep, sophisticated darks to create high-contrast readability and an immersive experience. The atmosphere is energetic yet accessible—driven by glowing cyan-green highlights that pop against near-black backgrounds. Rounded, friendly corner treatments soften the tech-forward edge, while generous whitespace and layered shadows provide depth and hierarchy. Typography is bold and intentional, using the Thai-optimized Prompt font to ensure clarity across multiple languages and screen sizes.

**Key Characteristics**
- High-contrast neon accents (`#00FFA1`) commanding attention against dark neutrals
- Deep, near-black base (`#111111`, `#0F172A`) reducing eye strain for long reading sessions
- Rounded, pill-shaped button treatments (`30px` radius) promoting friendliness and modernity
- Layered shadow system creating distinct elevation zones
- Thai-first typography with Prompt font ensuring cross-cultural legibility
- Generous padding and spacing reinforcing premium, uncluttered feel

## 2. Color Palette & Roles

### Primary
- **Primary Accent** (`#00FFA1`): Call-to-action elements, buttons, interactive highlights, navigation focus states, and download prompts. Highest usage signals brand dominance and user engagement.
- **Primary Accent Muted** (`#4BDD9E`): Secondary interactive states, subtle backgrounds for featured content, hover/active refinement of primary accent.

### Accent Colors
- **Premium Teal** (`#00C896`): Tertiary accent for specialized UI elements, navigation polish, or thematic borders.

### Interactive
- **Bright Green CTA** (`#00FFA1`): Primary button fills, download triggers, action prompts. High visibility and urgency.
- **Soft Teal** (`#4BDD9E`): Secondary CTAs, navigation indicators, or navigational hover states.

### Neutral Scale
- **Pure White** (`#FFFFFF`): Text on dark backgrounds, card surfaces, overlay fills. Maximum contrast for readability.
- **Off-White** (`#F8FAFC`): Subtle backgrounds for cards, section dividers, or soft contrast layers.
- **Light Gray** (`#DDDDDD`): Secondary text, placeholder text, disabled states, borders on light surfaces.
- **Medium Gray** (`#CCCCCC`): Tertiary text, icon placeholders, or subtle separators.
- **Dim Gray** (`#AAAAAA`): Caption text, helper text, very low-emphasis labels.
- **Dark Gray** (`#333333`): Secondary body text, alternative headings, or interface borders on dark backgrounds.

### Surface & Borders
- **Deep Black** (`#000000`): Darkest backgrounds, strong text contrast, shadow base.
- **Near-Black** (`#111111`): Primary interface backgrounds, input fields, card surfaces.
- **Near-Black Alt** (`#0F172A`): Deep backgrounds for hero sections or premium content.
- **Subtle Border** (`#333333`): Form input borders, card edges on dark mode.

### Semantic / Status
- **Disabled/Muted** (`#DDDDDD` on `#111111`): Form inputs when disabled, inactive navigation items.

## 3. Typography Rules

### Font Family
**Primary:** Prompt (Google Fonts variable weight)
- Fallback stack: `Prompt, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- Optimized for Thai script with full weight range (100–900)

**Secondary:** System stack (if Prompt unavailable)
- `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| **Display/Hero** | Prompt | 32px | 800 | 48px | 0px | Large promotional headings, page titles |
| **H1** | Prompt | 24px | 800 | 36px | 0px | Primary page heading, main content title |
| **H2** | Prompt | 20px | 400 | 30px | 0px | Section headings, episode numbers |
| **H3** | Prompt | 16px | 400 | 28.8px | 0px | Subsection titles, card headers |
| **Body Strong** | Prompt | 20px | 800 | 30px | 0px | Emphasis in body copy, bold statements |
| **Body** | Prompt | 16px | 400 | 24px | 0px | Primary content text, paragraph copy |
| **Label** | Prompt | 14px | 400 | 21px | 0px | Form labels, badge text, metadata |
| **Caption** | Prompt | 14.4px | 400 | 23.04px | 0px | Helper text, secondary info, timestamps |
| **Button** | Prompt | 15.2px | 700 | 22.8px | 0px | Interactive button text, primary CTA |
| **Link** | Prompt | 24px | 800 | 36px | 0px | Navigation links, primary links |
| **Navigation** | Prompt | 16px | 400 | 24px | 0px | Top nav items, breadcrumb text |
| **Span/Inline** | Prompt | 14.4px | 400 | 23.04px | 0px | Inline emphasis, tag text |
| **Code** | Prompt | 13.6px | 400 | 20.4px | 0px | Monospace fallback acceptable; used sparingly |

### Principles
- **Hierarchy through weight:** Bold (`800`, `700`) for primary action and emphasis; regular (`400`) for body and secondary information.
- **Generous line height:** Minimum `1.4×` font size to ease reading of Thai script and support accessibility.
- **Scale in steps:** 16px base body, 20px for emphasis, 24px for links, 32px for display.
- **Prompt-first:** Thai script support mandates Prompt; system fonts only as fallback.
- **No letter-spacing:** Relies on Prompt's native kerning for clean, professional appearance.
- **Weight range:** Restrict to 400 (regular), 600 (semibold), 700 (bold), 800 (extra bold) for consistency.

## 4. Component Stylings

### Buttons

**Primary Button (Bright CTA)**
- Background: `#00FFA1`
- Text Color: `#000000`
- Font Size: `15.2px`
- Font Weight: `700`
- Font Family: `Prompt`
- Padding: `12px 24px`
- Border Radius: `30px`
- Border: `0px none`
- Box Shadow: `rgba(0, 0, 0, 0.3) 0px 4px 10px 0px`
- Line Height: `22.8px`
- Min Height: `40px`
- Hover: Background `#4BDD9E`, shadow `rgba(0, 0, 0, 0.4) 0px 6px 16px 0px`
- Active: Background `#00C896`, shadow `rgba(0, 0, 0, 0.2) 0px 2px 6px 0px`
- Disabled: Background `#CCCCCC`, Text `#999999`, no shadow

**Secondary Button (Outlined)**
- Background: `transparent`
- Text Color: `#DDDDDD`
- Font Size: `14.4px`
- Font Weight: `400`
- Font Family: `Prompt`
- Padding: `8px 16px`
- Border Radius: `30px`
- Border: `1px solid #DDDDDD`
- Box Shadow: `none`
- Line Height: `21.6px`
- Hover: Text `#FFFFFF`, Border `#FFFFFF`, Background `rgba(255, 255, 255, 0.05)`
- Active: Text `#00FFA1`, Border `#00FFA1`

**Ghost Button (Minimal)**
- Background: `transparent`
- Text Color: `#000000`
- Font Size: `14.4px`
- Font Weight: `600`
- Font Family: `Prompt`
- Padding: `6px 14px`
- Border Radius: `30px`
- Border: `0px none`
- Box Shadow: `none`
- Line Height: `21.6px`
- Hover: Background `rgba(0, 0, 0, 0.05)`
- Active: Background `rgba(0, 0, 0, 0.1)`

**Navigation Button (Pagination)**
- Background: `transparent`
- Text Color: `#DDDDDD`
- Font Size: `14.4px`
- Font Weight: `400`
- Font Family: `Prompt`
- Padding: `0px`
- Border Radius: `0px`
- Border: `0px solid`
- Box Shadow: `none`
- Line Height: `21.6px`
- Hover: Text `#00FFA1`, underline `1px solid #00FFA1`
- Active: Text `#00FFA1`

### Cards & Containers

**Content Card**
- Background: `#111111`
- Border: `1px solid #333333`
- Border Radius: `8px`
- Padding: `16px`
- Box Shadow: `rgba(0, 0, 0, 0.3) 0px 4px 20px 0px`
- Hover: Shadow `rgba(0, 0, 0, 0.5) 0px 8px 24px 0px`, transform `translateY(-4px)`

**Featured Section**
- Background: `rgba(0, 255, 161, 0.05)`
- Border: `2px solid #00FFA1`
- Border Radius: `12px`
- Padding: `24px`
- Box Shadow: `rgba(0, 255, 161, 0.1) 0px 0px 20px inset`

**Header Container**
- Background: `rgba(0, 0, 0, 0.8)` with backdrop blur `8px`
- Border Bottom: `1px solid rgba(51, 51, 51, 0.5)`
- Padding: `16px 24px`
- Box Shadow: `rgba(0, 0, 0, 0.3) 0px 4px 10px 0px`

### Inputs & Forms

**Text Input**
- Background: `#0E0E0E`
- Text Color: `#FFFFFF`
- Font Size: `14.4px`
- Font Weight: `400`
- Font Family: `Prompt`
- Padding: `10px 12px`
- Border Radius: `6px`
- Border: `1px solid #333333`
- Box Shadow: `none`
- Line Height: `21.6px`
- Placeholder: `#AAAAAA`
- Focus: Border `#00FFA1`, Box Shadow `0px 0px 8px rgba(0, 255, 161, 0.3)`
- Disabled: Background `#1A1A1A`, Text `#666666`, Border `#222222`

**Textarea**
- Background: `#0E0E0E`
- Text Color: `#FFFFFF`
- Font Size: `14.4px`
- Font Weight: `400`
- Font Family: `Prompt`
- Padding: `12px 14px`
- Border Radius: `6px`
- Border: `1px solid #333333`
- Box Shadow: `none`
- Min Height: `120px`
- Focus: Border `#00FFA1`, Box Shadow `0px 0px 8px rgba(0, 255, 161, 0.3)`

**Form Label**
- Font Size: `13.6px`
- Font Weight: `400`
- Font Family: `Prompt`
- Color: `#DDDDDD`
- Margin Bottom: `6px`
- Line Height: `20.4px`

### Navigation

**Top Navigation Bar**
- Background: `rgba(0, 0, 0, 0)`
- Height: `56px`
- Padding: `0px 24px`
- Border Bottom: `1px solid rgba(51, 51, 51, 0.3)`
- Display: `flex`, `align-items: center`, `justify-content: space-between`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `Prompt`
- Color: `#000000`
- Hover Link: Color `#00FFA1`

**Breadcrumb**
- Font Size: `14px`
- Font Weight: `400`
- Color: `#AAAAAA`
- Separator: `>` in `#666666`
- Active: Color `#00FFA1`, Font Weight `600`

**Pagination Controls**
- Button Style: Ghost buttons with `14.4px` font
- Active: Background `#00FFA1`, Text `#000000`
- Inactive: Text `#DDDDDD`, hover `#00FFA1`
- Spacing: `8px` between buttons

## 5. Layout Principles

### Spacing System

**Base Unit:** `4px`

**Spacing Scale:**
- `4px`: Tight micro-spacing (between icon and label)
- `8px`: Compact spacing (button padding, input padding)
- `12px`: Small spacing (form fields, inline elements)
- `16px`: Default spacing (cards, sections, outer padding)
- `20px`: Medium spacing (component separation)
- `24px`: Large spacing (major sections, content blocks)
- `32px`: Extra large spacing (section breaks)
- `64px`: Hero spacing (between major sections)
- `100px`: Massive spacing (top/bottom of page sections)
- `136px`: Full-bleed section separation

**Usage Context:**
- **Padding:** `8px` (inputs), `12px` (labels), `16px` (cards), `24px` (containers)
- **Margin:** `16px` (between elements), `32px` (section breaks), `100px` (hero sections)
- **Gap:** `12px` (flex grids), `16px` (card layouts)

### Grid & Container

**Max Width:** `1440px`

**Column Strategy:**
- Desktop: 12-column grid, `1440px` container
- Tablet: 8-column grid, `960px` container
- Mobile: 4-column grid, `320px` + safe area

**Section Patterns:**
- Hero: Full bleed, max-width `1440px`, padding `60px 24px`
- Content: Max-width `1200px`, centered, padding `40px 24px`
- Sidebar: `25%` width (desktop), stacked (mobile)

### Whitespace Philosophy

Generous whitespace defines premium experience. All content blocks breathe with at least `24px` padding. Section separation uses `64px–100px` vertical gaps. Input fields and buttons have `12px–16px` internal padding, preventing cramped appearance. Horizontal padding scales: `24px` on desktop, `16px` on tablet, `12px` on mobile. This approach reduces cognitive load and improves visual hierarchy.

### Border Radius Scale

- `0px`: Navigation bars, full-bleed sections, strict rectangles
- `6px`: Input fields, subtle forms, small UI elements
- `8px`: Card containers, link backgrounds, flexible rounding
- `12px`: Featured sections, elevated content zones
- `20px`: Secondary buttons, rounded panels
- `30px`: Primary buttons, pill-shaped navigation pills
- `50%`: Circular avatars, icon buttons, full circles

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| **Base (0)** | No shadow | Flat backgrounds, base content surfaces |
| **Level 1 (Sm)** | `rgba(0, 0, 0, 0.3) 0px 4px 20px 0px` | Dropdowns, small overlays, popovers |
| **Level 2 (Md)** | `rgba(0, 0, 0, 0.3) 0px 4px 10px 0px` | Standard buttons, cards, elevated content |
| **Level 3 (Lg)** | `rgba(0, 0, 0, 0.2) 0px 3px 6px 0px` | Subtle card hover, soft elevation |
| **Level 4 (Xl)** | `rgba(0, 0, 0, 0.3) 0px 2px 10px 0px` | Active buttons, focused inputs, modals |
| **Hover Elevation** | `rgba(0, 0, 0, 0.4) 0px 6px 16px 0px` | Interactive card lift, button press |

**Shadow Philosophy:**
Shadows serve both aesthetic and functional roles. Layered shadows create distinct depth zones without overwhelming. The primary shadow (`rgba(0, 0, 0, 0.3)`) provides consistent darkening across interactive elements. Hover states intensify shadows to signal interactivity. The deep black backgrounds (`#111111`, `#0F172A`) dampen visual harshness, allowing shadows to subtly communicate elevation rather than dominate. Inset glow effects (on featured sections) invert this paradigm, pulling focus inward.

## 7. Do's and Don'ts

### Do

- **Use `#00FFA1` for all primary CTAs.** Download buttons, action prompts, and main engagement points must use this signature neon accent.
- **Pair bright accents with deep neutrals.** Always place `#00FFA1` on `#111111` or `#0F172A` for maximum contrast and brand impact.
- **Maintain minimum touch targets of 40px height.** Buttons and interactive elements must be at least `40px` tall for mobile usability.
- **Apply generous padding to all input fields.** Use `10px–14px` vertical padding to prevent cramped form appearance.
- **Use Prompt font exclusively for Thai script support.** Never substitute system fonts for primary UI text.
- **Apply shadows to interactive elements.** Buttons, cards, and overlays require at least Level 2 shadow (`rgba(0, 0, 0, 0.3) 0px 4px 10px 0px`).
- **Scale typography by weight, not just size.** Use 800 weight for emphasis, 400 for body, never drop below 400.
- **Round button corners to `30px` for primary actions.** Pill-shaped buttons reinforce brand modernity.
- **Center content with max-width containers.** Use `1440px` max-width with symmetric padding.
- **Apply backdrop blur to header overlays.** Use `blur(8px)` on semi-transparent dark headers for premium feel.
- **Test on both light and dark surfaces.** Ensure color contrast (AAA WCAG 2.1) on all interactive elements.

### Don't

- **Never use bright greens or magentas outside the approved palette.** Stick to `#00FFA1`, `#4BDD9E`, `#00C896`.
- **Don't apply shadows to text elements.** Text shadows muddy readability; use color contrast instead.
- **Avoid sharp corners on buttons and input fields.** Minimum `6px` radius for inputs, `30px` for buttons.
- **Don't shrink input fields below `39px` height.** Minimum touch target is 44px (iOS standard); account for padding.
- **Never left-align content on wide screens.** Always center with max-width containers or grid columns.
- **Avoid mixing font weights within the same line.** Choose weight for entire line (either 400 or 700+).
- **Don't use placeholder text as form labels.** Use explicit `<label>` elements with `13.6px` weight 400.
- **Avoid low-contrast text on dark backgrounds.** Minimum contrast ratio 7:1 for readability.
- **Don't apply multiple shadows to a single element.** Stack shadows only with specific design purpose (e.g., inset + outer for depth).
- **Never hide navigation items on desktop.** Horizontal nav must remain visible; use collapsible submenus sparingly.
- **Avoid purple, orange, or desaturated colors.** Restrict palette to approved cyan-green and neutral grays.
- **Don't disable form inputs without clear reason.** If disabled, show helper text explaining why.

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|------------|
| **Mobile** | 320px – 639px | Single column, stacked nav, `12px` padding, `14px` font base |
| **Tablet** | 640px – 1023px | 2–3 columns, slide-out nav, `16px` padding, `16px` font base |
| **Desktop** | 1024px+ | 12-column grid, horizontal nav, `24px` padding, `20px` font base |
| **Wide Desktop** | 1440px+ | Max-width containers, centered layout, full spacing scale |

### Touch Targets

- **Minimum height:** `44px` (iOS/Android standard) for all buttons, links, and form inputs
- **Minimum width:** `44px` for icon buttons
- **Spacing between targets:** At least `8px` to prevent accidental taps
- **Form input height:** `40px` minimum (includes padding)
- **Navigation items:** `48px` minimum height, `16px` horizontal padding

### Collapsing Strategy

- **Hero Section:** Full bleed on mobile (`100%` width), contained on tablet (`80%`), centered on desktop (`max-width 1200px`)
- **Navigation:** Horizontal on desktop (56px height), hamburger drawer on tablet/mobile
- **Cards:** 1 column on mobile, 2 on tablet, 3+ on desktop; grid `gap: 16px` throughout
- **Sidebar:** Adjacent on desktop (25% width), collapsed to tab/drawer on mobile
- **Padding Scale:** `12px` (mobile) → `16px` (tablet) → `24px` (desktop)
- **Typography Scale:** Base `14px` (mobile) → `16px` (tablet) → `20px` (desktop body)
- **Buttons:** Full width on mobile (`100%`, `height: 44px`), auto width on tablet/desktop
- **Forms:** Single column always; inputs `width: 100%` on mobile, constrained width on desktop

## 9. Implementation Guide

### Quick Color Reference

- **Primary CTA Background:** Bright Green (`#00FFA1`)
- **Primary CTA Text:** Deep Black (`#000000`)
- **Secondary CTA Border:** Light Gray (`#DDDDDD`)
- **Background (Dark Mode):** Near-Black (`#111111`)
- **Background (Hero):** Deep Navy (`#0F172A`)
- **Heading Text:** Pure White (`#FFFFFF`)
- **Body Text:** Off-White (`#F8FAFC`)
- **Secondary Text:** Light Gray (`#DDDDDD`)
- **Disabled/Muted:** Medium Gray (`#CCCCCC`)
- **Input Background:** Dark Gray (`#0E0E0E`)
- **Input Border:** Dark Gray (`#333333`)
- **Input Focus Border:** Bright Green (`#00FFA1`)
- **Accent Muted:** Soft Teal (`#4BDD9E`)
- **Premium Teal:** Teal (`#00C896`)

### Iteration Guide

1. **All buttons use `#00FFA1` for primary actions.** If it's the main CTA (download, play, submit), use bright neon green with `#000000` text, `30px` radius, `12px 24px` padding, and Level 2 shadow.

2. **Inputs always sit on `#0E0E0E` with `#333333` border, `#FFFFFF` text, and `6px` radius.** On focus, change border to `#00FFA1` and add glow `0px 0px 8px rgba(0, 255, 161, 0.3)`.

3. **Typography is Prompt font only.** Use weights 400 (body), 600 (semibold), 700 (bold buttons), 800 (display/strong). Never mix weights in a single line.

4. **Card shadows are always `rgba(0, 0, 0, 0.3) 0px 4px 10px 0px` base; hover lifts to `rgba(0, 0, 0, 0.4) 0px 6px 16px 0px`.** No exceptions.

5. **Dark mode is default.** Backgrounds are `#111111`, text is `#FFFFFF` or `#F8FAFC`, borders are `#333333`. No light mode variants.

6. **Container max-width is `1440px` centered.** Padding is `24px` on desktop, `16px` on tablet, `12px` on mobile.

7. **Spacing between major sections is `64px` (desktop) / `32px` (mobile) vertical gap.** Use `margin-bottom` or gap in flex/grid.

8. **Border radius follows scale:** `6px` (inputs), `8px` (cards), `12px` (featured), `30px` (buttons), `50%` (avatars).

9. **Navigation bar is 56px height, dark with `rgba(0, 0, 0, 0.8)` background and `1px solid #333333` bottom border.** Text is `16px` Prompt 400, hover state is `#00FFA1`.

10. **All interactive elements require minimum `44px` height/width.** Forms inputs, buttons, and link targets must meet this standard for mobile accessibility.

11. **Contrast minimum is 7:1 (AAA).** `#00FFA1` on `#111111` = ~10:1; `#DDDDDD` on `#111111` = ~9:1. Test all text colors.

12. **Hover states elevate (add shadow) and warm (shift color toward `#4BDD9E` or brighten).** No flat hover states; always signal interactivity through depth or color shift.
```

---

globals.css

```css
@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));

:root {
  --background: #111111;
  --foreground: #FFFFFF;
  --card: #111111;
  --card-foreground: #FFFFFF;
  --popover: #111111;
  --popover-foreground: #FFFFFF;
  --primary: #00FFA1;
  --primary-foreground: #000000;
  --secondary: #4BDD9E;
  --secondary-foreground: #000000;
  --muted: #333333;
  --muted-foreground: #AAAAAA;
  --accent: #00C896;
  --accent-foreground: #000000;
  --destructive: #E53E3E;
  --destructive-foreground: #FFFFFF;
  --border: #333333;
  --input: #0E0E0E;
  --ring: #00FFA1;
  --radius: 0.5rem;
  --radius-sm: calc(var(--radius) - 2px);
  --radius-md: var(--radius);
  --radius-lg: calc(var(--radius) + 4px);
  --radius-xl: calc(var(--radius) + 22px);
  --chart-1: #00FFA1;
  --chart-2: #4BDD9E;
  --chart-3: #00C896;
  --chart-4: #AAAAAA;
  --chart-5: #333333;
}

.dark {
  --background: #111111;
  --foreground: #FFFFFF;
  --card: #111111;
  --card-foreground: #FFFFFF;
  --popover: #111111;
  --popover-foreground: #FFFFFF;
  --primary: #00FFA1;
  --primary-foreground: #000000;
  --secondary: #4BDD9E;
  --secondary-foreground: #000000;
  --muted: #333333;
  --muted-foreground: #AAAAAA;
  --accent: #00C896;
  --accent-foreground: #000000;
  --destructive: #E53E3E;
  --destructive-foreground: #FFFFFF;
  --border: #333333;
  --input: #0E0E0E;
  --ring: #00FFA1;
  --radius: 0.5rem;
  --radius-sm: calc(var(--radius) - 2px);
  --radius-md: var(--radius);
  --radius-lg: calc(var(--radius) + 4px);
  --radius-xl: calc(var(--radius) + 22px);
  --chart-1: #00FFA1;
  --chart-2: #4BDD9E;
  --chart-3: #00C896;
  --chart-4: #AAAAAA;
  --chart-5: #333333;
}

@theme inline {
  --font-sans: 'Prompt', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: var(--radius-sm);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
  --radius-xl: var(--radius-xl);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-sans);
  }

  h1 {
    font-size: 24px;
    font-weight: 800;
    line-height: 36px;
  }
  h2 {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }
  h3 {
    font-size: 16px;
    font-weight: 400;
    line-height: 28.8px;
  }
  p, li {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  label {
    font-size: 13.6px;
    font-weight: 400;
    line-height: 20.4px;
    color: #DDDDDD;
    margin-bottom: 6px;
    display: block;
  }
  caption, .caption {
    font-size: 14.4px;
    font-weight: 400;
    line-height: 23.04px;
  }
  nav a {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  @media (max-width: 639px) {
    h1 { font-size: 22px; }
    h2, h3 { font-size: 18px; }
    p, li { font-size: 14px; }
    nav a { font-size: 14px; }
  }
}
