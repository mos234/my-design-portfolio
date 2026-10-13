# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, equally important:

- **Business owners** opening or renovating a commercial space: cafés, bakeries, delis, convenience stores.
- **Private homeowners** renovating or moving into an apartment or house.

Both arrive mostly to judge the work: they browse the projects to decide whether this studio's style and quality fit them before they reach out.

## Product Purpose

The portfolio site of AZ Designs (אבי צוובנר – עיצוב פנים), an interior design studio run by Avi Zvebner. Live at azdesigns.co.il.

The site's primary job is to let visitors take in the finished projects. Contact (phone, WhatsApp, the contact form, social links) follows from that impression; it is not the first thing pushed.

Success: a visitor leaves convinced by the work and knows how to reach Avi.

## Positioning

- **Full end-to-end accompaniment.** One person takes the client from the first site visit through detailed plans, design language, material selection, inspiration boards, and contracting the trades, with optional supervision during execution.
- **Commercial-space specialization.** Real built projects in bakeries, a meat deli, and a boutique café, alongside residential work.

Supporting background: years running an events and production company (managing complex projects, suppliers, and schedules), and interior design studies in the Technion's continuing-education program at the Azrieli campus. About 3 years in interior design.

## Operating Context

- Hebrew only, right-to-left.
- Work process as the studio describes it: intro meeting at the property → price quote → detailed plans → design-language guidance → matching and contracting the trades → full material selection → inspiration boards → (optional) supervision during execution.
- Business hours are listed as "online".
- The site is maintained by a helper on the owner's behalf. Changes go to a preview deploy for the owner's approval before going live.

## Capabilities and Constraints

- Next.js (App Router) static site with Tailwind CSS v4, hosted on Netlify.
- Pages: home, portfolio index, a page per project, process, about, contact, accessibility statement, privacy policy.
- Projects are added by placing images in `public/gallery/<slug>/` with a `cover.jpeg`, plus a route under `app/portfolio/<slug>/`.
- Contact: phone 050-467-3332, email, WhatsApp, Instagram, Facebook. The contact form does not store submitted details (see the privacy policy).
- Built-in accessibility widget (large text, high contrast, grayscale, readable font, link underlining) and a cookie consent banner.

## Brand Commitments

- Name: AZ Designs / אבי צוובנר – עיצוב פנים.
- Slogan: "מעצבים לכם את הדמיון" (We design your imagination).
- The owner specified bold, heavy "print-style" type, currently Rubik in heavy weights.
- Brand colors: in October 2026 the owner chose the "Espresso & Mint" palette (espresso `#2B1D14`, cream `#F3E9DC`, mint `#98FFD8`), which meets WCAG AA. It replaced the original earth `#A26A42` / bronze `#804A00` / mint combination, which failed contrast. Mint stays the signature accent.
- Logo files: `public/logo-new.png`, `public/logo-new1.png`, `public/logo.jpeg`. Portrait: `public/profile.jpeg`.

## Evidence on Hand

- Seven real projects with photos in `public/gallery/`: bakery, balcony, boutique-cafe, lake-apartment, meat-deli, residence, vacation-apartment.
- Owner background and copy in `פרטי העסק.MD`.
- **No testimonials, client names, reviews, press, awards, or project counts beyond the above exist.** Do not invent any.

## Product Principles

1. **The work leads.** Project photography is the main argument. Interface and copy support it and never compete with it.
2. **Speak to both audiences.** Commercial and residential work get equal standing. Neither should feel like an afterthought.
3. **Show the whole journey.** The end-to-end process is a real differentiator. Make it visible and concrete, not a slogan.
4. **Only true claims.** Use only facts the owner has confirmed.
5. **Owner approves before it goes live.** Every visual change is previewed first.

## Accessibility & Inclusion

Must meet Israeli Standard 5568 (WCAG 2.0 level AA), as declared on the site's accessibility statement page. Text contrast must be at least 4.5:1 (3:1 for large text), keyboard navigation and a skip link are required, and the accessibility widget must keep working.
