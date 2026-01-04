import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface ActivityCardProps {
  activity: {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    type: string;
  };
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <motion.div
      className="card p-6 h-full flex flex-col"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            activity.type === 'Hackathon' ? 'bg-axis-blue/10 text-axis-blue' :
            activity.type === 'Workshop' ? 'bg-axis-green/10 text-axis-green' :
            'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
          }`}>
            {activity.type}
          </span>
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <Calendar size={14} />
            {activity.date}
          </div>
        </div>

        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
          {activity.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 flex-1">
          {activity.description}
        </p>
      </div>
    </motion.div>
  );
}