import "@/styles/main.css";
import Link from 'next/link';
import { FaEnvelope, FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";
import { useScroll, motion } from 'framer-motion';

// Scroll Progress Bar Component
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '4px',
        background: '#0070f3',
        width: '100%',
        transformOrigin: 'left',
        zIndex: 100,
        scaleX: scrollYProgress,
      }}
    />
  );
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ScrollProgressBar />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <nav
          style={{
            width: '100%',
            backgroundColor: '#fff',
            padding: '1rem 2rem',
            borderBottom: '1px solid #eaeaea',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            fontWeight: 500,
          }}
        >
          {['Home', 'Projects', 'Skills', 'Career Timeline', 'Hobbies'].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase() === 'home' ? '' : label.toLowerCase().replace(/\s/g, '-')}`}
              style={{ color: '#0070f3', textDecoration: 'none' }}
              className="nav-link"
              onMouseEnter={(e) => (e.target.style.color = 'blue')}
              onMouseLeave={(e) => (e.target.style.color = '#0070f3')}
            >
              {label}
            </Link>
          ))}
        </nav>
      </motion.header>

      <div>
        <Component {...pageProps} />
      </div>

      <footer
        style={{
          textAlign: 'center',
          padding: '1.5rem',
          borderTop: '1px solid #eee',
          fontSize: '0.9rem',
          backgroundColor: '#fff',
        }}
      >
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '0.5rem' }}>
          <a href="mailto:gopalakrishna.1d@gmail.com" style={{ color: 'red' }} title="Email">
            <FaEnvelope size={30} />
          </a>
          <a href="https://linkedin.com/in/gopala-krishna-d" target="_blank" style={{ color: 'blue' }} title="LinkedIn">
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitter.com/g0pa1kr1shna" target="_blank" style={{ color: 'black' }} title="X">
            <FaXTwitter size={30} />
          </a>
          <a href="https://github.com/gopalakrishna1d" target="_blank" style={{ color: 'black' }} title="GitHub">
            <FaGithub size={30} />
          </a>
        </nav>
        <p>© 2025 Gopala Krishna. All Rights Reserved.</p>
      </footer>
    </>
  );
}
