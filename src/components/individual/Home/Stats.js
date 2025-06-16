import React from 'react';
import styles from './Stats.module.css';

const Stats = () => {
    return (
        <div className={styles["stats-container"]}>
            <div className={styles["stat-item"]}>
                <div className={styles["stat-content"]}>
                    <div className={styles["client-satisfaction"]} aria-hidden="true"></div>
                    <h2 className={styles["stat-heading"]}>Client Satisfaction</h2>
                </div>
            </div>

            <div className={styles["stat-item"]}>
                <div className={styles["stat-content"]}>
                    <div className={styles["years"]}>
                        <div className={styles["stat-number"]}>12</div>
                    </div>
                    <h2 className={styles["stat-heading"]}>Years in the Industry</h2>
                </div>
            </div>

            <div className={styles["stat-item"]}>
                <div className={styles["stat-content"]}>
                    <div className={styles["support-stats"]}>
                        <span className={styles["stat-number"]}>24</span>
                        <span className={styles["stat-separator"]}>×</span>
                        <span className={`${styles["stat-number"]} ${styles["accent"]}`}>7</span>
                        <span className={styles["stat-separator"]}>×</span>
                        <span className={styles["stat-number"]}>365</span>
                    </div>
                    <h2 className={styles["stat-heading"]}>Support</h2>
                </div>
            </div>

            <div className={styles["stat-item"]}>
                <div className={styles["stat-content"]}>
                    <div className={styles["iso-certified"]} aria-hidden="true"></div>
                    <h2 className={styles["stat-heading"]}>ISO Certified</h2>
                </div>
            </div>
        </div>
    );
};

export default Stats;