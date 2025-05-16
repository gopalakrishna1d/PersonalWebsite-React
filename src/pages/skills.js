import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaTools, FaLanguage, FaPalette, FaLaptopCode, FaUsers } from 'react-icons/fa';

const skillsData = [
  {
    category: 'Programming Languages',
    icon: <FaCode />,
    skills: ['Python', 'Java', 'JavaScript', 'C++', 'C', 'C#'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: <FaLaptopCode />,
    skills: ['Django', 'Flask', 'Express', 'ReactJS', 'Node.js'],
  },
  {
    category: 'AI / ML',
    icon: <FaBrain />,
    skills: ['TensorFlow', 'Keras', 'OpenCV', 'scikit-learn', 'YOLO'],
  },
  {
    category: 'Databases',
    icon: <FaTools />,
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    category: 'Tools & Platforms',
    icon: <FaTools />,
    skills: ['Docker', 'Git', 'GitHub', 'Postman', 'Linux', 'Jupyter'],
  },
  {
    category: 'Creative Tools',
    icon: <FaPalette />,
    skills: ['Blender', 'Krita', 'Adobe Photoshop', 'Premiere Pro'],
  },
  {
    category: 'Soft Skills',
    icon: <FaUsers />,
    skills: ['Team collaboration', 'Communication', 'Problem-solving', 'Adaptability'],
  },
  {
    category: 'Spoken Languages',
    icon: <FaLanguage />,
    skills: ['English (Fluent)', 'Telugu (Native)', 'Hindi (Proficient)', 'Japanese (Beginner)'],
  },
];

export default function Skills() {
  return (
    <>
      <Head>
        <title>Gopala Krishna | Portfolio</title>
        <meta name="description" content="Skills of Gopala Krishna" />
      </Head>

      <main style={{ padding: '2rem 1rem', maxWidth: '1000px', margin: '0 auto' }}>
        <motion.h1
          style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillsData.map((section, index) => (
            <motion.div
              key={index}
              style={{
                padding: '1.5rem',
                background: '#fff',
                border: '1px solid #eaeaea',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 style={{ display: 'flex', alignItems: 'center', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                <span style={{ marginRight: '0.5rem', color: '#0070f3' }}>{section.icon}</span>
                {section.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {section.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '0.3rem 0.75rem',
                      backgroundColor: '#f0f0f0',
                      borderRadius: '999px',
                      fontSize: '0.9rem',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
