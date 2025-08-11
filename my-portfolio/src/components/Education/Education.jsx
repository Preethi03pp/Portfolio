import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Education.module.css';
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground';

const educationData = [
  {
    institution: "St. Philomena's College Mysore",
    degree: 'Master of Computer Application',
    date: '2023 - 2025',
    description: 'Completed a four-year program focusing on software development, data structures, and algorithms. Achieved a GPA of 3.8/4.0.',
  },
  {
    institution: 'JSS SMI UG and PG Studies Dharwad',
    degree: 'Bachelor of Computer Application',
    date: '2020 - 2023',
    description: 'Graduated with honors, participating in various clubs and extracurricular activities.',
  },
  {
    institution: 'Science Academy College Davanagere',
    degree: 'PUC',
    date: '2018 - 2020',
    description: 'Graduated with honors, participating in various clubs and extracurricular activities.',
  },
  {
    institution: 'Sri Siddaganga Composite School Davanagere',
    degree: 'SSLC',
    date: '2017 - 2018',
    description: 'Graduated with honors, participating in various clubs and extracurricular activities.',
  },
];

const Education = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="education" className={styles.educationSection}>
      <AnimatedBackground />
      <div className={styles.educationContainer}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Education 🎓
        </motion.h2>

        <div className={styles.timeline} ref={timelineRef}>
          <motion.div 
            className={styles.timelinePath} 
            style={{ height: timelineHeight }}
          ></motion.div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.right : styles.left}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className={styles.timelineContent}>
                <h3 className={styles.institution}>{edu.institution}</h3>
                <p className={styles.degree}>{edu.degree}</p>
                <span className={styles.date}>{edu.date}</span>
                <p className={styles.description}>{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
