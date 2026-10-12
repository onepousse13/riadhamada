# HAMADA ZH — Boutique Riad Concept Website

A responsive, editorial website concept for **HAMADA ZH** in Marrakech Medina, built in **React 18 + TypeScript + Tailwind CSS 3 + Vite 6**.

## Quick start

Prerequisites: Node.js **20+** and npm.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

**Windows shortcut:** double-click `start-windows.bat` after extracting the ZIP; it installs dependencies if needed and starts the development server. A working internet connection is required for the first install and remote image/font placeholders.

To create and preview the production build:

```bash
npm run build
npm run preview
```

### Routes

| Route | Page |
|---|---|
| `/` | Editorial homepage and quick-stay enquiry |
| `/about` | Brand concept and architectural story |
| `/rooms` | Three illustrative room concepts |
| `/experiences` | Five conceptual guest experiences |
| `/gallery` | Category-filtered photo grid + fullscreen keyboard-enabled lightbox |
| `/booking` | Booking enquiry *demo*, includes dates/guests/room and validation |
| `/contact` | Contact form *demo*, placeholder details and interactive Medina map |

Navigation adapts to mobile and desktop. EN/FR content is switched from the navigation; preference is saved locally when browser storage is allowed.

## IMPORTANT: this is a concept, not a live hotel site

- All accommodation and amenity descriptions are **conceptual**, not verified inventory.
- All images are **Unsplash reference stock photographs of other sites**. They are **not images of HAMADA ZH**. Replace with photography of the actual property before marketing.
- The booking form does **not** look up prices, run live availability, charge a guest, email staff or create a reservation. It produces an **in-browser preview only**.
- The contact form is **demo validation only**; no emails are sent and no submissions are saved.
- Contact/address/phone/social business profile are deliberate placeholders.
- The map shows the **general Marrakech Medina**, not the property's coordinates.
- `<meta name="robots" content="noindex,nofollow">` is included to prevent a concept demo appearing as an actual operating accommodation in search results. Remove only once claims, property details, and real booking/contact workflows are verified.

## Production go-live checklist

1. Replace all photos with licensed and accurate HAMADA ZH property photography in `src/utils/images.ts`. Image references currently load from the Unsplash CDN and require internet.
2. Verify real room types, facilities, inventory, policies and offerings; update `src/data/content.ts`.
3. Add the actual hotel address, contact email, phone, social profiles, and map pin in `src/pages/ContactPage.tsx` and `src/components/SiteLayout.tsx`.
4. Integrate a **real booking provider** server-side or through its approved widget/API. Do not promise availability, prices or confirmation until a provider validates them.
5. Connect the contact form to a trusted backend with spam protection, privacy notices, server-side validation and email delivery. Never put private API keys into Vite environment variables.
6. Publish an accurate privacy policy, cookies policy if necessary, terms and booking/cancellation rules.
7. Replace the conceptual disclaimers with verified facts where appropriate.
8. Set `VITE_SITE_URL=https://your-real-domain.com` (see `.env.example`) to enable canonical links, replace Open Graph imagery, then intentionally remove `noindex,nofollow`.
9. Configure your hosting platform to fall back to `/index.html` for **all** SPA routes (e.g. `/rooms` or `/booking`). Example Netlify (`public/_redirects`) and Vercel (`vercel.json`) configurations are included.
10. Validate SEO, performance and accessibility with real content on the production domain.

## Architecture

```text
hamada-zh-riad/
├── index.html
├── public/
│   ├── favicon.svg
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── BookingBar.tsx
│   │   ├── Design.tsx
│   │   ├── RoomCard.tsx
│   │   ├── Seo.tsx
│   │   └── SiteLayout.tsx
│   ├── contexts/LocaleContext.tsx
│   ├── data/content.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── RoomsPage.tsx
│   │   ├── ExperiencesPage.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── BookingPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── styles/index.css
│   ├── utils/images.ts
│   └── main.tsx
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

## Fonts, photography and license notes

- Typography: Cormorant Garamond and Manrope loaded from Google Fonts.
- Reference images: photos from [Unsplash](https://unsplash.com/license), linked via `images.unsplash.com`, including photography by Alexander Psiuk, Annie Spratt, Toa Heftiba, Jessica Kantak Bailey, Filiz Elaerts, Mihaela G, and Chloé Lefleur. Attribution is encouraged even when not required under the Unsplash License. Photos may depict other identifiable businesses; do not present them as HAMADA ZH.
- Libraries are installed from npm, under their respective licenses. See their package metadata for licenses.

## SEO note

Page titles, descriptions, Open Graph fields and optional canonical are updated in `Seo.tsx`. For maximum SEO in production, add static prerendering or SSR after actual hotel data is supplied. This package is a client-rendered SPA and is intentionally `noindex` while a concept.
