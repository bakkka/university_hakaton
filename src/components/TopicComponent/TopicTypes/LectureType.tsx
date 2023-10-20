import React, {FC} from 'react';
import styles from "./TopicTypes.module.scss";

const LectureType:FC = () => {
    return (
        <div className={styles.block}>
            <div className={styles.header}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 4V16L12 14L8 16V4H16ZM6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20Z" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Конспект лекции по теме 5</p>
            </div>
            <div className={styles.information}>
                <div className={styles.information_block}>
                    <p className={styles.block_deadline}>Какая-то дополнительная информация</p>
                </div>
            </div>
        </div>
    );
};

export default LectureType;