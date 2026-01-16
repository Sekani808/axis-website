// ActivityCard.tsx
// Purpose: Reusable card component to display a single activity/event
// Features:
// - Displays image, title, description, date, and type
// - Color-coded badge based on activity type (Hackathon, Workshop, etc.)
// - Hover scale animation for interactivity
// - Lazy-loaded image for performance
// - Fully accessible (alt text, semantic structure)

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

// Define props interface for type safety
interface ActivityCardProps {
  activity: {
    id: number;
    title: string;
    description: string;
    image: string;      // Static path from public/images/ (e.g., "/images/activity-hackathon.jpg")
    date: string;       // e.g., "August 2025"
    type: string;       // e.g., "Hackathon", "Workshop" — used for styling
  };
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    // Card container with hover animation
    <motion.div
      className="card p-6 h-full flex flex-col"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      role="article" // Improves semantics for screen readers
    >
      {/* Image container with fixed aspect ratio (16:9) */}
      <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
        <img
          src={activity.image}
          alt={activity.title} // Critical for accessibility
          className="w-full h-full object-cover"
          loading="lazy" // Defers offscreen image loading
        />
      </div>

      {/* Content area: type badge, date, title, description */}
      <div className="flex-1">
        {/* Top metadata: type badge + date */}
        <div className="flex items-center gap-2 mb-2">
          {/* Dynamic badge based on activity type */}
          <span 
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              activity.type === 'Hackathon' 
                ? 'bg-axis-blue/10 text-axis-blue' 
                : activity.type === 'Workshop' 
                  ? 'bg-axis-green/10 text-axis-green' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
            }`}
          >
            {activity.type}
          </span>
          
          {/* Date with calendar icon */}
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <Calendar size={14} />
            {activity.date}
          </div>
        </div>

        {/* Title as heading (semantic) */}
        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
          {activity.title}
        </h3>

        {/* Description text */}
        <p className="text-gray-600 dark:text-gray-300 flex-1">
          {activity.description}
        </p>
      </div>
    </motion.div>
  );
}