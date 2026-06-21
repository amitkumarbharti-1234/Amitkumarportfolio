import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements } from '../data/portfolioData';

function AnimatedNumber({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numValue = parseInt(value);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = numValue / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= numValue) {
        setCount(numValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, numValue]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="py-24 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Milestones and accomplishments along my journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="glass rounded-2xl p-8 glow-purple card-hover relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background glow */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1)' }}
              />

              <div className="relative flex items-start gap-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1)' }}
                >
                  <achievement.icon className="text-white text-2xl" />
                </div>

                <div className="flex-1">
                  <div className="text-3xl font-extrabold gradient-text mb-2">
                    {achievement.stat.includes('+') ? (
                      <AnimatedNumber
                        value={achievement.stat.replace('+', '')}
                        suffix="+"
                      />
                    ) : (
                      achievement.stat
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
