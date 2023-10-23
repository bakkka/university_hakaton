import React, {FC} from 'react';
import styles from './LessonComponent.module.scss'
import {OfflineType, OnlineType} from "../LessonType/LessonType";

interface props{
    time_start:string;
    height?:number | 50;
    time_end:string;
    lesson_name:string;
    teacher_name:string;
    active?:boolean | false
    type?:string;
    page?:'schedule' | 'attendance'
    onClick?: () => void;
}
const LessonComponent:FC<props> = ({time_start,height,page,active,time_end,lesson_name,teacher_name,type}) => {
    return (
        <div style={{background: active ? '#ECEFF1' : '', height: height}} className={styles.lesson}>
            <div style={{padding: page === 'attendance' ? '12px' : ''}} className={styles.lesson_content}>
                <div className={styles.time}>
                    <p className={styles.time_start}>{time_start}</p>
                    <p className={styles.time_end}>{time_end}</p>
                </div>
                <div className={styles.main}>
                    <p className={styles.main_name}>{lesson_name}</p>
                    <p className={styles.main_teacher}>{teacher_name}</p>
                </div>
                {type === 'Лек' ? (
                    <OfflineType></OfflineType>
                ) : type === 'Пр' ? (
                    <OnlineType></OnlineType>
                ) : (
                    <OnlineType></OnlineType>
                )}
            </div>
        </div>
    );
};

export default LessonComponent;