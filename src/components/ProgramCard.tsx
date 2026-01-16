// src/components/ProgramCard.tsx
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

// Define allowed icon names (only those you use)
type ValidIconName = 'Brain' | 'BarChart3' | 'Wifi' | 'Globe';

interface ProgramCardProps {
  program: {
    id: number;
    title: string;
    description: string;
    icon: ValidIconName; // 👈 Restrict to known icons
    color: 'axis-blue' | 'axis-green';
    features: string[];
  };
}

export default function ProgramCard({ program }: ProgramCardProps) {
  // Safe cast — we know it's valid due to type restriction
  const IconComponent = LucideIcons[program.icon] as React.ComponentType<{ size?: number }>;

  return (
    <motion.div
      className="card p-6 h-full flex flex-col"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.2 }}
      role="article"
    >
      <div
        className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${
          program.color === 'axis-blue'
            ? 'bg-axis-blue/10 text-axis-blue'
            : 'bg-axis-green/10 text-axis-green'
        }`}
        aria-hidden="true"
      >
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
              <span
                className={`w-2 h-2 rounded-full mr-2 ${
                  program.color === 'axis-blue' ? 'bg-axis-blue' : 'bg-axis-green'
                }`}
                aria-hidden="true"
              ></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}