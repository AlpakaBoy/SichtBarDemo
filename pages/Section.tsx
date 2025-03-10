// src/components/Section.tsx

import React from 'react';

interface SectionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Section: React.FC<SectionProps> = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>{description}</p>
      <button style={styles.button} onClick={onButtonClick}>
        {buttonText}
      </button>
    </section>
  );
};

const styles = {
  section: {
    padding: '20px',
    textAlign: 'center' as 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    margin: '20px 0',
  },
  title: {
    fontSize: '24px',
    color: '#333',
  },
  description: {
    fontSize: '16px',
    color: '#666',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Section;
