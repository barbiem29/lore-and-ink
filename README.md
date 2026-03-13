# ✦ Lore & Ink — Storytelling Website

> *A place for stories that haunt you.*

Lore & Ink is a dark, mystical storytelling platform built with **React** and **vanilla JavaScript**. It lets users discover, read, and submit original short fiction — all wrapped in a cinematic, cosmic aesthetic with an animated star field and glowing story cards.

---

## 🖥️ Live Preview

Run locally at `http://localhost:5173` after setup (see below).

---

## 📁 Project Structure

```
my-story-app/
├── src/
│   └── App.jsx          ← The entire app lives here (single file)
├── public/
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node)

### Installation

```bash
# 1. Create a new Vite + React project
npm create vite@latest my-story-app -- --template react

# 2. Navigate into the project
cd my-story-app

# 3. Install dependencies
npm install

# 4. Replace src/App.jsx with the Lore & Ink source code
# (paste the contents of StorytellingApp.jsx into src/App.jsx)

# 5. Optionally clear default styles
# Open src/index.css and delete everything

# 6. Start the dev server
npm run dev
```

Open your browser and go to → `http://localhost:5173`

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 Home Page | Hero section, featured story spotlight, recent stories grid, literary manifesto |
| 📚 Story Browser | Browse all stories, filter by genre (Fantasy, Sci-Fi, Literary, Thriller) |
| 📖 Reading View | Full story reader with immersive layout and related stories at the bottom |
| ✍️ Submit a Story | Form to submit your own story with genre selection and success confirmation |
| 🌟 Star Field | Animated canvas background with 180 twinkling stars |
| 🔮 Glowing Cards | Each story has its own accent color with dynamic box-shadow glow on hover |
| 🧭 Sticky Navbar | Frosted glass effect activates on scroll |

---

## 🛠️ Tech Stack

### React
| Hook | Purpose |
|---|---|
| `useState` | Manages current page/view, active story, genre filter, form data, hover state |
| `useEffect` | Runs the star animation loop + scroll listener for the navbar |
| `useRef` | Directly accesses the `<canvas>` DOM element for drawing |

### Vanilla JavaScript / Browser APIs
| API | Purpose |
|---|---|
| `Canvas API` | Draws and animates 180 twinkling stars on a full-screen background |
| `requestAnimationFrame` | Runs the animation at 60fps, synced to screen refresh rate |
| `window.scrollY` | Detects how far the user has scrolled to trigger the frosted navbar |
| `document.createElement` | Injects the `@keyframes` fadeIn CSS animation at runtime |

### Styling
- **Inline styles** via a JavaScript `styles` object — no CSS files, no external libraries
- Colors, gradients, and glows managed through JS template literals
- Fully self-contained — zero styling dependencies

### No External Libraries
This project uses **only React + browser built-ins**. No:
- React Router (navigation via `useState`)
- Redux / Zustand (all state is local)
- Tailwind, Bootstrap, or styled-components
- Framer Motion or other animation libraries

---

## 📖 How the App Works

Navigation is handled with a single `view` state variable:

```
view = "home"   → Home page
view = "browse" → Story archive
view = "read"   → Individual story reader
view = "write"  → Submission form
```

No URL routing — just React state. Clean and simple.

---

## ✏️ Customising Stories

Stories are stored as a plain array near the top of `App.jsx`. To add your own:

```jsx
const stories = [
  {
    id: 7,                          // unique number
    title: "Your Story Title",
    author: "Your Name",
    genre: "Fantasy",               // Fantasy | Sci-Fi | Literary | Thriller
    readTime: "5 min",
    excerpt: "A one-line hook.",
    cover: "🔮",                    // any emoji
    color: "#6B3FA0",               // accent color for glow + pill
    featured: false,                // set true to show in hero spotlight
    content: `Your full story text here.

Use blank lines to separate paragraphs.`
  }
];
```

---

## 🌱 Possible Improvements

- **React Router** — add real URLs like `/story/1` for shareable links
- **Firebase / Supabase** — persist submitted stories to a real database
- **Framer Motion** — smoother page transitions and card animations
- **Dark / Light mode toggle** — theme switching
- **Search bar** — search stories by title or author
- **User accounts** — save favourite stories

---

## 📄 License

This project is open for personal and educational use. Built with ❤️ using React + Vite.

---

*"Every story is an act of faith — that someone, somewhere, needs exactly these words."*
*— The Lore & Ink Creed*
