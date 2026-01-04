import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

interface ProgramCardProps {
  program: {
    id: number;
    title: string;
    description: string;
    icon: string;
    color: string;
    features: string[];
  };
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const IconComponent = (LucideIcons as any)[program.icon] || LucideIcons.Circle;

  return (
    <motion.div
      className="card p-6 h-full flex flex-col"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${
        program.color === 'axis-blue' ? 'bg-axis-blue/10 text-axis-blue' : 'bg-axis-green/10 text-axis-green'
      }`}>
        <IconComponent size={32} />
      </div>

      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
        {program.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
        {program.description}
      </p>

      <div className="space-y-2">
        <h4 className="font-semibold text-gray-900 dark:text-white">Key Features:</h4>
        <ul className="space-y-1">
          {program.features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
              <span className={`w-2 h-2 rounded-full mr-2 ${
                program.color === 'axis-blue' ? 'bg-axis-blue' : 'bg-axis-green'
              }`}></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}