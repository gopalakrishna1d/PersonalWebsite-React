import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useScroll, motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import aiAnimation from "../../public/ai.json";


function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}


export default function Home() {
  const Lottie = dynamic(() => import('lottie-react').then(mod => mod.default), { ssr: false });
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const width = useWindowWidth();
  const isDesktop = width >= 768;
  const lastScrollY = useRef(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const hero = heroRef.current;

    if (!canvas || !ctx || !hero) return

    const resizeCanvas = () => {
      canvas.width = hero.clientWidth;
      canvas.height = hero.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  
    let ripples = [];
    let lastTime = 0;

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < 30) return;
      lastTime = now;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ripples.push({ x, y, radius: 0, alpha: 0.5 });
    };
  
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
    hero.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      hero.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  

  return (
    <>
      <Head>
        <title>Gopala Krishna | Portfolio</title>
        <meta name="description" content="Personal portfolio of Gopala Krishna" />
      </Head>

        <section style={{ padding: 0, margin: 0, height: '100vh', display: 'flex', alignItems: 'center'  }}>
          <motion.section
            ref={heroRef}
            style={{
              display: 'flex',
              flexDirection: isDesktop ? 'row' : 'column',
              justifyContent: isDesktop ? 'space-between' : 'center',
              alignItems: isDesktop ? 'center' : 'center',
              width: '100%',
              height: '100%',
              position: 'relative',
              textAlign: isDesktop ? 'right' : 'center',
              color: 'white',
              padding: isDesktop ? '4rem 6rem' : '4rem 2rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0070f3 10%, #0a0f3d 90%)',
              overflow: 'hidden',
              cursor: 'pointer',
              zIndex: 1,
            }}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              pointerEvents: 'none',
              zIndex: 0,
              width: '100%',
              height: '100%',
            }}
          />
            <div className="w-full md:w-1/2 flex justify-center">
              <Lottie animationData={aiAnimation} loop={true} style={{ width: "100%", maxWidth:"1000px" }} />
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="flex items-center gap-4 justify-center mt-4">
              <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Hello World!<br />I&#39;m D. Gopala Krishna</h1>
              </div>
                <p style={{ fontSize: '1.25rem' }}>Software Developer | AI Enthusiast | Problem Solver</p>
            </div>
          </motion.section>
        </section>

        <main style={{
          width: '100%',
          flexGrow: 1,
          padding: '2rem 1rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {/* Stats */}
          <motion.section 
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              margin: '2rem 0',
              padding: '1rem',
              backgroundColor: '#fafafa',
              borderRadius: '8px',
              textAlign: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div>
              <h2 style={{fontSize: '2rem', color: '#0070f3'}}>1.5+</h2>
              <p>Years of Experience</p>
            </div>
            <div>
              <h2 style={{fontSize: '2rem', color: '#0070f3'}}>4+</h2>
              <p>Projects Completed</p>
            </div>
            <div>
              <h2 style={{fontSize: '2rem', color: '#0070f3'}}>96%</h2>
              <p>AI Model Accuracy</p>
            </div>
          </motion.section>

          {/* About Me */}
          <motion.section
            style={{
              textAlign: 'center',
              marginBottom: '3rem',
              maxWidth : '800px'
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Me</h1>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>Welcome to my corner of the digital universe!</p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>I&#39;m thrilled you&#39;ve dropped by for a visit.</p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              I managed to snag a bachelor&#39;s degree in Computer Science and Engineering. You know, the modern-day wizardry stuff.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              By day, I&#39;m a Junior Backend Developer at MATDUN Labs crafting real-world solutions with code and caffeine. By night, I build
              personal and academic AI projects blending tech and creativity.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              I could keep rambling like a caffeinated parrot, but I sense you might be craving a break. 😂
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Happy exploring, you intrepid adventurer! 🚀🔮😉
            </p>
          </motion.section>

          {/* Highlights */}
          <section style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}>
            <Link href="/projects" style={{
              color: 'black',
              textDecoration: 'none',
              flex: 1,
              minWidth: '250px',
            }}>
              <motion.div
                style={{
                  border: '1px solid #eaeaea',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.03)',
                  transition: 'transform 0.3s ease, box-shadow 0.2s ease-in-out',
                  cursor: 'pointer',
                }}
                whileHover={{ y: -8, boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>💼 Projects</h2>
                <p style={{ fontSize: '1rem', marginBottom: 0 }}>
                  Worked on AI-based services at Matdun Labs, built a Solo
                  Leveling-inspired personal tracker app, and more.
                </p>
              </motion.div>
            </Link>

            <Link href="/skills" style={{
              color: 'black',
              textDecoration: 'none',
              flex: 1,
              minWidth: '250px',
            }}>
              <motion.div
                style={{
                  border: '1px solid #eaeaea',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.03)',
                  transition: 'transform 0.3s ease, box-shadow 0.2s ease-in-out',
                  cursor: 'pointer',
                }}
                whileHover={{ y: -8, boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>🧠 Skills</h2>
                <p style={{ fontSize: '1rem', marginBottom: 0 }}>
                  Python, Django, React, PostgreSQL, REST APIs, Git, and full-stack
                  development practices.
                </p>
              </motion.div>
            </Link>

            <Link href="/hobbies" style={{
              color: 'black',
              textDecoration: 'none',
              flex: 1,
              minWidth: '250px',
            }}>
              <motion.div
                style={{
                  border: '1px solid #eaeaea',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.03)',
                  transition: 'transform 0.3s ease, box-shadow 0.2s ease-in-out',
                  cursor: 'pointer',
                }}
                whileHover={{ y: -8, boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>🎸 Personal</h2>
                <p style={{ fontSize: '1rem', marginBottom: 0 }}>
                  I love traveling, playing guitar, and diving into anime and comics.
                  Volunteered at Comic-Con twice!
                </p>
              </motion.div>
            </Link>
          </section>
        </main>
    </>
  );
}
