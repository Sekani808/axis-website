// ProjectCard.tsx
// Purpose: Reusable card to display a single project with image, description, tags, and links
// Features:
// - Displays project image, title, description, and tech tags
// - Provides "Demo" and "Code" buttons with external/GitHub icons
// - Hover scale animation for interactivity
// - Lazy-loaded image for performance
// - Fully accessible (alt text, semantic structure, safe external links)

import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

// Define props interface for type safety
interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;      // Static path from public/images/ 
    tags: string[];     // e.g., ["AI", "Healthcare"]
    demoUrl: string;    // URL to live demo (use "#" as placeholder if not ready)
    repoUrl: string;    // URL to GitHub/GitLab repo
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    // Card container with hover animation
    <motion.div
      className="card p-6 h-full flex flex-col"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      role="article" // Improves semantics for screen readers
    >
      {/* Image container with fixed 16:9 aspect ratio */}
      <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
        <img
          src={project.image}
          alt={project.title} // ✅ Critical for accessibility — describes image content
          className="w-full h-full object-cover"
          loading="lazy" // ✅ Defers loading of offscreen images for better performance
        />
      </div>

      {/* Content area: title, description, tags */}
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-axis-blue/10 text-axis-blue rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action buttons: Demo + Code */}
      <div className="flex gap-2">
        {/* Demo link */}
        <a
          href={project.demoUrl}
          className="flex items-center gap-2 btn-primary text-sm px-3 py-2"
          target="_blank"
          rel="noopener noreferrer" // ✅ Security best practice for external links
          aria-label={`View demo of ${project.title}`} // ✅ Accessibility: describes purpose
        >
          <ExternalLink size={16} />
          Demo
        </a>

        {/* Repository link */}
        <a
          href={project.repoUrl}
          className="flex items-center gap-2 btn-secondary text-sm px-3 py-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View source code for ${project.title}`}
        >
          <Github size={16} />
          Code
        </a>
      </div>
    </motion.div>
  );
}