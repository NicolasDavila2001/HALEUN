---
name: HALEUN Design System
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf3'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d5e3fc'
  on-surface: '#0d1c2e'
  on-surface-variant: '#42474f'
  inverse-surface: '#233144'
  inverse-on-surface: '#eaf1ff'
  outline: '#737780'
  outline-variant: '#c3c6d0'
  surface-tint: '#3a608d'
  primary: '#002546'
  on-primary: '#ffffff'
  primary-container: '#0d3b66'
  on-primary-container: '#81a6d7'
  inverse-primary: '#a4c9fc'
  secondary: '#176c3f'
  on-secondary: '#ffffff'
  secondary-container: '#a0f2b8'
  on-secondary-container: '#1d7043'
  tertiary: '#352000'
  on-tertiary: '#ffffff'
  tertiary-container: '#523300'
  on-tertiary-container: '#d79736'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e4ff'
  primary-fixed-dim: '#a4c9fc'
  on-primary-fixed: '#001c38'
  on-primary-fixed-variant: '#204874'
  secondary-fixed: '#a3f4bb'
  secondary-fixed-dim: '#87d8a0'
  on-secondary-fixed: '#00210e'
  on-secondary-fixed-variant: '#00522c'
  tertiary-fixed: '#ffddb4'
  tertiary-fixed-dim: '#feb956'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#633f00'
  background: '#f8f9ff'
  on-background: '#0d1c2e'
  surface-variant: '#d5e3fc'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system bridges the academic gravitas of Universidad Nacional de Colombia (UNAL) with the encouraging, gamified cadence of modern language acquisition. Designed for university students, faculty, and lifelong learners, the interface evokes intellectual rigor, warm encouragement, and cross-cultural curiosity.

The visual style employs **Modern Educational SaaS with Tactile Micro-Interactions**:
- High clarity and typographic hierarchy prioritize legibility across scripts and phonetic symbols.
- Warm foundational tones soften cognitive fatigue during repetitive language drills.
- Crisp, intentional accents derived from UNAL's sub-brand palettes delineate language tracks, proficiency levels, and milestone rewards without cluttering the screen.

## Colors

The palette is rooted in UNAL's official institutional hues and expanded for digital gamification:

- **Primary (`#0D3B66` - Deep Institutional Navy):** Anchors navigation, critical calls-to-action, high-emphasis typography, and primary interactive surfaces.
- **Secondary (`#2A7B4C` - Academic Green):** Drives progress metrics, correct answer states, streak celebrations, and verified achievements.
- **Tertiary (`#E09F3E` - Warm Ochre Gold):** Direct from UNAL's seal accents, representing active streaks, XP coins, attention prompts, and cultural exploration nodes.
- **Burgundy Accent (`#7A1C30`):** Used strictly for error validation, heart/life indicators, administrative warnings, and high-tier academic badges.
- **Neutral Palette (`#475569` base):** Ranging from `#0F172A` (deep ink body text) down to `#F8FAFC` (ambient background tint) and `#FFFFFF` (card surfaces), providing optical contrast meeting WCAG AAA requirements for standard educational text.

## Typography

The type pairing balances technological clarity with friendly educational legibility:

- **Space Grotesk (Headlines):** Gives unit headings, language levels (A1–C2), and achievement milestones a modern, structured identity that echoes academic precision.
- **Plus Jakarta Sans (Body & Labels):** A warm, highly legible geometric sans with generous x-height and clear counters, ideal for phonetic transcripts, grammar explanations, dialogue transcripts, and micro-copy across desktop and mobile screens.

## Layout & Spacing

The layout is built on an 8pt base grid implemented through an adaptable fluid container model:

- **Desktop (12 Columns):** Content conforms to a max-width of 1280px with 24px gutters and 32px canvas margins. Interactive lesson modules occupy an 8-column central rail to avoid ocular fatigue during reading and transcription.
- **Tablet (8 Columns):** Fluid grid with 20px gutters and 24px margins. Navigation transitions to a persistent bottom bar or collapsible slim sidebar.
- **Mobile (4 Columns):** Fluid grid with 16px gutters and 16px outer margin. Drill questions, multiple-choice tokens, and vocabulary decks stretch 100% across the rail with vertical rhythm driven by `space-sm` and `space-md`.

## Elevation & Depth

Visual hierarchy combines clean tonal surfaces with subtle, crisp tactile depth:

- **Level 0 (Flat / Canvas):** Neutral cool gray (`#F8FAFC`) forms the base stage, keeping eyes relaxed over extended learning sessions.
- **Level 1 (Card / Module Surface):** Crisp white (`#FFFFFF`) backed by a 1px boundary border (`#E2E8F0`) and an ambient tinted drop shadow: `0 1px 3px rgba(13, 59, 102, 0.04), 0 4px 12px rgba(13, 59, 102, 0.03)`.
- **Level 2 (Interactive Drill & Selectables):** Flashcards and selectable word pills use a 2px offset bottom edge simulating a physical tactile button (`box-shadow: 0 3px 0 #CBD5E1`), pressing flush on active tap (`translateY(2px)`).
- **Level 3 (Modals & Feedback Drawers):** Sheets sliding up with validation (correct/incorrect answers) use high-elevation diffusion: `0 12px 32px rgba(13, 59, 102, 0.14)`.

## Shapes

The interface embraces organic, accessible rounded geometry:
- Standard interactive elements (input fields, exercise cards, containers) use a 0.5rem (8px) base corner radius (`roundedness: 2`).
- Badges, vocabulary chips, audio triggers, and action tags scale smoothly to `rounded-lg` (16px) or full pill radii (`rounded-full`) to invite touch and rapid interactions.
- Special contextual banners may adopt an asymmetrical top-right corner radius (16px) paying subtle homage to the official UNAL institutional leaf shield geometry.

## Components

### Buttons
- **Primary:** Navy background (`#0D3B66`), white bold text, subtle bottom lip border (`#08243F`), 44px minimum touch height on mobile.
- **Secondary / Action Affirmative:** Institutional Green (`#2A7B4C`), white text, used for "Comprobar" (Check answer) and "Continuar".
- **Tactile Word Tokens:** White surface with `#E2E8F0` border and `#CBD5E1` 2px bottom lip. On state select: Navy tint border with `#0D3B66` text.

### Chips & Badges
- **CEFR Level Indicators:** Pill-shaped, small uppercase label (`label-sm`), styled with tinted backgrounds (e.g., Ochre Gold tint for B1, Green for A2, Navy for C1).
- **Audio Vocabulary Chips:** Capsule shape with speaker icon left-aligned, tactile border, active wave animation state.

### Input Fields & Text Prompts
- High-contrast 1.5px slate borders (`#CBD5E1`), 12px vertical padding, floating grammar tooltips. Active focus state triggers a `#0D3B66` border with a 3px soft outer ring (`rgba(13, 59, 102, 0.15)`).

### Exercise & Grammar Cards
- Stacked card layout with clear semantic separation: instructions in `headline-sm`, translation cues in muted `body-sm`, and focal response area centered with ample whitespace (`space-lg`).

### Audio & Recording Controls
- Circular floating action buttons (48px diameter) with deep navy or ochre accents; live waveform feedback visualizer using the tertiary gold hue.