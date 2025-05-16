import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experienceData = [
  {
    role: 'Junior Backend Developer',
    company: 'MATDUN Labs',
    duration: 'Nov 2023 – Present',
    points: [
      'Built backend systems for Chabee and SecurLive with Django and PostgreSQL.',
      'Designed APIs with secure authentication and role-based access control.',
      'Collaborated in Agile teams with AI developers and product managers.',
      'Improved server response times through performance tuning and debugging.',
    ],
  },
  {
    role: 'Backend Developer Intern',
    company: 'MATDUN Labs',
    duration: 'Feb 2023 – Nov 2023',
    points: [
      'Assisted in database design, API integration, and backend optimization.',
      'Contributed to documentation and participated in code reviews.',
    ],
  },
];

const educationData = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'JNTU',
    year: '2019–2023',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'TS Board',
    year: '2017–2019',
  },
  {
    degree: 'SSC',
    institution: 'TS SSC Board',
    year: '2017',
  },
];

export default function CareerTimeline() {
  return (
    <>
      <Head>
        <title>Gopala Krishna | Career Timeline</title>
        <meta name="description" content="Career history and academic background of Gopala Krishna" />
      </Head>

      <main
        style={{
          padding: '3rem 1rem',
          maxWidth: '960px',
          margin: '0 auto',
          fontFamily: 'Segoe UI, sans-serif',
          background: '#f9fafb',
        }}
      >
        <motion.h1
          style={{ fontSize: '2.7rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📈 Career Timeline
        </motion.h1>

        <section>
          <motion.h2
            style={{
              fontSize: '2rem',
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem',
              color: '#1f2937',
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FaBriefcase style={{ marginRight: '0.6rem', color: '#2563eb' }} />
            Work Experience
          </motion.h2>

          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              style={{
                marginBottom: '2rem',
                padding: '1.5rem',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.4rem' }}>
                {item.role} – <span style={{ fontWeight: 400 }}>{item.company}</span>
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.75rem' }}>{item.duration}</p>
              <ul style={{ paddingLeft: '1.2rem', listStyle: 'disc' }}>
                {item.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: '0.4rem', fontSize: '0.95rem', color: '#374151' }}>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>

        <motion.h2
          style={{
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            margin: '3rem 0 1.5rem',
            color: '#1f2937',
          }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FaGraduationCap style={{ marginRight: '0.6rem', color: '#10b981' }} />
          Education
        </motion.h2>

        <section>
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              style={{
                marginBottom: '1.4rem',
                padding: '1rem 1.25rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e0e0e0',
                borderRadius: '10px',
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <strong style={{ display: 'block', fontSize: '1.05rem', marginBottom: '0.3rem' }}>
                {item.degree}
              </strong>
              <span style={{ color: '#374151', fontSize: '0.95rem' }}>{item.institution}</span>
              <br />
              <span style={{ color: '#6b7280', fontSize: '0.85rem' }}>{item.year}</span>
            </motion.div>
          ))}
        </section>
      </main>
    </>
  );
}
