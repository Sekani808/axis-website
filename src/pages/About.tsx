import { motion } from 'framer-motion';
import { GraduationCap, Users, Target, Award } from 'lucide-react';

export default function About() {
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
            About AXIS
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Advanced Xeleration for Industrial Systems - Youth-led innovation from Malawi
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                AXIS is dedicated to solving Malawi's socio-economic challenges through innovative technology solutions.
                We believe that youth-led initiatives can drive sustainable development and create lasting impact
                in our communities.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Founded at Malawi University of Science and Technology, we bring together students from diverse
                disciplines to collaborate on projects that address real-world problems in healthcare, agriculture,
                water purification, and beyond.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Target className="text-axis-blue mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">Innovation-driven solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="text-axis-green mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">Collaborative interdisciplinary approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="text-axis-blue mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">Excellence in execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap className="text-axis-green mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">Continuous learning and growth</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Composition */}
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
              Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Diverse expertise united for innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl font-bold text-axis-blue mb-2">11</div>
              <div className="text-gray-600 dark:text-gray-300">Chemical Engineers</div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl font-bold text-axis-green mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-300">Biomedical Engineers</div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl font-bold text-axis-blue mb-2">1</div>
              <div className="text-gray-600 dark:text-gray-300">Manufacturing Engineer</div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl font-bold text-axis-green mb-2">1</div>
              <div className="text-gray-600 dark:text-gray-300">Microbiologist</div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg md:col-start-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl font-bold text-axis-blue mb-2">2</div>
              <div className="text-gray-600 dark:text-gray-300">Cyber Security Experts</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History & Achievements */}
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From student initiative to innovative force
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Founded in 2023</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                AXIS was established by forward-thinking students at Malawi University of Science and Technology
                who recognized the potential of combining diverse engineering disciplines with technology to address
                Malawi's unique challenges.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Starting with a small group of passionate individuals, we've grown into a dynamic team of 18 members
                working on projects that span healthcare, agriculture, water purification, and digital solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Key Achievements</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-axis-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span>Developed PuriMadzi water purification system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-axis-green rounded-full mt-2 flex-shrink-0"></span>
                  <span>Created Clinic Flow AI-powered healthcare management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-axis-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span>Participated in national innovation competitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-axis-green rounded-full mt-2 flex-shrink-0"></span>
                  <span>Collaborated with industry partners and NGOs</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}