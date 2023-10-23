import React, {FC, useEffect, useState} from 'react';
import styles from "./ProgressComponent.module.scss";
import SearchBarComponent from "../SearchBarComponent/SearchBarComponent";
import {useAppDispatch, useTypedSelector} from "../../hooks/redux";
import {fetchCourse} from "../../store/reducers/ActionCreator";
import ProgressBar from "../ProgressBar/ProgressBar";
import {course} from "../../types/CoursesResponse";
import {setActiveLesson} from "../../store/reducers/CourseSlice";
import {ILessons} from "../../types/UserResponse";

interface props {
    maxHeight: number;
    type: 'course' | 'attendance' | 'teacher';
    dataProps?:ILessons[]
}
const ProgressComponent:FC<props> = ({maxHeight, type, dataProps}) => {
    const [active, setActive] = useState('')
    const course = useTypedSelector(state => state.courseReducer.content)
    const data = useTypedSelector(state => state.courseReducer.activeSections)
    const dispatch = useAppDispatch();
    const handler = (lesson:course) => {
        setActive(lesson.title)
        dispatch(setActiveLesson({section : lesson.sectionIds,description:lesson.description}))
    }
    useEffect( () => {
        if(!course){
            dispatch(fetchCourse())
        }
        if(!data){
            dispatch(setActiveLesson({section : course[0].sectionIds,description:course[0].description}))
        }
    }, []);
    return (
        <div className={styles.progress}>
            <div className={styles.progress_content}>
                <div className={styles.search}>
                    <SearchBarComponent></SearchBarComponent>
                </div>
                    <div style={{maxHeight:maxHeight}} className={styles.progress_main}>
                        {course.map((lesson, index) => (
                            <div onClick={() => handler(lesson)} className={`${styles.lesson} ${active === lesson.title ? styles.active : ''}`}>
                                <p className={styles.lesson_name}>{lesson.title}</p>
                                {type === 'course' ? (
                                    <ProgressBar type={type} title={lesson.title}></ProgressBar>
                                ) : type === 'teacher' ? (
                                    <p>{lesson.allowedDirection}</p>
                                ) : null}
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    );
};

export default ProgressComponent;