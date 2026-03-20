import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const canvasRef = useRef(null);

  // Animation logic for the particle network background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = [];
    const particleCount = 30;
    const maxDistance = 90;
    const lineColor = 'rgba(128, 128, 128, 0.5)';
    const particleColor = 'rgba(0, 0, 0, 0.7)';

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.radius = 2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width || this.x < 0) this.speedX *= -1;
        if (this.y > height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
        ctx.closePath();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.2;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      drawLines();
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <motion.section 
      className={styles.heroSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <canvas ref={canvasRef} className={styles.canvas}></canvas>
      <div className={styles.heroContent}>
        <motion.p
          className={styles.greeting}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Hey !
        </motion.p>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm Preethi P Palankar
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
         Aspiring Software Engineer
        </motion.p>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Passionate about building full-stack applications and eager to contribute to real-world projects
        </motion.p>

        <motion.div
          className={styles.socialLinks}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.8 }}
        >
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
        </motion.div>

      </div>

      <div className={styles.heroIllustration}>
        <img src="hero.png" alt="Hero Illustration" />
      </div>
    </motion.section>
  );
};

export default Hero;
