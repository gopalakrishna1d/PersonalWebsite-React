import Head from 'next/head';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SecurLive (2024–2025)',
    description:
      'Vision AI platform for surveillance in malls and retail. Integrated theft, fall, and weapon detection.',
    tech: 'Python, Django, OpenCV, Docker',
  },
  {
    title: 'Chabee (2023–2024)',
    description:
      'AI-powered smart door lock with facial recognition and access management.',
    tech: 'Django, PostgreSQL, Docker',
  },
  {
    title: 'Facial Expression Recognition (2023)',
    description:
      'Deep learning system using CNN, YOLO, and RNN to classify human emotions in real time.',
    tech: 'CNN, YOLO, RNN, Python',
  },
  {
    title: 'Heart Disease Prediction (2022)',
    description:
      'Django web app using ML models to predict risk of heart disease from user input.',
    tech: 'Django, Scikit-learn, Pandas',
  },
];

export default function Projects() {
  return (
    <>
      <main
        style={{
          padding: '2rem 1rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}
        >
          Projects
        </motion.h1>

        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {/* <motion.div className="project-card">
            <div className="project-header">
              <img src="/icons/securlive-icon.png" alt="icon" className="icon" />
              <h3>SecurLive (2024–2025)</h3>
            </div>
            <p>Vision AI platform for surveillance in malls and retail.</p>
            <div className="tags">
              {['Python', 'Django', 'OpenCV', 'Docker'].map(tag => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
            <div className="actions">
              <a href="#" target="_blank">GitHub</a>
              <a href="#">Live Demo</a>
            </div>
          </motion.div> */}

          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              style={{
                backgroundColor: '#ffffff',
                padding: '1.5rem',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                borderLeft: '4px solid #0070f3',
              }}
            >
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{proj.title}</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{proj.description}</p>
              <p style={{ color: '#555', fontSize: '0.95rem' }}><strong>Stack:</strong> {proj.tech}</p>
            </motion.div>
          ))}
        </section>
      </main>
    </>
  );
}
