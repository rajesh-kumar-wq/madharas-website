# MADHARAS — Luxury Banquet Halls & Outdoor Catering

A cinematic, Awwwards-style marketing site for MADHARAS Banquet Halls (T. Nagar, Chennai), built with React + Vite, Tailwind CSS, Framer Motion, GSAP, and a subtle Three.js particle field in the hero.

## Getting started

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Structure

```
src/
├── main.jsx            # React entry point
├── App.jsx              # Section assembly
├── index.css            # Tailwind + design-token utilities
├── assets/               # Venue photography
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Features.jsx      # Capacity stats (150–5000 / 350 / 500)
│   ├── Gallery.jsx        # Masonry gallery
│   ├── Services.jsx       # Weddings / Corporate / Birthdays / Catering
│   ├── Testimonials.jsx
│   ├── BookingCTA.jsx
│   ├── Contact.jsx        # Address, phone, email, hours, map
│   ├── Footer.jsx
│   └── ui/
│       ├── SectionHeading.jsx
│       └── ParticleField.jsx   # Three.js ambient particles
├── hooks/
│   └── useScrollReveal.js       # GSAP ScrollTrigger helper
└── utils/
    └── content.js                # All copy, capacity data, contact info
```

## Notes

- Design tokens (colors, type scale) live in `tailwind.config.js`.
- All business content (address, phone, hours, capacity numbers) is centralized in `src/utils/content.js` — edit there to update copy across the site.
- The Google Maps embed in `Contact.jsx` uses a query-based `maps?q=` URL — swap in an official embed/API key for production if you have one.
- Images are large source PNGs; for production, consider compressing/converting to WebP for faster load.
