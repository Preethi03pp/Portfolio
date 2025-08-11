import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>&copy; 2025 Preethi P Palankar. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;