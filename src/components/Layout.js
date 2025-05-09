import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollProgress from './ScrollProgress';
import { useEffect, useState } from "react";

export default function Layout({ children, title = 'Gopala Krishna | Portfolio' }) {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowNavbar(scrollTop > 100); // Show navbar only after 100px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Personal portfolio of Gopala Krishna" />
      </Head>

      <ScrollProgress />

      <motion.header
        className="header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${showNavbar ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/hobbies">Hobbies</Link>
        </nav>
      </motion.header>

      <main className="pt-20 min-h-screen w-full">{children}</main>
    </>
  );
}
