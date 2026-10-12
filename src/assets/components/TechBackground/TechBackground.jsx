import React, { useEffect, useRef } from 'react';
import './techBackground.css';

const TechBackground = ({ darkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particles count - balanced for maximum smoothness
    const particleCount = window.innerWidth < 768 ? 35 : 65;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.body.classList.contains('dark');
      const particleColor = isDark ? '56, 189, 248' : '32, 103, 199';
      const lineColor = isDark ? '32, 103, 199' : '56, 189, 248';

      // Draw subtle connecting lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const opacity = (1 - dist / 110) * (isDark ? 0.12 : 0.05);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${isDark ? p.alpha : p.alpha * 0.5})`;
        ctx.fill();

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`tech-background-wrapper ${darkMode ? 'dark-mode' : 'light-mode'}`} aria-hidden="true">
      {/* Deep atmospheric glow spots inspired by SYDLE */}
      <div className="ambient-glow glow-top-right"></div>
      <div className="ambient-glow glow-center-left"></div>
      <div className="ambient-glow glow-bottom-right"></div>

      {/* Subtle orbital geometry rings */}
      <div className="orbital-ring orbital-1"></div>
      <div className="orbital-ring orbital-2"></div>

      {/* Interactive / Floating particle constellation canvas */}
      <canvas ref={canvasRef} className="tech-canvas" />
    </div>
  );
};

export default TechBackground;
