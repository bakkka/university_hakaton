import React, {FC, useEffect, useState} from 'react';
import styles from "./ProgressBar.module.scss";
import User from "../../API's/User";
import Courses from "../../API's/Courses";

interface props{
    title:string;
    type:string;
}
const ProgressBar:FC<props> = ({title,type}) => {
    const [progress, setProgress] =useState<number>();
    useEffect( () => {
        if(type === 'course') {
            (async () => {
                const response = await Courses.getProgress(title)
                setProgress(response.data)
            })();
        }
    }, []);
    return (
        <div className={styles.progress}>
            <div style={{
                background: `linear-gradient(to right, #4CAF50 ${progress}%, #ECEFF1 50%)`,
            }} className={styles.progress_bar}></div>
            <p className={styles.progress_percentage}>{type === 'course' ? `${progress}` : null}</p>
        </div>
    );
};

export default ProgressBar;