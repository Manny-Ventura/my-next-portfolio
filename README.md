# Manny Ventura – Developer Portfolio

A clean, responsive developer portfolio built with Next.js and Tailwind CSS.
This project focuses on simplicity, readability, and solid frontend fundamentals rather than over-engineering.

---

## Overview

This portfolio serves as a central place to showcase my projects, technical experience, and contact information. The goal was to build something:

- Clean and easy to navigate
- Fully responsive across devices
- Minimal but polished
- Structured with maintainable React patterns

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Icons:** lucide-react
- **Deployment:** Vercel
- **Domain:** Custom domain via Namecheap

---

## Features

- Responsive navigation with mobile hamburger menu
- Clean layout with reusable components (Navbar, Footer, sections)
- Project showcase section
- Contact page with accessible external links
- Consistent design system using CSS variables + Tailwind
- Fast, server-rendered pages with Next.js

---

## Project Structure

```
app/
  ├── page.tsx        # Home page
  ├── about/          # About page
  ├── projects/       # Projects page
  ├── contact/        # Contact page
  ├── layout.tsx      # Root layout (Navbar, Footer, main container)
components/
  ├── Navbar.tsx
  ├── Footer.tsx
data/
  ├── projects.ts     # Project data
styles/
  ├── globals.css
```

---

## Design Decisions

### 1. Simplicity over complexity

Avoided UI libraries and heavy abstractions. Focused on:

- Clear layout structure
- Predictable component behavior
- Minimal dependencies

### 2. Responsive-first layout

Used Tailwind breakpoints to:

- Show desktop navigation on larger screens
- Toggle a mobile menu using React state

### 3. Separation of concerns

- `layout.tsx` handles the overall page shell
- Individual pages control their own content width and structure
- Components are small and reusable

### 4. Minimal animations

Kept transitions subtle:

- Color transitions for links
- Simple mobile menu toggle

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Manny-Ventura/my-next-portfolio
cd my-next-portfolio
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## Deployment

This project is deployed using Vercel.

Steps:

1. Push to GitHub
2. Import repository into Vercel
3. Configure custom domain (Namecheap DNS → Vercel)

---

## Future Improvements

- Add more detailed project case studies
- Improve accessibility (ARIA roles, keyboard navigation)
- Add light/dark mode toggle
- Expand backend-focused project content
- Optional animation enhancements (kept minimal for now)

---

## Contact

- GitHub: https://github.com/Manny-Ventura
- LinkedIn: https://www.linkedin.com/in/manuel-ventura-048573169/
- Email: [mannyventura9@yahoo.com](mailto:mannyventura9@yahoo.com)

---

## Notes

This project intentionally avoids over-engineering.
It is designed to demonstrate solid fundamentals in:

- React component structure
- Responsive layout design
- Clean styling with Tailwind
- Practical frontend decision-making
