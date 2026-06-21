import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and training
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-700 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.2 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 z-10"
                style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1)' }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.2 }}
              >
                <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-primary-500" />
              </motion.div>

              {/* Spacer for left cards */}
              <div className="hidden md:block flex-1" />

              {/* Card */}
              <div className={`flex-1 ml-14 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  className="glass rounded-2xl p-6 glow-purple card-hover"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1)' }}
                    >
                      <exp.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                      <p className="text-primary-400 font-medium text-sm">{exp.company}</p>
                      <p className="text-dark-400 text-sm">{exp.period}</p>
                    </div>
                  </div>

                  <p className="text-dark-300 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary-600/20 text-primary-300 border border-primary-500/20"
                      >
                        {skill}
                      </span>
                    ))}
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
