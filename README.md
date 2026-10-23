# Rahul & Rupthi — Wedding Invitation

React + TypeScript + Vite conversion of the original single-file wedding
invitation website, with the original design, text and interactions preserved.

- Live site: https://rahul-net.github.io/rahul-rupthi-wedding-invitation/
- Original single-file source preserved in `original/index.html`
- Original CSS preserved verbatim in `src/styles/style.css`
- Original JavaScript logic migrated in `src/lib/invitation.ts`
- Assets (`wedding.mp3`, `ganeshGold.png`, `CP1.jpg`, `Invitation_Card.png`,
  `wedding.ics`) live in `public/` and are served exactly as before

## Develop / build

```bash
npm install
npm run dev
npm run build   # outputs dist/
```

## Future updates

Edit the relevant component in `src/components/`, the styles in
`src/styles/style.css`, or the logic in `src/lib/invitation.ts`, then commit
and push to `main`. The GitHub Actions workflow builds and redeploys to
GitHub Pages automatically.

## Known limitations (inherited from the original, unchanged)

- The AI Wish generator's Gemini API key is empty in the original source, so
  that feature cannot call the API until a key is supplied client-side.
- Visitor logging and guest photo upload depend on the original Google Apps
  Script endpoints; RSVP depends on WhatsApp. GitHub Pages itself is static
  hosting only — there is no PHP/MySQL/backend in this project.
