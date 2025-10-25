# FoodApp — React + Vite Restaurant UI

A modern, responsive single-page restaurant application built with **React** and **Vite**. Designed as a portfolio project, FoodApp showcases a component-driven architecture, clean vanilla CSS styling, and efficient static asset management. Perfect for demonstrating front-end development skills or as a foundation for further customization.

---

## ✨ Features

- **Responsive Design**: Fully adaptive UI with a sticky header for seamless navigation.
- **Modular Pages**: Includes Home, About, Menu, Blogs, and Contact pages.
- **Reusable Components**: Component-based structure with `Header`, `Footer`, `Product`, and `AboutCard`.
- **Static Assets**: Organized images, backgrounds, and icons under `src/assets`.
- **Fast Development**: Powered by Vite for rapid development and optimized builds.
- **Code Quality**: Enforced with ESLint for consistent code standards.

---

## 🛠️ Tech Stack

- **React** (v18) — Component-based UI library
- **Vite** — High-performance development server and build tool
- **Vanilla CSS** — Custom styles for components and pages
- **ESLint** — Linting for code consistency and quality

Key configuration files:

- [package.json](package.json)
- [vite.config.js](vite.config.js)
- [src/main.jsx](src/main.jsx)
- [src/App.jsx](src/App.jsx)

---

## 📂 Project Structure

```plaintext
src/
├── App.jsx                # Main app component
├── main.jsx               # Entry point
├── Components/            # Reusable components
│   ├── Header.jsx         # Sticky navigation header
│   ├── Footer.jsx         # Footer with social links and contact info
│   ├── Product.jsx        # Product card for menu items
│   ├── AboutCard.jsx      # Card component for About page
│   └── Components.css     # Styles for components
├── Pages/                 # Page components
│   ├── Home.jsx           # Home page
│   ├── About.jsx          # About page
│   ├── Menu.jsx           # Menu page with product grid
│   ├── Blogs.jsx          # Blogs page
│   ├── Contact.jsx        # Contact page
│   └── Pages.css          # Styles for pages
├── assets/                # Static assets
│   ├── hero/              # Hero section images
│   ├── menu/              # Menu-related images
│   ├── about/             # About page assets
│   │   ├── Aboutbg.jpg
│   │   └── bg2.avif
│   ├── blog/              # Blog images
│   └── brands/            # Brand icons
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/foodapp.git
   cd foodapp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open `http://localhost:5173` (or the Vite-provided URL) in your browser.

### Build

Create a production-ready build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

---

## 🧩 Usage Example

Mount the app and use components in your pages:

```jsx
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

function App() {
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

export default App;
```

The `Menu` page dynamically renders a product grid by mapping data (`prodetails`) to the `Product` component. See [src/Pages/Menu.jsx](src/Pages/Menu.jsx) and [src/Components/Product.jsx](src/Components/Product.jsx).

---

## 🤝 Contributing

Contributions are welcome! Follow these steps to contribute:

1. **Fork** the repository and create a feature branch (`git checkout -b feature/your-feature`).
2. Follow the existing code style (React JSX + vanilla CSS).
3. Run linting (`npm run lint`) to ensure code quality.
4. Submit a **pull request** with a clear description of your changes.

Key files to review for contributions:

- [src/Components/Components.css](src/Components/Components.css)
- [src/Pages/Pages.css](src/Pages/Pages.css)
- Components in [src/Components](src/Components)

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute for portfolio or learning purposes.

---

---

## 💡 Next Steps

- Customize the UI by updating styles in `Components.css` and `Pages.css`.
- Add dynamic data fetching for the Menu or Blogs pages.
- Deploy to a hosting platform like Vercel or Netlify for portfolio showcasing.

Run `npm run dev` to explore the app locally and start building!

---

_Built with ❤️ using React and Vite._

```

```
