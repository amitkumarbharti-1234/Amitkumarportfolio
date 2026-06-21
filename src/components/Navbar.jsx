import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { navLinks } from '../data/portfolioData';

export default function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-lg py-3'
          : 'py-5 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <motion.span
            className="text-2xl font-bold gradient-text tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            Amit Kumar
          </motion.span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onSetActive={() => setActiveLink(link.to)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-all duration-300 ${
                activeLink === link.to
                  ? 'text-white'
                  : isDark
                  ? 'text-dark-300 hover:text-white'
                  : 'text-dark-500 hover:text-dark-800'
              }`}
            >
              {activeLink === link.to && (
                <motion.span
                  layoutId="navbar-active"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(99,102,241,0.3))',
                    border: '1px solid rgba(139,92,246,0.3)',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Right side: theme toggle + mobile menu */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            id="theme-toggle"
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
              isDark
                ? 'bg-white/10 text-yellow-400 hover:bg-white/20'
                : 'bg-dark-800/10 text-dark-700 hover:bg-dark-800/20'
            }`}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            id="mobile-menu-toggle"
            className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center cursor-pointer ${
              isDark ? 'bg-white/10 text-white' : 'bg-dark-800/10 text-dark-700'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden glass-strong mt-2 mx-4 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium cursor-pointer transition-all ${
                      activeLink === link.to
                        ? 'bg-primary-600/20 text-primary-400'
                        : isDark
                        ? 'text-dark-300 hover:text-white hover:bg-white/5'
                        : 'text-dark-500 hover:text-dark-800 hover:bg-dark-800/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
