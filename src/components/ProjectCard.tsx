import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl: string;
    repoUrl: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="card p-6 h-full flex flex-col"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
          {project.description}
        </p>

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

      <div className="flex gap-2">
        <a
          href={project.demoUrl}
          className="flex items-center gap-2 btn-primary text-sm px-3 py-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={16} />
          Demo
        </a>
        <a
          href={project.repoUrl}
          className="flex items-center gap-2 btn-secondary text-sm px-3 py-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={16} />
          Code
        </a>
      </div>
    </motion.div>
  );
}