import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaGuitar, FaPlane, FaDumbbell, FaPaintBrush, FaBookOpen } from 'react-icons/fa';

const hobbies = [
  {
    icon: <FaGuitar style={{ color: '#ec4899', fontSize: '1.8rem' }} />,
    title: 'Playing Guitar',
    description: 'I enjoy composing and learning songs during my downtime.',
  },
  {
    icon: <FaPlane style={{ color: '#0ea5e9', fontSize: '1.8rem' }} />,
    title: 'Traveling',
    description: 'Visiting new places broadens my perspective and refreshes creativity.',
  },
  {
    icon: <FaPaintBrush style={{ color: '#facc15', fontSize: '1.8rem' }} />,
    title: 'Creative Tools',
    description: 'I explore 3D modeling and design using Blender, Krita, and Adobe tools.',
  },
  {
    icon: <FaBookOpen style={{ color: '#a78bfa', fontSize: '1.8rem' }} />,
    title: 'Anime & Comics',
    description: 'Enthusiastic fan who has volunteered twice at Comic-Con.',
  },
  {
    icon: <FaDumbbell style={{ color: '#34d399', fontSize: '1.8rem' }} />,
    title: 'Fitness',
    description: 'I train regularly and stay focused on strength and nutrition.',
  },
];

export default function Hobbies() {
  return (
    <>
      <Head>
        <title>Gopala Krishna | Hobbies</title>
        <meta name="description" content="Personal interests and hobbies of Gopala Krishna" />
      </Head>

      <main
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)',
          padding: '3rem 1rem',
          fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h1
            style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2.5rem', color: '#111827' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            🎯 My Hobbies & Interests
          </motion.h1>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
              padding: '0 1rem',
            }}
          >
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  textAlign: 'left',
                  transition: 'transform 0.2s ease',
                }}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div>{hobby.icon}</div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem' }}>{hobby.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#4b5563' }}>{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
