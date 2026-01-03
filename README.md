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
- **Loading Screen** - Animated block loader with 2-second anticipation
- **Geometric Shapes** - Floating blue-themed shapes with scroll-triggered animations

### 🖱️ Interactions
- **Pop-out Hover Effects** - Cards and buttons scale up and lift on hover
- **Scroll Expand Hero** - Video expands as you scroll, revealing content
- **Dynamic Navbar** - Active section indicator with animated sliding pill
- **Expand-on-Hover Destinations** - Interactive destination cards

### 📱 Sections
- Hero with scroll-expanding video
- Features grid with Lucide icons
- How It Works steps
- Popular Destinations (expand cards)
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
│   ├── navbar.tsx        # Dynamic navigation
│   ├── travel-hero.tsx   # Hero section
│   ├── sections.tsx      # All page sections
│   ├── loading-screen.tsx
│   └── ui/
│       ├── scroll-expansion-hero.tsx
│       ├── parallax-background.tsx
│       ├── shape-landing-hero.tsx
│       ├── expand-cards.tsx
│       ├── custom-cursor.tsx
│       └── block-loader.tsx
└── lib/
    └── utils.ts          # Utility functions
```

## 📝 License

MIT

---

Built with ❤️ using Next.js