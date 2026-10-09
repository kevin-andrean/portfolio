# Portfolio design directions

This file preserves the two design directions considered for the portfolio. **Direction 02 is the active design.** Direction 01 is retained as an alternative reference; the active site should not be changed to it unless requested.

## 01 — Editorial

**Concept:** A thoughtful developer, told through the work.

- **Mood:** Personal, calm, considered, and craft-led.
- **Palette:** Warm paper (`#F4F0E8`), deep charcoal-brown (`#29241F`), and restrained terracotta (`#A3573D`).
- **Typography:** An expressive editorial serif for the main hero headline, paired with a neutral sans-serif for interface text.
- **Hero:** A compact location/role eyebrow, large headline, short experience statement, and selected game-project imagery arranged as a small, tactile collage.
- **Work presentation:** Real project art is the main color and texture. Give case studies room for context and contribution; keep chrome and card decoration quiet.
- **Use when:** The portfolio should feel more personal and distinctive than a conventional software résumé.

## 02 — Engineering (active)

**Concept:** Software that makes complex things work.

- **Mood:** Technical, precise, quietly confident; dark but readable rather than neon or “hacker” themed.
- **Palette:** Near-black base (`#0B1114`), raised charcoal surfaces (`#121B20`), muted blue-gray text (`#9AACB3`), and a single mint accent (`#93E2C7`).
- **Typography:** Space Grotesk for headings and Inter for body copy, with monospace reserved for code and small technical labels.
- **Hero:** A direct engineering headline, opportunity status, role and experience copy, and a compact code-panel illustration based on reusable client integrations. Show the verified `100+` integration count as proof; keep the code clearly illustrative.
- **Navigation:** Short labels and understated active states. Keep Work, Experience, and Contact easy to reach without visually competing with the content.
- **Sections:** Use near-black and charcoal surfaces with subtle borders. Avoid gradients as a dominant motif, decorative floating icons, and heavy shadows.
- **Projects:** Let real screenshots lead, keep project cards restrained, and make technologies secondary metadata. Case studies should foreground the problem, contribution, and outcome when those details are available.
- **Integrations:** Keep the delivered-count and “How I work” content. Do not restore the removed placeholder-logo subsection.
- **Interaction and accessibility:** Preserve visible keyboard focus, reduced-motion behavior, legible contrast, mobile navigation, and the centered keyboard-accessible image viewer.
- **Use when:** Employers should quickly see engineering range, delivery evidence, and technical credibility.

## Implementation notes

The chosen direction is applied in `src/App.jsx`, `src/data/content.js`, and `src/styles.css`. Keep this specification as the reference for future design changes; project thumbnail crop positions remain configurable with `imagePositions` in the project data.
