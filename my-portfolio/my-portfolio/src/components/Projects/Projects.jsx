import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground'; // ✅ Import your reusable background

const projectsData = [
  {
    title: 'Eventify',
    description: 'Smart event scheduling and management platform with RSVP and email integration.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/Preethi03pp/Eventify',
    demoLink: 'https://event-demo.example.com',
  },
  
  {
    title: 'Air_Notate',
    description: 'An AI-powered hand gesture writing interface that enables users to write in the air using just their hands and a webcam.',
    techStack: ['Python', 'Pandas', 'Matplotlib'],
    githubLink: 'https://github.com/Preethi03pp/Air_Notate',
    demoLink: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio site built with React, featuring animations and dark mode.',
    techStack: ['React', 'Framer Motion', 'CSS Modules'],
    githubLink: 'https://github.com/your-username/portfolio',
    demoLink: 'https://yourname.dev',
  },
];

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(`.${styles.projectCard}`);
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      });
    };

    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <motion.section 
      ref={containerRef}
      className={styles.projectsSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <AnimatedBackground /> 

      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            className={styles.projectCard}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.techStack}>
              {project.techStack.map((tech, i) => (
                <span key={i} className={styles.techBadge}>{tech}</span>
              ))}
            </div>
            <div className={styles.projectLinks}>
              <a href={project.githubLink} className={styles.linkButton} target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
              
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
