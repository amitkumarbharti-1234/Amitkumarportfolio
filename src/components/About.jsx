import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaCode, FaShieldAlt, FaBrain } from 'react-icons/fa';
import { personalInfo, aboutCards, interests } from '../data/portfolioData';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const interestIcons = {
    'Web Development': FaCode,
    'Artificial Intelligence': FaBrain,
    'Cybersecurity': FaShieldAlt,
  };

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know me, my background, and what drives me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-dark-300 text-lg leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {aboutCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  className="glass rounded-2xl p-5 text-center card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <card.icon className="text-2xl text-primary-400 mx-auto mb-2" />
                  <h4 className="font-bold text-sm mb-1">{card.title}</h4>
                  <p className="text-dark-400 text-xs">{card.detail}</p>
                </motion.div>
              ))}
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Areas of <span className="gradient-text">Interest</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => {
                  const Icon = interestIcons[interest] || FaCode;
                  return (
                    <motion.div
                      key={interest}
                      className="glass rounded-full px-5 py-2.5 flex items-center gap-2 text-sm font-medium card-hover cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Icon className="text-primary-400" />
                      {interest}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right - Visual Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass rounded-3xl p-8 glow-purple relative overflow-hidden">
              {/* Background decoration */}
              <div
                className="absolute top-0 right-0 w-40 h-40 opacity-20 rounded-full blur-3xl"
                style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1)' }}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1)' }}
                  >
                    <FaGraduationCap className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Education</h3>
                    <p className="text-dark-400 text-sm">Academic Background</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-dark-300">Degree</span>
                    <span className="font-semibold">B.Tech CSE</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-dark-300">Institution</span>
                    <span className="font-semibold">NIT Uttarakhand</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-dark-300">Duration</span>
                    <span className="font-semibold">2022 – 2026</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-dark-300">CGPA</span>
                    <span className="font-bold gradient-text text-lg">7.10</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-dark-300">Focus</span>
                    <span className="font-semibold">Full Stack & AI</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
