import React, {FC} from 'react';
import styles from './TopicComponent.module.scss'
import TestType from "./TopicTypes/TestType";
import VideoType from "./TopicTypes/VideoType";
import LectureType from "./TopicTypes/LectureType";
import HometaskType from "./TopicTypes/HometaskType";

interface props{
    type?:'topic' | 'description'
}
const TopicComponent:FC<props> = ({type}) => {
    return (
        <>
            {type === 'description' ? (
                <div className={styles.description_container}>
                    <div className={styles.description_content}>
                        <div className={styles.article}>
                            <p>Описание курса</p>
                        </div>
                        <div className={styles.main}>
                            <p>Какая-то информация о курсе, введение в дисциплину и так далее</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.article}>
                            <p>Тема 1 : Архитектура цифровой экономики и инфокоммуникаций</p>
                        </div>
                        <div className={styles.content_list}>
                            <TestType></TestType>
                            <VideoType></VideoType>
                            <LectureType></LectureType>
                            <HometaskType></HometaskType>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TopicComponent;