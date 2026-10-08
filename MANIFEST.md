# Rocsato Conservatory of Music — Architecture & Design Manifest
**Client:** Rocsato Conservatory of Music  
**Author:** Forever Still Studio (Chrissy Raine)  
**Primary Deliverable:** Single-file cinematic web experience (`index.html`)

---

## 1. Architectural Architecture & Integrity Rules

### Single-File Primary Architecture
- The entire cinematic experience, styles, and inline scripting live primarily in `index.html`.
- Global styles and scripts in `styles.css` and `script.js` are supporting assets.
- **Rule of In-Place CSS Editing:** Never append duplicate CSS selector blocks downstream. Any updates to classes such as `.recital-room`, `.artist-card`, `.nav-bar`, or modal overlays must be edited in-place inside the existing `<style>` block. Downstream duplicate selectors are forbidden.

---

## 2. Modal & Layout Mechanics (Non-Negotiable)

### The Flexbox Scroll Law
- **Never pair `align-items: center` with `overflow-y: auto` or `overflow-y: scroll`.**
- Centering tall content pushes the top of the container into negative coordinates where modern browsers cannot scroll up to them.
- Any scrollable overlay or modal (including `.recital-room`, `.recital-modal`, and discipline expansion views) MUST use:
  ```css
  align-items: flex-start !important;
  overflow-y: auto !important;
  -webkit-overflow-scrolling: touch !important;
  ```
- **Top Banner & Navigation Clearance:** The top concept notice banner and navigation bar are permanently fixed. Any modal overlay must have explicit top clearance:
  ```css
  padding-top: calc(var(--concept-banner-height) + 6.5rem) !important;
  ```
  This ensures that headers (like "THE RECITAL ROOM" and "VISITING ARTISTS") and card rows are never obscured or clipped behind the navigation bar.

---

## 3. Visual & Aesthetic Standards

- **Palette:** Black chamber (`#080808`), antique gold (`#c5a059`), muted parchment, and restrained warmth.
- **Typography:** Cinzel for formal classical presence; Albert Sans for human clarity.
- **Cadence:** Intentional, quiet, patient editorial rhythm. Gold is an accent, never confetti.
- **Human Feel:** Generous card padding, elegant borders, clear focus states, and zero visual clutter.
