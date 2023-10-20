import React, {FC, useState} from 'react';
import styles from "./ProgressComponent.module.scss";
import SearchBarComponent from "../SearchBarComponent/SearchBarComponent";

interface props {
    maxHeight: number;
    type: 'course' | 'attendance';
}
const ProgressComponent:FC<props> = ({maxHeight, type}) => {
    const [active, setActive] = useState(0)
    return (
        <div className={styles.progress}>
            <div className={styles.progress_content}>
                <div className={styles.search}>
                    <SearchBarComponent></SearchBarComponent>
                </div>
                <div style={{maxHeight:maxHeight}} className={styles.progress_main}>
                    <div onClick={() => setActive(1)} className={`${styles.lesson} ${active === 1 ? styles.active : ''}`}>
                        <p className={styles.lesson_name}>Машинное обучение</p>
                        <div className={styles.lesson_progress}>
                            <div className={styles.progress_bar}></div>
                            <p className={styles.progress_percentage}>{type === 'attendance' ? '6/17' : '50%'}</p>
                        </div>
                    </div>
                    <div onClick={() => setActive(2)} className={`${styles.lesson} ${active === 2 ? styles.active : ''}`}>
                        <p className={styles.lesson_name}>Машинное обучение</p>
                        <div className={styles.lesson_progress}>
                            <div className={styles.progress_bar}></div>
                            <p className={styles.progress_percentage}>{type === 'attendance' ? '6/17' : '50%'}</p>
                        </div>
                    </div>
                    <div onClick={() => setActive(3)} className={`${styles.lesson} ${active === 3 ? styles.active : ''}`}>
                        <p className={styles.lesson_name}>Машинное обучение</p>
                        <div className={styles.lesson_progress}>
                            <div className={styles.progress_bar}></div>
                            <p className={styles.progress_percentage}>{type === 'attendance' ? '6/17' : '50%'}</p>
                        </div>
                    </div>
                    <div onClick={() => setActive(4)} className={`${styles.lesson} ${active === 4 ? styles.active : ''}`}>
                        <p className={styles.lesson_name}>Машинное обучение</p>
                        <div className={styles.lesson_progress}>
                            <div className={styles.progress_bar}></div>
                            <p className={styles.progress_percentage}>{type === 'attendance' ? '6/17' : '50%'}</p>
                        </div>
                    </div>
                    <div onClick={() => setActive(5)} className={`${styles.lesson} ${active === 5 ? styles.active : ''}`}>
                        <p className={styles.lesson_name}>Машинное обучение</p>
                        <div className={styles.lesson_progress}>
                            <div className={styles.progress_bar}></div>
                            <p className={styles.progress_percentage}>{type === 'attendance' ? '6/17' : '50%'}</p>
                        </div>
                    </div>
                    <div onClick={() => setActive(6)} className={`${styles.lesson} ${active === 6 ? styles.active : ''}`}>
                        <p className={styles.lesson_name}>Машинное обучение</p>
                        <div className={styles.lesson_progress}>
                            <div className={styles.progress_bar}></div>
                            <p className={styles.progress_percentage}>{type === 'attendance' ? '6/17' : '50%'}</p>
                        </div>
                    </div>
                    <div onClick={() => setActive(7)} className={`${styles.lesson} ${active === 7 ? styles.active : ''}`}>
                        <p className={styles.lesson_name}>Машинное обучение</p>
                        <div className={styles.lesson_progress}>
                            <div className={styles.progress_bar}></div>
                            <p className={styles.progress_percentage}>{type === 'attendance' ? '6/17' : '50%'}</p>
                        </div>
                    </div>
                    <div onClick={() => setActive(8)} className={`${styles.lesson} ${active === 8 ? styles.active : ''}`}>
                        <p className={styles.lesson_name}>Машинное обучение</p>
                        <div className={styles.lesson_progress}>
                            <div className={styles.progress_bar}></div>
                            <p className={styles.progress_percentage}>{type === 'attendance' ? '6/17' : '50%'}</p>
                        </div>
                    </div>
                    <div onClick={() => setActive(9)} className={`${styles.lesson} ${active === 9 ? styles.active : ''}`}>
                        <p className={styles.lesson_name}>Машинное обучение</p>
                        <div className={styles.lesson_progress}>
                            <div className={styles.progress_bar}></div>
                            <p className={styles.progress_percentage}>{type === 'attendance' ? '6/17' : '50%'}</p>
                        </div>
                    </div>
                    <div onClick={() => setActive(10)} className={`${styles.lesson} ${active === 10 ? styles.active : ''}`}>
                        <p className={styles.lesson_name}>Машинное обучение</p>
                        <div className={styles.lesson_progress}>
                            <div className={styles.progress_bar}></div>
                            <p className={styles.progress_percentage}>{type === 'attendance' ? '6/17' : '50%'}</p>
                        </div>
                    </div>
                    <div onClick={() => setActive(11)} className={`${styles.lesson} ${active === 11 ? styles.active : ''}`}>
                        <p className={styles.lesson_name}>Машинное обучение</p>
                        <div className={styles.lesson_progress}>
                            <div className={styles.progress_bar}></div>
                            <p className={styles.progress_percentage}>{type === 'attendance' ? '6/17' : '50%'}</p>
                        </div>
                    </div>
                    <div onClick={() => setActive(12)} className={`${styles.lesson} ${active === 12 ? styles.active : ''}`}>
                        <p className={styles.lesson_name}>Машинное обучение</p>
                        <div className={styles.lesson_progress}>
                            <div className={styles.progress_bar}></div>
                            <p className={styles.progress_percentage}>{type === 'attendance' ? '6/17' : '50%'}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProgressComponent;