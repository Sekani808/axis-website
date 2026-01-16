# AXIS Innovation & Technology Hub

A modern, responsive website for **AXIS (Advanced Xeleration for Industrial Systems)** — a youth-led student innovation hub at Malawi University of Science and Technology, solving socio-economic challenges through technology.

[![Live Demo](https://img.shields.io/badge/Live_Demo-00d4ff?style=for-the-badge&logo=vercel&logoColor=white)](https://axis-malawi.vercel.app/)

## 🌟 Features

- **Modern React SPA** with Vite for blazing-fast development
- **Multi-page navigation** using React Router
- **Fully responsive** design with Tailwind CSS
- **Dark/light mode toggle** with system preference support
- **Smooth animations** with Framer Motion
- **Accessible UI** with semantic HTML and ARIA labels
- **Static content architecture** — no backend required
- **SEO-ready** with descriptive meta tags
- **Optimized performance** with lazy-loaded images

##  Live Demo

👉 [https://axis-malawi.vercel.app](https://axis-malawi.vercel.app)

## 🛠️ Tech Stack

| Category       | Technology             |
|----------------|------------------------|
| Core           | React 18 + TypeScript  |
| Build Tool     | Vite                   |
| Styling        | Tailwind CSS           |
| Routing        | React Router DOM       |
| Icons          | Lucide React           |
| Animations     | Framer Motion          |
| Forms          | React Hook Form        |
| Deployment     | Vercel                 |

## 📁 Project Structure
axis-hybrid-web/
├── public/
│ ├── _redirects # Netlify SPA redirects
│ └── images/ # All static images (team, projects, backgrounds)
├── src/
│ ├── components/ # Reusable UI cards & layout
│ ├── pages/ # Route-based page components
│ ├── data/ # Static content (no API needed)
│ ├── App.tsx # Main app router
│ └── main.tsx # Entry point
├── vercel.json # Vercel config (SPA fallback)
└── tailwind.config.js # Custom theme (axis-blue, axis-green)

##  Getting Started

### Prerequisites
- Node.js v18+
- npm or pnpm

### Installation
```bash
git clone https://github.com/Sekani808/axis-hybrid-web.git
cd axis-hybrid-web
npm install
npm run dev

npm run build    # Outputs to /dist
npm run preview  # Test production build locally