import React from 'react';
import styles from '../styles/useCaseCard.module.css';

const UseCaseCard = ({ title, challenge, solutions, solutionTitle = "DG FutureTech's Solution" }) => {
  return (
    <div className={styles.useCaseCard}>
      <div className={styles.useCaseHeader}>
        {title && <h3 className={styles.useCaseClientTitle}>{title}</h3>}
        <h3 className={styles.useCaseTitle}>The Challenge</h3>
        <p className={styles.useCaseProblem}>{challenge}</p>
      </div>
      <div className={styles.useCaseBody}>
        <h3 className={styles.useCaseSolutionTitle}>
          {solutionTitle}
        </h3>
        <ul className={styles.useCaseSolutionList}>
          {solutions.map((solution, index) => (
            <li key={index} className={styles.useCaseSolutionItem}>
              <div className={styles.useCaseSolutionIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14l3 3 6-6"></path>
                </svg>
              </div>
              <p className={styles.useCaseSolutionText}>{solution}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseCaseCard; 