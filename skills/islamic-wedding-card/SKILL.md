---
name: islamic-wedding-card
description: Design standards, exact verified spellings, data contracts, and natural web page animation specifications for the digital Islamic wedding invitation of Mahek & Aman.
---

# Islamic Wedding Card Skill: Mahek & Aman (27 Dec 2026)

## Purpose & Scope
This skill governs the exact textual data, spellings, design tokens, and web page layout specifications for the digital Islamic wedding invitation built for the wedding of Mahek and Aman.

## 1. Verified Exact Names & Spellings (Ground Truth)
Maintain exact spelling fidelity as printed on the original card:

### Bride & Lineage
- **Bride**: `Mahek`
- **Father**: `Firoj Amir Khan` (`D/o. Firoj Amir Khan`)
- **Grandfather**: `Late Haji Amir Abdul Khan` (`Grand D/o. Late Haji Amir Abdul Khan`)

### Groom & Lineage
- **Groom**: `Aman`
- **Father**: `Kadir Abbas Zarekari` (`S/o. Kadir Abbas Zarekari, Baramati`)

### Inviting Family & Elders
- `Mr. Haji Hamid Khan Abdul Khan Pathan, Mohol`
- `Mr. Yunus Khan Abdul Khan Pathan, Telecom Solapur.`
- `From: Firoj Amir Khan`
  - Address: `Near Sai Hospital, Survey No. 74, Adarsh Nagar, Dighi, Pune-15.`

### With Best Compliments From (Exact List of 12)
1. `Haji Noor Ahmed Hussain Shaikh, Solapur`
2. `Haji Ayyub Abdul Rahman Sayyed, Barshi`
3. `Raof Hussain Shaikh (RK), Pune`
4. `Rashid Hussain Shaikh, Pune`
5. `Javed Akhtar Mahboob Saheb Sayyed, Solapur`
6. `Shahnawaz Noor Ahmed Shaikh, Solapur`
7. `Haji Sarfaraz Amir Khan, Pune`
8. `Mohsin Ayyub Sayyed, Barshi`
9. `Moin Ayyub Sayyed, Barshi`
10. `Sohail Ayyub Sayyed, Barshi`
11. `Noor Khan Hamid Khan Pathan, Mohol`
12. `Abul Faiz Khan Yunus Khan Pathan, Solapur`
- Suffix: `All Relatives & Friends`

### Contacts & Business Attribution
- Firm: `Skyline Pan Shop & Mobile Repairing, Dighi, Pune`
- Contacts:
  - `Rahim Bhai Shaikh`: `8788148687`
  - `Afroz Khan`: `9529712193`
  - `Abdul Malik Khan`: `8999743026`
- Printer: `Amar Press, Solapur.`

## 2. Event Timings & Venue
- **Gregorian Date**: `Sunday, 27 December 2026` (`27 | 12 | 26`)
- **Hijri Date**: `17th Rajjab 1448 Hijri`
- **Nikah Time**: `11:30 am`
- **Countdown Target**: `2026-12-27T11:30:00+05:30` (IST)
- **Venue**:
  - `Govind Garden`
  - `Opp. Gawli Farm, Bhosari-Alandi Road, Dighi.` (Pune)
- **Reception Sequence**:
  - `Insha Allah Nikah` at `11:30 am`
  - `◆ Lunch After Nikah ◆`

## 3. Aesthetics & Typography Directives
- **Palette**: Warm Pearlescent Alabaster & Cream (`#ffffff` to `#fdfbf7` to `#f6efe2`).
- **Framing**: Elegant Islamic Mihrab arches in antique royal gold foil with botanical antique white roses and eucalyptus leaves.
- **Arabic Calligraphy (Extra Large & Grand)**:
  - Bismillah: `clamp(2.2rem, 7.5vw, 3rem)` in metallic gold foil gradient with RTL alignment.
  - Hadith (`النكاح من سنتي`): `clamp(2rem, 7vw, 2.7rem)`.
  - Prophetic Du'a: `clamp(1.4rem, 5vw, 1.85rem)`.
- **Text Readability**: Deep charcoal (`#18191a`) and warm bronze (`#3e382f`), 100% WCAG AAA accessible.

## 4. Experience & Motion Directives
- **Natural Web Page Feel**:
  - Fluid vertical scroll with smooth reveals using `IntersectionObserver`.
  - No clunky buttons / no red seal button / no forced audio or music.
  - Sticky gold luxury header with couple monogram and anchor links (`#venue-section`, `#rsvp-section`).
- **Smooth Animations**:
  - Cards glide into view on scroll with staggered entrances (`transform: translateY(35px) scale(0.98)` to `transform: translateY(0) scale(1)`).
  - Moroccan lantern swaying physics at the top of the hero card.
  - Subtle interactive tap/hover elevation and gold glow on cards.
