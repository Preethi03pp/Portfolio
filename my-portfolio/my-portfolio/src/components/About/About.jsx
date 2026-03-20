import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground'; // ✅ adjust the path based on your project

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <AnimatedBackground />
      <div className={styles.aboutContainer}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me 👋
        </motion.h2>

        <div className={styles.aboutContentWrapper}>
          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src="/about.png"
              alt="About"
              className={styles.profileImage}
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <motion.div
            className={styles.aboutCard}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I’m a passionate and detail-oriented software developer with hands-on experience in building scalable web applications and AI-powered solutions. 
              </p><p>I enjoy solving real-world problems through clean code, innovative features, and user-friendly design.</p>
               <p>My expertise spans modern technologies like React, Spring Boot, Flask, and AWS, and I thrive in collaborative environments where learning and innovation go hand in hand.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
