import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 mt-12">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <motion.h3
            className="text-2xl font-bold gradient-text mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Amit Kumar
          </motion.h3>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-6">
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-dark-300 hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.1, y: -3 }}
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-dark-300 hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.1, y: -3 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
          </div>

          {/* Made with love */}
          <p className="text-dark-400 text-sm mb-4">
            Made with <FaHeart className="inline text-red-500 mx-1" /> by Amit Kumar
          </p>

          {/* Copyright */}
          <p className="text-dark-500 text-xs mt-6">
            © {currentYear} Amit Kumar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
