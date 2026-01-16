// TeamMember.tsx
// Purpose: Reusable card to display a single team member's profile
// Features:
// - Circular profile photo with lazy loading
// - Name, role, discipline, and bio
// - LinkedIn & GitHub social icons with hover effects
// - Visual highlight for PMO (leadership) members
// - Fully accessible (alt text, aria-labels, safe external links)

import { Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

// Define props interface for type safety
interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    role: string;
    discipline: string;
    bio: string;
    image: string;      // Static path from public/images/ (e.g., "/images/team-sekani.jpg")
    linkedin: string;   // URL to LinkedIn profile (use "#" as placeholder if not available)
    github: string;     // URL to GitHub profile
    isPMO: boolean;     // True if member is part of leadership (PMO)
  };
}

export default function TeamMember({ member }: TeamMemberProps) {
  return (
    // Card container with optional PMO highlight ring
    <motion.div
      className={`card p-6 text-center h-full flex flex-col ${
        member.isPMO 
          ? 'ring-2 ring-axis-blue shadow-lg' // Highlight PMO members
          : ''
      }`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      role="article" // Improves semantics for screen readers
    >
      {/* Profile photo — circular */}
      <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <img
          src={member.image}
          alt={member.name} // ✅ Critical for accessibility
          className="w-full h-full object-cover"
          loading="lazy" // ✅ Defers offscreen image loading
          onError={(e) => {
            // Optional: Fallback to generic avatar if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = '/images/add-images/placeholder.jpg'; // Ensure this file exists!
          }}
        />
      </div>

      {/* Member info: name, role, discipline, bio */}
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

      {/* Social links: LinkedIn + GitHub */}
      <div className="flex justify-center gap-3">
        {/* Only show LinkedIn if URL is not "#" */}
        {member.linkedin !== '#' && (
          <a
            href={member.linkedin}
            className="text-gray-600 dark:text-gray-300 hover:text-axis-blue transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name}'s LinkedIn profile`}
          >
            <Linkedin size={20} />
          </a>
        )}

        {/* Only show GitHub if URL is not "#" */}
        {member.github !== '#' && (
          <a
            href={member.github}
            className="text-gray-600 dark:text-gray-300 hover:text-axis-blue transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name}'s GitHub profile`}
          >
            <Github size={20} />
          </a>
        )}
      </div>
    </motion.div>
  );
}