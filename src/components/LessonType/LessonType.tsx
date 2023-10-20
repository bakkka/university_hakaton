import React from 'react';
import styles from './LessonType.module.scss'
export const OfflineType = () => {
    return (
        <div className={styles.offline}>Лек</div>
    );
};

export const OnlineType = () => {
    return (
        <div className={styles.online}>Пр</div>
    );
};
