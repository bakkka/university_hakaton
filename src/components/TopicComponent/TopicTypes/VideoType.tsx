import React, {FC} from 'react';
import styles from "./TopicTypes.module.scss";

interface props {
    onClick: () => void;
}
const VideoType:FC<props> = () => {
    return (
        <div className={styles.block}>
            <div className={styles.header}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 13V12M12 13V10M16 13V8M8 21L12 17L16 21M3 4H21M4 4H20V16C20 16.2652 19.8946 16.5196 19.7071 16.7071C19.5196 16.8946 19.2652 17 19 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16V4Z" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Лекция по теме 5</p>
            </div>
            <div className={styles.information}>
                <div className={styles.information_block}>
                    <p className={styles.block_deadline}>Какая-то дополнительная информация</p>
                </div>
            </div>
        </div>
    );
};

export default VideoType;