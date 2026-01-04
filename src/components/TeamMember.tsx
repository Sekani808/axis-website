import { Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    role: string;
    discipline: string;
    bio: string;
    image: string;
    linkedin: string;
    github: string;
    isPMO: boolean;
  };
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    <motion.div
      className={`card p-6 text-center h-full flex flex-col ${
        member.isPMO ? 'ring-2 ring-axis-blue shadow-lg' : ''
      }`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">
          {member.name}
        </h3>
        <p className="text-axis-blue font-semibold mb-1">{member.role}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {member.discipline}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1">
          {member.bio}
        </p>
      </div>

      <div className="flex justify-center gap-3">
        <a
          href={member.linkedin}
          className="text-gray-600 dark:text-gray-300 hover:text-axis-blue transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name}'s LinkedIn`}
        >
          <Linkedin size={20} />
        </a>
        <a
          href={member.github}
          className="text-gray-600 dark:text-gray-300 hover:text-axis-blue transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name}'s GitHub`}
        >
          <Github size={20} />
        </a>
      </div>
    </motion.div>
  );
}