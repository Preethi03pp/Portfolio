import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground';
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_u5a30xb',     // Service ID
        'template_2gs5sdl',    // Template ID
        form.current, 
        'ZbJYRndnjKhWGJtGs'    // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
        }
      );
  };

  return (
    <section className={styles.contactSection} id="contact">
      <AnimatedBackground />

      <motion.div
        className={styles.contactCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.heading}>Contact Me</h2>
        <div className={styles.contactContent}>
          <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
            <input type="text" name="name" placeholder="Your Name" className={styles.inputField} required />
            <input type="email" name="email" placeholder="Your Email" className={styles.inputField} required />
            <textarea name="message" placeholder="Your Message" rows="5" className={styles.textareaField} required></textarea>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>

          <div className={styles.socialIcons}>
            <motion.a href="https://github.com/Preethi03pp" whileHover={{ scale: 1.1 }} target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF"
                alt="GitHub"
                style={{ width: '32px', height: '32px' }}
              />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/preethi-p-palankar-03a082k2/" whileHover={{ scale: 1.1 }} target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                style={{ width: '32px', height: '32px' }}
              />
            </motion.a>
            <motion.a href="mailto:preethippalankar@gmail.com" whileHover={{ scale: 1.1 }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Email"
                style={{ width: '32px', height: '32px' }}
              />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
