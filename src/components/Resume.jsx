import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaDownload, FaEye, FaFilePdf } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="resume" className="py-24 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            View or download my professional resume
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-3xl p-10 glow-purple text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {/* Background decoration */}
          <div
            className="absolute -top-20 -left-20 w-60 h-60 rounded-full opacity-10 blur-3xl"
            style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1)' }}
          />
          <div
            className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full opacity-10 blur-3xl"
            style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
          />

          <div className="relative">
            {/* Resume Icon */}
            <motion.div
              className="w-24 h-24 rounded-3xl mx-auto mb-8 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1)' }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <FaFilePdf className="text-white text-4xl" />
            </motion.div>

            <h3 className="text-2xl font-bold mb-3">Amit Kumar — Resume</h3>
            <p className="text-dark-400 text-lg mb-8 max-w-md mx-auto">
              Frontend Developer • MERN Stack Developer • B.Tech CSE
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
                id="resume-preview"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEye /> Preview Resume
              </motion.a>
              <motion.a
                href={personalInfo.resumeLink}
                download
                className="btn-secondary text-lg"
                id="resume-download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
