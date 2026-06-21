import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {skillCategories.map((cat, index) => (
            <motion.button
              key={cat.title}
              className={`px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 ${
                activeCategory === index
                  ? 'text-white shadow-lg'
                  : 'glass text-dark-300 hover:text-white'
              }`}
              style={
                activeCategory === index
                  ? { background: 'linear-gradient(135deg, #a855f7, #6366f1)' }
                  : {}
              }
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass rounded-2xl p-6 text-center card-hover group cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ scale: 1.08, y: -5 }}
            >
              <motion.div
                className="text-3xl mb-3 mx-auto text-primary-400 group-hover:text-primary-300 transition-colors"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                <skill.icon />
              </motion.div>
              <p className="text-sm font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* All skills overview - small pills */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-dark-400 text-sm mb-4">All Technologies</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill) => (
                <span
                  key={`${cat.title}-${skill.name}`}
                  className="px-3 py-1 rounded-full text-xs font-medium glass text-dark-300 hover:text-primary-400 transition-colors cursor-default"
                >
                  {skill.name}
                </span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
