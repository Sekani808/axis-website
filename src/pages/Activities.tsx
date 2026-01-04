import { motion } from 'framer-motion';
import ActivityCard from '../components/ActivityCard';
import { activities } from '../data/activities';

export default function Activities() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-axis-blue to-axis-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Activities
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Learning, collaborating, and innovating through events and experiences
          </motion.p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Recent Activities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From hackathons and workshops to industry visits and collaborations,
              our activities keep us engaged and inspired.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ActivityCard activity={activity} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Types */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Types of Activities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We engage in diverse activities to learn, collaborate, and innovate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white dark:bg-gray-700 p-8 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-axis-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Hackathons</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Intensive coding events where we prototype solutions to real-world problems
                in a collaborative, time-constrained environment.
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-700 p-8 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-axis-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Workshops</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Educational sessions covering cutting-edge technologies, methodologies,
                and skills development for our team members.
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-700 p-8 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-axis-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏭</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Industry Visits</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Site visits to companies, research facilities, and organizations to
                learn about real-world applications and build partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Activities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Upcoming Activities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Stay tuned for our next exciting events and opportunities
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-axis-blue/10 to-axis-green/10 p-8 rounded-lg border border-axis-blue/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  More Activities Coming Soon!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We're planning exciting hackathons, workshops, and collaborations.
                  Follow us on social media or check back regularly for updates.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="#"
                    className="text-axis-blue hover:text-axis-blue/80 font-semibold transition-colors"
                  >
                    LinkedIn
                  </a>
                  <span className="text-gray-400">|</span>
                  <a
                    href="#"
                    className="text-axis-blue hover:text-axis-blue/80 font-semibold transition-colors"
                  >
                    Twitter
                  </a>
                  <span className="text-gray-400">|</span>
                  <a
                    href="#"
                    className="text-axis-blue hover:text-axis-blue/80 font-semibold transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-axis-blue to-axis-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Want to Collaborate?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We're always open to partnerships, sponsorships, and collaboration opportunities.
            Let's work together to drive innovation in Malawi.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="#contact"
              className="bg-white text-axis-blue font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}