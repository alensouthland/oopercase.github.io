# Ooper Case Type

An independent type foundry by Alen Southland — showcasing original typefaces available to browse and test in the browser.

**[→ oopercase.vercel.app](https://oopercase.vercel.app)**

---

![Ooper Case Type homepage screenshot](docs/screenshot.png)

> _Replace `docs/screenshot.png` with an actual screenshot. Create a `docs/` folder at the repo root and drop the image in._

---

## Typefaces

| # | Name | Styles | Classification |
|---|------|--------|----------------|
| 01 | Edmund | 1 | Serif |
| 02 | Verum Sans | 1 | Sans-serif |
| 03 | Elim Text | 4 | Text / Variable |
| 04 | Ner Variable | 3 | Variable |

Each typeface card on the homepage lets you:

- **Type your own text** — click the specimen and edit it directly
- **Adjust the size** — drag the slider to scale from 24px up to 160px
- **Preview a pangram** — a short test string rendered in the face below the specimen

---

## Stack

- [React 19](https://react.dev) + [Vite 7](https://vite.dev)
- [React Router v7](https://reactrouter.com)
- Plain CSS with CSS custom properties — no component library
- Deployed on [Vercel](https://vercel.com)

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

```bash
npm run build    # production build
npm run preview  # preview the build locally
npm run lint     # ESLint
```

---

## Adding a new typeface

1. Drop your `.woff2` file into `public/fonts/`
2. Add a `@font-face` declaration in `src/App.css`
3. Add an entry to the `typefaces` array in `src/pages/Home.jsx`

```js
{
  id: '05',
  name: 'Your Font Name',
  family: 'YourFontFamily',   // must match font-family in @font-face
  styles: 2,
  specimen: 'Handgloves',     // displayed large on the card
}
```

---

## License

Fonts are the intellectual property of Alen Southland. All rights reserved.  
Site source is provided for reference — feel free to fork for personal learning.
