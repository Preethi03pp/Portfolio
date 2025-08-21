import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Certificates.module.css';
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground';

const certificatesData = [
  {
    name: 'Software Engineering and Agile Software Development',
    issuer: 'OnWingspan',
    date: 'Aug 2024',
    link: '/certificates/Infosys Agile.pdf' 
  },
  {
    name: 'TCS iON Career Edge - Young Professional',
    issuer: 'Tata Consultancy Services',
    date: 'Jun 2024',
    link: '/certificates/TCSion.pdf'
  },
  {
    name: 'Java Programming for Beginners',
    issuer: 'NPTEL / Online Platform',
    date: 'Aug 2025',
    link: '/certificates/Java.pdf'
  }
];



const Certificates = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(`.${styles.certificateCard}`);
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = -(y - centerY) / 20;
        const rotateY = (x - centerX) / 20;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', () => {
        const cards = document.querySelectorAll(`.${styles.certificateCard}`);
        cards.forEach((card) => {
          card.style.transform = `rotateX(0deg) rotateY(0deg)`;
        });
      });
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <motion.section
      ref={containerRef}
      id="certificates"
      className={styles.certificatesSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <AnimatedBackground />

      <div className={styles.certificatesContainer}>
        <h2 className={styles.heading}>Certificates</h2>

        <div className={styles.certificatesGrid}>
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              className={styles.certificateCard}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className={styles.certificateName}>{cert.name}</h3>
              <p className={styles.certificateIssuer}>{cert.issuer}</p>
              <span className={styles.certificateDate}>{cert.date}</span>
  
            <a 
              href={cert.link} 
              className={styles.viewButton} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certificates;
