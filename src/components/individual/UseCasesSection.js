import React from 'react';
import UseCaseCard from './UseCaseCard';
import styles from '../styles/useCasesSection.module.css';

const UseCasesSection = ({ title, description, useCases, solutionTitle }) => {
  return (
    <section className={styles.useCasesSection}>
      <div className={styles.containerCustom}>
        <div className={styles.useCasesHeader}>
          <div className={styles.useCasesLabel}>Real World Examples</div>
          <h2 className={styles.useCasesTitle}>{title || 'Use Cases'}</h2>
          <p className={styles.useCasesDescription}>
            {description || 'See how our services have helped businesses overcome their challenges.'}
          </p>
        </div>

        <div className={styles.useCasesGrid}>
          {useCases.map((useCase, index) => (
            <UseCaseCard 
              key={index}
              title={useCase.title}
              challenge={useCase.challenge} 
              solutions={useCase.solutions}
              solutionTitle={useCase.solutionTitle || solutionTitle} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection; 