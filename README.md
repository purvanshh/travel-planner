# ✈️ TravelPlanner

A modern, immersive travel planning website built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4)

## ✨ Features

### 🎨 Visual Effects
- **Parallax Mountain Background** - Mouse-tracking 3D parallax with 17 layered mountain/fog images
- **Custom Cursor** - Smooth spring physics with trail effect, hover states, and glow
- **Loading Screen** - Animated block loader with 2-second anticipation effect
- **Text Reveal Animations** - Word-by-word staggered reveals on section headings

### 🖱️ Interactions
- **Pop-out Hover Effects** - Cards and buttons scale up and lift on hover
- **Scroll Expand Hero** - Video expands as you scroll, revealing content
- **Dynamic Navbar** - Active section indicator with animated sliding pill
- **Expand-on-Hover Destinations** - Interactive destination cards that expand on hover

### 🎬 Animation Library
- `TextReveal` - Word-by-word staggered reveal
- `CharacterReveal` - Letter-by-letter reveal
- `BlurIn` - Fade in from blur effect
- `FadeUp` - Fade in from below
- `SlideIn` - Slide from any direction
- `ScaleUp` - Scale in from smaller
- `RotateIn` - Rotate in with scale
- `Floating` - Continuous floating animation
- `Pulse` - Pulsing glow effect

### 📱 Sections
- Hero with scroll-expanding video
- Features grid with Lucide icons
- How It Works steps
- Popular Destinations (expandable cards)
- Itinerary Preview
- Testimonials
- Pricing tiers
- CTA section
- Footer

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── navbar.tsx        # Dynamic navigation with active indicator
│   ├── travel-hero.tsx   # Hero section with scroll-expand
│   ├── sections.tsx      # All page sections
│   ├── loading-screen.tsx # 2s loading animation
│   └── ui/
│       ├── scroll-expansion-hero.tsx  # Scroll-triggered video expansion
│       ├── parallax-background.tsx    # Mouse-tracking parallax mountains
│       ├── expand-cards.tsx           # Hover-expand destination cards
│       ├── custom-cursor.tsx          # Smooth animated cursor
│       ├── block-loader.tsx           # Block animation loader
│       └── animations.tsx             # Reusable animation components
└── lib/
    └── utils.ts          # Utility functions
```

## 🎯 Key Components

### ParallaxBackground
Mouse-tracking parallax with 17 layered images (mountains + fog) that respond to cursor movement.

### CustomCursor
Smooth spring-physics cursor with:
- White dot with glow
- Trailing ring with delay
- Hover state detection
- Click animation

### LoadingScreen
2-second animated preloader with BlockLoader component.

### Animations Library
Reusable Framer Motion components for consistent animations across the site.

## 📝 License

MIT

---

Built with ❤️ using Next.js