import Head from 'next/head';
import Link from 'next/link';
import "@/styles/main.css";
import Layout from '../components/Layout';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import aiAnimation from "../../public/ai.json";


export default function Home() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const hero = heroRef.current;
  
    if (!canvas || !ctx || !hero) return;
  
    canvas.width = hero.clientWidth;
    canvas.height = hero.clientHeight;
  
    let ripples = [];
  
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ripples = ripples.filter(r => r.radius < 1000);
  
      ripples.forEach(r => {
        r.radius += 3;
        r.alpha -= 0.01;
  
        const gradient = ctx.createRadialGradient(
          r.x, r.y, r.radius * 0.8,
          r.x, r.y, r.radius
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${r.alpha * 0.1})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
  
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.fill();
      });
  
      requestAnimationFrame(draw);
    };
  
    draw();
  
    let lastTime = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < 30) return; // Limit to one ripple every 30ms
      lastTime = now;

      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ripples.push({ x, y, radius: 0, alpha: 0.5 });
    };
  
    hero.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  

  return (
    <Layout>
      <section className="hero-animation">
        <motion.section
          ref={heroRef}
          className="hero relative overflow-hidden"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <canvas ref={canvasRef} className="ripple-canvas" />

          <div className="w-full md:w-1/2 flex justify-center">
            <Lottie animationData={aiAnimation} loop={true} style={{ width: "100%", maxWidth:"1000px" }} />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="flex items-center gap-4 justify-center mt-4">
              <h1 className="text-3xl sm:text-5xl text-center font-bold leading-tight">
                Hello World! <br /> I&#39;m D. Gopala Krishna
              </h1>

              <motion.div
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 shadow-lg"
                initial={{ scale: 0, rotate: 180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
            <p>Software Developer | AI Enthusiast | Problem Solver</p>
          </div>
        </motion.section>
      </section>

      <main className="main">
        {/* Stats */}
        <motion.section
          className="stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div>
            <h2>1.5+</h2>
            <p>Years of Experience</p>
          </div>
          <div>
            <h2>4+</h2>
            <p>Projects Completed</p>
          </div>
          <div>
            <h2>96%</h2>
            <p>AI Model Accuracy</p>
          </div>
        </motion.section>

        {/* About Me */}
        <motion.section
          className="intro"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <h2>About Me</h2>
          <p>Welcome to my corner of the digital universe!</p>
          <p>I&#39;m thrilled you&#39;ve dropped by for a visit.</p>
          <p>
            I managed to snag a bachelor&#39;s degree in Computer Science and
            Engineering. You know, the modern-day wizardry stuff.
          </p>
          <p>
            By day, I&#39;m a Junior Backend Developer at MATDUN Labs crafting
            real-world solutions with code and caffeine. By night, I build
            personal and academic AI projects blending tech and creativity.
          </p>
          <p>
            I could keep rambling like a caffeinated parrot, but I sense you
            might be craving a break. 😂
          </p>
          <p>Happy exploring, you intrepid adventurer! 🚀🔮😉</p>
        </motion.section>

        {/* Highlights */}
        <section className="highlights">
          <Link href="/projects" className="card-link">
            <motion.div
              className="card"
              whileHover={{ y: -8, boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <h2>💼 Projects</h2>
              <p>
                Worked on AI-based services at Matdun Labs, built a Solo
                Leveling-inspired personal tracker app, and more.
              </p>
            </motion.div>
          </Link>

          <Link href="/skills" className="card-link">
            <motion.div
              className="card"
              whileHover={{ y: -8, boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <h2>🧠 Skills</h2>
              <p>
                Python, Django, React, PostgreSQL, REST APIs, Git, and full-stack
                development practices.
              </p>
            </motion.div>
          </Link>

          <Link href="/hobbies" className="card-link">
            <motion.div
              className="card"
              whileHover={{ y: -8, boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <h2>🎸 Personal</h2>
              <p>
                I love traveling, playing guitar, and diving into anime and comics.
                Volunteered at Comic-Con twice!
              </p>
            </motion.div>
          </Link>
        </section>
      </main>
    </Layout>
  );
}
