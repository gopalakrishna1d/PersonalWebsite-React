// components/HighlightCard.js
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HighlightCard = ({ href, title, emoji, description }) => {
  return (
    <Link href={href} style={{
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
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{emoji} {title}</h2>
        <p style={{ fontSize: '1rem', marginBottom: 0 }}>{description}</p>
      </motion.div>
    </Link>
  );
};

export default HighlightCard;
