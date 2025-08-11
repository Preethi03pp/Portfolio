import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // You can add logic here for sticky header or other scroll effects
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="#hero-section">My Portfolio</a>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <ul className={styles.navList}>
          <li><a href="#about-section" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills-section" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#projects-section" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#education-section" onClick={toggleMenu}>Education</a></li>
          <li><a href="#certificates-section" onClick={toggleMenu}>Certificates</a></li>
          <li><a href="#internship-section" onClick={toggleMenu}>Internship</a></li>
          <li><a href="#contact-section" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </header>
  );
};

export default Header;