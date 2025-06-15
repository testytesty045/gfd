import React from "react";
import styles from "./UseCasesSection.module.css";

const UseCasesSection = ({ title, useCases }) => {
  // Determine grid class based on number of use cases
  const gridClass = useCases.length === 2 
    ? `${styles.useCasesGrid} ${styles.twoCards}` 
    : styles.useCasesGrid;

  return (
    <section className={styles.useCasesSection}>
      <div className="container">
        <h2 className={`section-title ${styles.sectionTitle}`}>
          <span>{title}</span>
        </h2>
        <div className={gridClass}>
          {useCases.map((useCase, index) => (
            <div className={styles.useCaseCard} key={index}>
              <div className={styles.cardHeader}>
                <h3 className={styles.challengeTitle}>{useCase.challengeTitle || "Challenge"}</h3>
                <p className={styles.challenge}>{useCase.challenge}</p>
              </div>

              <div className={styles.cardContent}>
                {useCase.scope && (
                  <div className={styles.section}>
                    <h3 className={styles.scopeTitle}>{useCase.scopeTitle || "Scope"}</h3>
                    <p className={styles.scope}>{useCase.scope}</p>
                  </div>
                )}

                {useCase.assessment && (
                  <div className={styles.section}>
                    <h3 className={styles.assessmentTitle}>{useCase.assessmentTitle || "Assessment"}</h3>
                    <p className={styles.assessment}>{useCase.assessment}</p>
                  </div>
                )}

                {useCase.penetration && (
                  <div className={styles.section}>
                    <h3 className={styles.penetrationTitle}>{useCase.penetrationTitle || "Penetration"}</h3>
                    <p className={styles.penetration}>{useCase.penetration}</p>
                  </div>
                )}

                <div className={styles.section}>
                  <h3 className={styles.solutionTitle}>{useCase.solutionTitle || "DG FutureTech Solution"}</h3>
                  <p className={styles.solution}>{useCase.solution}</p>
                </div>

                {useCase.resultsDelivered && (
                  <div className={styles.section}>
                    <h3 className={styles.resultsDeliveredTitle}>{useCase.resultsDeliveredTitle || "Results Delivered"}</h3>
                    <p className={styles.resultsDelivered}>{useCase.resultsDelivered}</p>
                  </div>
                )}

                {useCase.benefits && (
                  <div className={styles.section}>
                    <h3 className={styles.benefitsTitle}>{useCase.benefitsTitle || "Benefits"}</h3>
                    <p className={styles.benefits}>{useCase.benefits}</p>
                  </div>
                )}

                {useCase.issuesFound && (
                  <div className={styles.section}>
                    <h3 className={styles.issuesFoundTitle}>{useCase.issuesFoundTitle || "Issues Found"}</h3>
                    <p className={styles.issuesFound}>{useCase.issuesFound}</p>
                  </div>
                )}
                
                {useCase.fixesImplemented && (
                  <div className={styles.section}>
                    <h3 className={styles.fixesImplementedTitle}>{useCase.fixesImplementedTitle || "Fixes Implemented"}</h3>
                    <p className={styles.fixesImplemented}>{useCase.fixesImplemented}</p>
                  </div>
                )}
                
                {useCase.outcome && (
                  <div className={styles.section}>
                    <h3 className={styles.outcomeTitle}>{useCase.outcomeTitle || "Outcome"}</h3>
                    <p className={styles.outcome}>{useCase.outcome}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection; 