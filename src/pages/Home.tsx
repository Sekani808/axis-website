// Home.tsx
// Purpose: Main landing page of the AXIS website
// Features:
// - Auto-rotating hero slider with 3 slides
// - Mission statement with core values (Innovation, Collaboration, Impact)
// - Preview of featured projects and PMO leadership team
// - Call-to-action to join AXIS
// Dependencies: Uses static data from /src/data/, images from /public/images/

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import icons from Lucide React (lightweight, tree-shakable)
import { ArrowRight, Users, Lightbulb, Target } from 'lucide-react';

// Animation library for smooth entrance effects
import { motion } from 'framer-motion';

// Reusable UI components
import ProjectCard from '../components/ProjectCard';
import TeamMember from '../components/TeamMember';

// Static data (no backend needed — all content is local)
import { projects } from '../data/projects';
import { team } from '../data/team';

export default function Home() {
  // State to track current slide index in hero carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define hero slides with title, subtitle, and static image path
  // 🔸 Images must exist in `public/images/` (e.g., public/images/background_photos/hero1.png)
  const heroSlides = [
    {
      title: "Innovating for Malawi's Future",
      subtitle: "Youth-led technological solutions for socio-economic challenges",
      image: "/images/background_photos/hero1.png", // Static path 
    },
    {
      title: "From PuriMadzi to Clinic Flow",
      subtitle: "Real projects solving real problems",
      image: "/images/background_photos/hero2.png",
    },
    {
      title: "18 Brilliant Minds",
      subtitle: "ChemE, BiomedE, CyberSec, and more united for change",
      image: "/images/background_photos/hero3.png",
    },
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, [heroSlides.length]); // Dependency: slide count

  // Select first 3 projects for "Featured Projects" section
  const featuredProjects = projects.slice(0, 3);

  // Filter team members who are part of the PMO (Project Management Office)
  const pmoTeam = team.filter(member => member.isPMO);

  return (
    <div>
      {/* ─────────────────────────────────────── */}
      {/* HERO SECTION: Full-screen rotating carousel */}
      {/* Each slide has a background image + dark gradient overlay for text readability */}
      {/* ─────────────────────────────────────── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            // Fade transition between slides
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            // Set background image from public folder
            style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Gradient overlay: improves text contrast over busy images */}
            <div className="absolute inset-0 bg-gradient-to-r from-axis-blue/50 to-axis-green/50"></div>
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content layer (text + button) */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                aria-live="polite" // Accessibility: announce slide changes to screen readers
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link 
                  to="/about" 
                  className="btn-primary text-lg px-8 py-3 inline-flex items-center gap-2"
                >
                  Learn More <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>
          </div>
        ))}

        {/* Slide navigation dots (bottom center) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={index === currentSlide}
            />
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────── */}
      {/* MISSION SECTION: Core values of AXIS */}
      {/* Uses icons to represent Innovation, Collaboration, Impact */}
      {/* ─────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              AXIS (Advanced Xeleration for Industrial Systems) is a youth-led student group from the Malawi University of Science and Technology,
              dedicated to solving Malawi's socio-economic challenges through innovative technology solutions.
            </p>
          </div>

          {/* Three-column grid for values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Innovation */}
            <motion.div
              className="text-center p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-axis-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-axis-blue" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pushing boundaries with cutting-edge technology to address local challenges.
              </p>
            </motion.div>

            {/* Collaboration */}
            <motion.div
              className="text-center p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-axis-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-axis-green" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bringing together diverse disciplines for comprehensive solutions.
              </p>
            </motion.div>

            {/* Impact */}
            <motion.div
              className="text-center p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-axis-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-axis-blue" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Impact</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creating sustainable change for Malawi's development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────── */}
      {/* FEATURED PROJECTS: Showcase top 3 projects */}
      {/* Links to full Projects page */}
      {/* ─────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover our innovative solutions addressing Malawi's challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects" className="btn-secondary text-lg px-8 py-3 inline-flex items-center gap-2">
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────── */}
      {/* PMO TEAM PREVIEW: Leadership team highlights */}
      {/* Links to full Team page */}
      {/* ─────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The PMO team driving AXIS forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {pmoTeam.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/team" className="btn-primary text-lg px-8 py-3 inline-flex items-center gap-2">
              Meet the Full Team <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────── */}
      {/* CALL TO ACTION: Invite visitors to join AXIS */}
      {/* Bold gradient background for visual emphasis */}
      {/* ─────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-axis-blue to-axis-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join the Innovation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of Malawi's next generation of technology leaders. Join AXIS and make a difference.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-axis-blue font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Join AXIS <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}