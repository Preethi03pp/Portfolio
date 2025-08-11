import React from 'react';
import { motion } from 'framer-motion';
import styles from './Resume.module.css';
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground'; // ✅ Import background

const Resume = () => {
  return (
    <section className={styles.resumeSection}>
      <AnimatedBackground /> {/* ✅ Add this for background only */}

      <motion.div
        className={styles.resumeContainer}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.resumeTitle}>My Resume</h2>

        <div className={styles.flexContainer}>
          {/* Resume content on left */}
          <div className={styles.resumeContent}>
            <p>You can download my resume by clicking the button below.</p>
            <a href="/Resume.pdf" download className={styles.downloadBtn}>
              Download Resume
            </a>
          </div>

          {/* Animated character on right */}
          <motion.img
            src="resume.png"
            alt="Resume"
            className={styles.characterImage}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
