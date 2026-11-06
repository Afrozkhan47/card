# Islamic Wedding Card: Design & Engineering Rules (v3.0)
*Updated directly from User Audio Directives & Mobile Viewport Audit (Oct 19, 2026)*

## 1. Surface Architecture: Unified Illuminated Parchment Tapestry (No "Cards-on-Background")
- [x] **RULE 1.1: Zero Floating Card Boxes**: Strictly NO isolated white/ivory card slabs, elongated boxes, or gray cardboard tiles floating on top of a wallpaper. The entire page is ONE continuous, seamless royal illuminated parchment canvas.
- [x] **RULE 1.2: Embedded Elements**: Typography, calligraphy, and ornaments are seamlessly woven directly into the royal silk canvas, bounded only by the section's fine gold filigree perimeter and subtle gold foil dividers (`❖ ──────── ✦ ──────── ❖`).
- [x] **RULE 1.3: Background Atmosphere**: Warm alabaster, pearl ivory, and champagne silk backdrop (`#fcf9f2` to `#f7f1e4`) with subtle gold damask/arabesque pattern and ambient golden stardust particles.

## 2. Viewport & Scroll Snapping (Strict 100dvh Per Section)
- [x] **RULE 2.1: Exactly One Viewport Per Section**: Every section fills `height: 100dvh; max-height: 100dvh; overflow: hidden; scroll-snap-align: start; scroll-snap-stop: always;`.
- [x] **RULE 2.2: Zero Viewport Cut-Off at Rest**: When at rest after snapping, 100% of the section's contents are visible inside the viewport. No half-cut titles, no cut-off buttons, no internal scrollbars.
- [x] **RULE 2.3: Fluid Snap Scroll**: Natural, effortless vertical scrolling with crisp snapping between sections.

## 3. The Opener: Unique Ceremonial First Page (Cover Folio)
- [x] **RULE 3.1: Distinct Imperial Cover**: The first page (Section 0) looks completely distinct and grand compared to all subsequent pages.
- [x] **RULE 3.2: Archway & Swaying Moroccan Lantern**: Features an ornate royal arched Moorish Mihrab crown with an animated hanging golden lantern gently swaying at the top.
- [x] **RULE 3.3: Grand Bismillah Calligraphy**: Bold, majestic Thuluth calligraphy in rich metallic gold with deep bronze drop shadows.
- [x] **RULE 3.4: Royal Silk Ribbon Sash & Monogram**: Embroidered ceremonial gold ribbon banner with tails and an embossed `M & A` monogram crest.
- [x] **RULE 3.5: Personalized Guest Scroll**: Dynamic guest name (`?to=...`) presented in royal serif calligraphy.
- [x] **RULE 3.6: Ceremonial Entrance Prompt**: Clear, elegant prompt at the bottom: `✦ SWIPE TO OPEN INVITATION ✦ ↓` with bespoke double gold border and animated pulse.

## 4. Typography & Name Integrity (Zero Broken / Chopped Names)
- [x] **RULE 4.1: No Mid-Name Line Breaks**: Names NEVER wrap awkwardly across lines. Every single name stays clean on its dedicated row.
- [x] **RULE 4.2: Compliments Roster**: All 12 verified names displayed with clean Name + City formatting in balanced columns, with zero chopped words.
- [x] **RULE 4.3: Couple & Lineage Formatting**:
  - Bride: `Mahek` (Grand D/o. Late Haji Amir Abdul Khan | D/o. Firoj Amir Khan)
  - Groom: `Aman` (S/o. Kadir Abbas Zarekari, Baramati)
  - Dedicated lines, perfectly centered, zero awkward splits.
- [x] **RULE 4.4: High-Contrast Palette**: Deep charcoal and warm bronze (`#161411`, `#241f18`) ensuring crisp readability on cream backgrounds (WCAG AAA).

## 5. Bespoke Luxury Action Controls (Zero "AI-Generated" Look)
- [x] **RULE 5.1: Bespoke Stationery Aesthetic**: No generic pill buttons, no neon gradients, no heavy drop shadows. Crisp tailored silhouettes with 6px radius and double gold hairline borders (`outline: 1px solid rgba(197, 160, 89, 0.35); outline-offset: 2.5px`).
- [x] **RULE 5.2: Royal Emerald RSVP Button**: Deep forest emerald velvet (`linear-gradient(180deg, #163f2e 0%, #0d281c 100%)`), warm antique gold typography (`#fdf4db`), delicate double gold wireframe border, and zero neon green.
- [x] **RULE 5.3: Antique Gold Foil Calendar & Map Buttons**: Crisp rectangular stationery buttons with delicate 1px double gold borders and letter-spaced small caps.

## 6. Motion & Scroll Animations (Regal, Fluid Entrance)
- [x] **RULE 6.1: Active Snap Observer**: JavaScript IntersectionObserver dynamically synchronizes `.snapped-active` with scroll position.
- [x] **RULE 6.2: Smooth Pacing**: Fluid transitions execute with royal easing (`0.8s cubic-bezier(0.16, 1, 0.3, 1)`), defaulting to visible base state so no content ever stays hidden.
- [x] **RULE 6.3: Bidirectional Smoothness**: Animation seamlessly resets and replays when scrolling up or down.

## 7. Verified Content & Spellings (Zero Discrepancy Policy)
- [x] **Bride**: `Mahek` (Grand D/o. Late Haji Amir Abdul Khan, D/o. Firoj Amir Khan)
- [x] **Groom**: `Aman` (S/o. Kadir Abbas Zarekari, Baramati)
- [x] **Alliance**: `Khan & Zarekari`
- [x] **Date & Timings**: `Sunday, 27 December 2026` at `11:30 am`, `17th Rajjab 1448 Hijri`, `Insha Allah Nikah`, `◆ Lunch After Nikah ◆`
- [x] **Venue**: `Govind Garden, Opp. Gawli Farm, Bhosari-Alandi Road, Dighi.` (Pune)
- [x] **Elders**: `Mr. Haji Hamid Khan Abdul Khan Pathan, Mohol` & `Mr. Yunus Khan Abdul Khan Pathan, Telecom Solapur.`
- [x] **All 12 Compliments**:
  1. `Haji Noor Ahmed Hussain Shaikh, Solapur`
  2. `Haji Ayyub Abdul Rahman Sayyed, Barshi`
  3. `Raof Hussain Shaikh (RK) Pune`
  4. `Rashid Hussain Shaikh, Pune`
  5. `Javed Akhtar Mahboob Saheb Sayyed, Solapur`
  6. `Shahnawaz Noor Ahmed Shaikh, Solapur`
  7. `Haji Sarfaraz Amir Khan, Pune`
  8. `Mohsin Ayyub Sayyed, Barshi`
  9. `Moin Ayyub Sayyed, Barshi`
  10. `Sohail Ayyub Sayyed, Barshi`
  11. `Noor Khan Hamid Khan Pathan, Mohol`
  12. `Abul Faiz Khan Yunus Khan Pathan`
  `✦ All Relatives & Friends ✦`
- [x] **Host & Contacts**: `Firoj Amir Khan` (Adarsh Nagar, Dighi, Pune-15), Rahim Bhai Shaikh (8788148687), Afroz Khan (9529712193), Abdul Malik Khan (8999743026), Skyline Pan Shop, Amar Press.
