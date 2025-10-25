Collecting workspace information```markdown

# FoodApp — React + Vite Portfolio Project

A clean, responsive single-page restaurant UI built with React and Vite. Designed as a portfolio piece showcasing component-based structure, CSS styling, and static asset handling.

---

## Features

- Responsive header with sticky behavior ([`Header`](src/Components/Header.jsx))
- Home, About, Menu, Blogs, Contact pages ([`Home`](src/Pages/Home.jsx), [`About`](src/Pages/About.jsx), [`Menu`](src/Pages/Menu.jsx), [`Blogs`](src/Pages/Blogs.jsx), [`Contact`](src/Pages/Contact.jsx))
- Reusable product & card components ([`Product`](src/Components/Product.jsx), [`AboutCard`](src/Components/AboutCard.jsx))
- Footer with social icons and contact info ([`Footer`](src/Components/Footer.jsx))
- Static assets organized under `src/assets` (images, backgrounds, icons)

---

## Tech Stack

- React (v18) — UI
- Vite — dev server & build
- Vanilla CSS — styling ([`Components.css`](src/Components/Components.css), [`Pages.css`](src/Pages/Pages.css))
- ESLint config included (`eslint.config.js`)

Relevant files:

- [package.json](package.json)
- [vite.config.js](vite.config.js)
- [src/main.jsx](src/main.jsx)
- [src/App.jsx](src/App.jsx)

---

## Quickstart

1. Install

```bash
npm install
```

2. Run (development)

```bash
npm run dev
```

3. Build (production)

```bash
npm run build
```

4. Preview build

```bash
npm run preview
```

Common scripts (from [package.json](package.json)):

- dev: `vite`
- build: `vite build`
- preview: `vite preview`
- lint: `eslint .`

---

## Folder structure

```
src/
  App.jsx
  main.jsx
  Components/
    Header.jsx
    Footer.jsx
    Product.jsx
    AboutCard.jsx
    Components.css
  Pages/
    Home.jsx
    About.jsx
    Menu.jsx
    Blogs.jsx
    Contact.jsx
    Pages.css
  assets/
    hero/
    menu/
    about/
      Aboutbg.jpg
      bg2.avif
    blog/
    brands/
    ...
```

(See actual files: [src/App.jsx](src/App.jsx), [src/main.jsx](src/main.jsx))

---

## Usage examples

- Mount app (entry): [src/main.jsx](src/main.jsx) loads [src/App.jsx](src/App.jsx).
- Use components:

```jsx
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function Page() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}
```

- Menu grid: [`Menu.jsx`](src/Pages/Menu.jsx) maps `prodetails` to [`Product`](src/Components/Product.jsx).

---

## How to contribute

1. Fork the repo and create a feature branch.
2. Follow existing code style (JSX + vanilla CSS).
3. Run lint and tests (if added) before PR.
4. Open a concise PR describing intent and changes.

Files to review for contributions:

- [src/Components/Components.css](src/Components/Components.css)
- [src/Pages/Pages.css](src/Pages/Pages.css)
- Component files under [src/Components](src/Components)

---

## License

MIT — copy, modify, and use for portfolio or learning.

---

## Contact

Project owner visible in app footer: phone number used in app — Call: 0311-2177456 (see [src/Pages/Contact.jsx](src/Pages/Contact.jsx) and [src/Components/Footer.jsx](src/Components/Footer.jsx)).

---

Small, component-driven React app ready for customization and deployment. For portfolio demos, run `npm run dev` and open the local Vite URL.

```

```
