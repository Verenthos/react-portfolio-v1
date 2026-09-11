# hector-seibel-portfolio

Personal site. React, Vite, TypeScript and Tailwind, deployed on Vercel.

```bash
npm install
npm run dev
```

`npm run build` type checks and writes the site to `dist/`.

The contact form uses EmailJS and is only rendered when `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` and `VITE_EMAILJS_PUBLIC_KEY` are set at build time. Without them the page shows the email link only.
