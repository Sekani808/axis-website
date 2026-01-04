# AXIS Hybrid Website

A modern, responsive website for AXIS (Advanced Xeleration for Industrial Systems) - a youth-led student group from Malawi University of Science and Technology focused on solving socio-economic challenges through innovative technology.

## 🌟 Features

- **Modern React SPA** with Vite for fast development and building
- **Multi-page navigation** using React Router
- **Responsive design** with Tailwind CSS
- **Dark mode support** with theme toggle
- **Animated components** with Framer Motion
- **Form validation** with React Hook Form
- **SEO optimized** with meta tags and Open Graph
- **Accessibility compliant** with semantic HTML and ARIA labels
- **Backend ready** with Django integration comments

## 🚀 Live Demo

[View the live website](https://axis-malawi.vercel.app/) (deployed on Vercel)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Routing**: React Router DOM

## 📁 Project Structure

```
axis-hybrid-web/
├── public/
│   ├── _redirects          # Netlify SPA redirects
│   └── images/             # Static images
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Layout.tsx      # Main layout with navigation
│   │   ├── ProjectCard.tsx # Project display card
│   │   ├── TeamMember.tsx  # Team member card
│   │   ├── ProgramCard.tsx # Program track card
│   │   └── ActivityCard.tsx # Activity display card
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Landing page
│   │   ├── About.tsx       # About AXIS
│   │   ├── Programs.tsx    # Program tracks
│   │   ├── Projects.tsx    # Project gallery
│   │   ├── Team.tsx        # Team members
│   │   ├── Activities.tsx  # Events & activities
│   │   └── Contact.tsx     # Contact form & info
│   ├── data/               # Static data files
│   │   ├── projects.js     # Project information
│   │   ├── team.js         # Team member data
│   │   ├── programs.js     # Program tracks
│   │   └── activities.js   # Activities data
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles
├── vercel.json             # Vercel deployment config
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/axis-hybrid-web.git
   cd axis-hybrid-web
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.js`:

- **Primary Blue**: `#00d4ff` (axis-blue)
- **Secondary Green**: `#10b981` (axis-green)
- **Dark Theme**: `#0a2540` (axis-dark)

### Content

All content is stored in the `src/data/` directory:

- `projects.js` - Update project information, images, and links
- `team.js` - Modify team member details and social links
- `programs.js` - Edit program tracks and features
- `activities.js` - Add or update activities and events

### Images

Place images in the `public/images/` directory and reference them with `/images/filename.jpg`.

For Django integration, update image paths to use Django's static file serving:

```javascript
// Replace
image: "/images/project-purimadzi.jpg";
// With
image: "{{ project.image.url }}"; // Django template variable
```

## 🔧 Django Integration

This frontend is designed to work seamlessly with a Django backend. Here's how to integrate:

### 1. Update Data Files

Replace static data with Django API calls:

```javascript
// src/data/projects.js
// Replace static export with API fetch
export const fetchProjects = async () => {
  const response = await fetch("/api/projects/");
  return response.json();
};
```

### 2. Image Paths

Update image references to use Django's static file URLs:

```javascript
// In component files, replace:
<img src={project.image} alt={project.title} />

// With:
<img src={`{{ project.image.url }}`} alt={project.title} />
```

### 3. Form Submission

Update the contact form to submit to Django:

```javascript
// In Contact.tsx
const onSubmit = async (data) => {
  const response = await fetch("/api/contact/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    setIsSubmitted(true);
  }
};
```

### 4. CSRF Protection

Add CSRF token to forms when integrating with Django:

```javascript
// Get CSRF token from cookie or meta tag
const getCsrfToken = () => {
  return (
    document.querySelector("[name=csrfmiddlewaretoken]")?.value ||
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("csrftoken="))
      ?.split("=")[1]
  );
};
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration
4. Deploy!

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. The `_redirects` file handles SPA routing

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist/` contents to your web server
3. Configure your server for SPA routing (fallback to index.html)

## 📱 Features Overview

### Pages

- **Home**: Hero slider, mission statement, featured projects, PMO team preview, CTA
- **About**: AXIS mission, team composition, history
- **Programs**: 4 specialized tracks (AI Lab, Data Science, IoT, Web Dev)
- **Projects**: Full gallery of 5 innovative projects
- **Team**: 18 members with PMO highlighting and social links
- **Activities**: Hackathons, workshops, and industry visits
- **Contact**: Functional form, social links, location info

### Interactive Features

- **Dark Mode Toggle**: Switch between light and dark themes
- **Responsive Navigation**: Mobile-friendly menu
- **Animated Cards**: Hover effects and smooth transitions
- **Form Validation**: Real-time validation with error messages
- **Image Lazy Loading**: Optimized performance

### Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- AXIS team for the inspiration and content
- Malawi University of Science and Technology
- Open source community for the amazing tools

## 📞 Support

For questions or support, contact the AXIS team at info@axis-malawi.org

---

**Built with ❤️ for Malawi's future innovators**
