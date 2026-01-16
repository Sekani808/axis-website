// Contact.tsx
// Purpose: Provide multiple ways for visitors to reach AXIS
// Features:
// - Hero section with background image (from /public/images/background/)
// - Contact info: Email, WhatsApp, Location
// - Real social media icons (LinkedIn, Facebook, YouTube, GitHub)
// - Functional contact form (frontend-only; no backend needed)
// - Map placeholder (can be replaced with Google Maps embed later)

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

// Import all needed icons from Lucide React
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  Linkedin,
  Facebook,
  Youtube,
  Github,
  Instagram
} from 'lucide-react';

// Form data interface
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  // Handle form submission (frontend only — logs to console)
  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    // In a real app, this would send to a backend or email service
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000); // Auto-hide success message after 5s
  };

  return (
    <div>
      {/* ─────────────────────────────────────── */}
      {/* HERO SECTION: Background image + overlay */}
      {/* 🔸 Replaced solid gradient with real background image */}
      {/* Ensure: public/images/background/contact-bg.jpg exists */}
      {/* ─────────────────────────────────────── */}
      <section 
        className="text-white py-20 relative"
        style={{
          backgroundImage: `url(/images/add-images/contact.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's collaborate and build innovative solutions together
          </motion.p>
        </div>
      </section>

      {/* ─────────────────────────────────────── */}
      {/* CONTACT CONTENT: Info + Form */}
      {/* Two-column layout on large screens */}
      {/* ─────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                Get In Touch
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-axis-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-axis-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                    <a
                      href="mailto:info@axis-malawi.org"
                      className="text-gray-600 dark:text-gray-300 hover:text-axis-blue transition-colors"
                    >
                      advaxeleis@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-axis-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-axis-green" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/265980720991"
                      className="text-gray-600 dark:text-gray-300 hover:text-axis-blue transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +265 980 720 991
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-axis-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-axis-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Malawi University of Science and Technology<br />
                      Thyolo, Malawi
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links with REAL ICONS */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {/* 🔗 Replace # with your actual URLs */}
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors"
                    aria-label="Visit our LinkedIn page"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://web.facebook.com/share/p/1bYA3r912b/"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                    aria-label="Visit our Facebook page"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-colors"
                    aria-label="Visit our YouTube channel"
                  >
                    <Youtube size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#181717] hover:text-white transition-colors"
                    aria-label="Visit our GitHub organization"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/axis03650?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-colors"
                    aria-label="Visit our Instagram page"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send us a Message
                </h3>

                {/* Success message */}
                {isSubmitted && (
                  <motion.div
                    className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                    <span className="text-green-800 dark:text-green-200">
                      Message sent successfully! We'll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-axis-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-axis-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      {...register('subject', { required: 'Subject is required' })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-axis-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register('message', { required: 'Message is required' })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-axis-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-vertical"
                      placeholder="Tell us about your project or how we can collaborate..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-axis-blue hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────── */}
      {/* MAP SECTION: Placeholder for future Google Maps embed */}
      {/* ─────────────────────────────────────── */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Find Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Located at Malawi University of Science and Technology
            </p>
          </motion.div>

          <div className="bg-gray-200 dark:bg-gray-700 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <MapPin size={48} className="mx-auto mb-4" />
              <p className="text-lg">Interactive Map Coming Soon</p>
              <p className="text-sm">Malawi University of Science and Technology, Thyolo, Malawi</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}