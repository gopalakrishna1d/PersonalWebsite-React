import Head from 'next/head';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

import CanvasRipple from '../components/CanvasRipple';
import LottiePlayer from '../components/LottiePlayer';
import HighlightCard from '../components/HighlightsCard';
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
  const heroRef = useRef(null);
  const width = useWindowWidth();
  const isDesktop = width >= 768;

  const MemoizedLottie = useMemo(() => (
    <LottiePlayer animationData={aiAnimation} style={{ width: '100%', height: '100%' }} />
  ), []);

  
  return (
    <>
      <Head>
        <title>Gopala Krishna | Portfolio</title>
        <meta name="description" content="Personal portfolio of Gopala Krishna" />
        <link rel="preload" href="/ai.json" as="fetch" crossOrigin="anonymous" />
      </Head>

        <section style={{ padding: 0, margin: 0, height: '100vh', display: 'flex', alignItems: 'center'  }}>
          <motion.section
            ref={heroRef}
            style={{
              display: 'flex',
              flexDirection: isDesktop ? 'row' : 'column',
              justifyContent: isDesktop ? 'space-between' : 'center',
              alignItems: 'center',
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
          <CanvasRipple containerRef={heroRef} />

            <div style={{ width: '500px', height: '500px' }}>
              {MemoizedLottie}
            </div>
            
            <div>
              <div> <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Hello World!<br />I&#39;m D. Gopala Krishna</h1></div>
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
              backgroundColor: 'white',
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
          <section style={{ marginTop: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <HighlightCard
                href="/projects"
                title="Projects"
                emoji="💼"
                description="Worked on AI-based services at Matdun Labs, built a Solo Leveling-inspired personal tracker app, and more."
              />
              <HighlightCard
                href="/skills"
                title="Skills"
                emoji="🧠"
                description="Python, Django, React, PostgreSQL, REST APIs, Git, and full-stack development practices."
              />
              <HighlightCard
                href="/hobbies"
                title="Personal"
                emoji="🎸"
                description="I love traveling, playing guitar, and diving into anime and comics. Volunteered at Comic-Con twice!"
              />
            </div>
          </section>
        </main>
    </>
  );
}
