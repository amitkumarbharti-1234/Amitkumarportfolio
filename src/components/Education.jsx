import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education } from '../data/portfolioData';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            My academic background and qualifications
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15 }}
            >
              {/* Timeline dot and line */}
              <div className="absolute left-8 top-0 bottom-0 flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full z-10 mt-8"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1)' }}
                />
                <div className="w-0.5 flex-1 bg-gradient-to-b from-primary-500/50 to-transparent" />
              </div>

              {/* Card */}
              <div className="ml-20">
                <motion.div
                  className="glass rounded-2xl p-8 glow-purple card-hover"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1)' }}
                    >
                      <edu.icon className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-primary-400 font-medium">{edu.field}</p>
                      <p className="text-dark-300 font-medium mt-1">{edu.institution}</p>
                      <div className="flex items-center gap-4 mt-3">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-600/20 text-primary-300 border border-primary-500/20">
                          {edu.period}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-500/20 text-accent-400 border border-accent-500/20">
                          CGPA: {edu.cgpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
