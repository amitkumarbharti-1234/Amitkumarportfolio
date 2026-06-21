import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaDownload, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { personalInfo, stats } from '../data/portfolioData';

function TypingAnimation({ words }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(word.substring(0, currentText.length + 1));
          if (currentText === word) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setCurrentText(word.substring(0, currentText.length - 1));
          if (currentText === '') {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="gradient-text">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block ml-0.5 w-0.5 h-8 bg-primary-400 align-middle"
      />
    </span>
  );
}

function AnimatedCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const numValue = parseInt(value);

  useEffect(() => {
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
  }, [numValue]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.p
              className="text-primary-400 font-medium mb-4 text-lg tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              👋 Welcome to my portfolio
            </motion.p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className={`block mb-2`}>Hi, I'm</span>
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <div className="text-xl sm:text-2xl font-semibold mb-8 h-10">
              <TypingAnimation words={personalInfo.roles} />
            </div>

            <motion.p
              className="text-dark-300 text-lg max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Passionate about building beautiful, performant web applications and solving complex algorithmic challenges.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="projects" smooth={true} offset={-80} duration={500}>
                <button className="btn-primary" id="hero-view-projects">
                  View Projects <FaArrowRight />
                </button>
              </Link>
              <a
                href={personalInfo.resumeLink}
                download
                className="btn-secondary"
                id="hero-download-resume"
              >
                <FaDownload /> Download Resume
              </a>
              <Link to="contact" smooth={true} offset={-80} duration={500}>
                <button className="btn-secondary" id="hero-contact-me">
                  <FaEnvelope /> Contact Me
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{
                  background: 'linear-gradient(135deg, #a855f7, #6366f1)',
                }}
              />
              {/* Rotating border ring */}
              <motion.div
                className="absolute -inset-3 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #a855f7, #6366f1, #8b5cf6, #a855f7)',
                  padding: '3px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full bg-dark-900" />
              </motion.div>
              {/* Profile image */}
              <img
                src={personalInfo.profileImage}
                alt={`Profile photo of ${personalInfo.name}`}
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-dark-800"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center card-hover"
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className="text-3xl text-primary-400 mx-auto mb-3" />
              <div className="text-3xl font-bold gradient-text mb-1">
                {stat.value.includes('+') ? (
                  <AnimatedCounter
                    value={stat.value.replace('+', '')}
                    suffix="+"
                  />
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-dark-300 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
