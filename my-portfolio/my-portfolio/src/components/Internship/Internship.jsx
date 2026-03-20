import React from 'react';
import { motion } from 'framer-motion';
import styles from './Internship.module.css';
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground';

const internshipData = [
  {
    company: 'TechSaksham (Microsoft & SAP, Edunet Foundation)',
    role: 'AI & Machine Learning Intern',
    date: 'March 2025',
    certificate: '/Techsaksham_Certificate.pdf', // File placed in public folder
    responsibilities: [
      'Attended remote AI & ML training sessions.',
      'Completed module-based assignments and quizzes.',
      'Learned AI concepts, tools, and their applications.',
      'Built small projects as part of the learning program.',
      'Gained practical exposure to solving problems using AI techniques.'
    ],
  },
  {
    company: 'rProcess Outsourcing Services Pvt. Ltd.',
    role: 'Full Stack Developer Intern',
    date: 'May 2025',
    certificate: '/rTrack_Certificate.pdf',
    responsibilities: [
      'Built and improved features in rTrack using MERN stack.',
      'Implemented secure login with JWT and role-based access.',
      'Created reusable components for asset tracking and maintenance.',
      'Added exportable reports in CSV and PDF.',
      'Tested APIs with Postman and performance with JMeter.',
      'Used GitHub for version control and deployed on internal server.'
      
    ],
  },
];

const Internship = () => {
  return (
    <section className={styles.internshipSection}>
      <AnimatedBackground />
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className={styles.heading}>Internship Experience</h2>
        <div className={styles.internshipGrid}>
          {internshipData.map((internship, index) => (
            <motion.div
              key={index}
              className={styles.internshipCard}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className={styles.company}>{internship.company}</h3>
              <p className={styles.role}>{internship.role}</p>
              <span className={styles.date}>{internship.date}</span>
              <ul className={styles.responsibilities}>
                {internship.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
              {/* Certificate Link */}
              {internship.certificate && (
                <a
                  href={internship.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certificateLink}
                >
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </section>
  );
};

export default Internship;
