import React, {FC, useEffect, useState} from 'react';
import styles from './TopicComponent.module.scss'
import TestType from "./TopicTypes/TestType";
import VideoType from "./TopicTypes/VideoType";
import LectureType from "./TopicTypes/LectureType";
import HometaskType from "./TopicTypes/HometaskType";
import Courses from "../../API's/Courses";
import {ISection, ITask} from "../../types/CoursesResponse";
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../hooks/redux";

interface props{
    type?:'topic' | 'description'
    description?:string
    data?:string
}
const TopicComponent:FC<props> = ({type,description, data}) => {
    const navigate = useNavigate();
    const role = useTypedSelector(state => state.userReducer.data.authority[0])

    const [topic,setTopic] = useState<ISection>()
    const [tasks, setTasks] = useState<ITask[]>()
    useEffect( () => {
        (async () => {
            const responses: ITask[] = []
            if(data) {
                const response = await Courses.getSection(data)
                setTopic(response.data)
                for (const id of response.data.tasks) {
                    if(id) {
                        const responseTask = await Courses.getTask(id)
                        const taskData : ITask = responseTask.data
                        responses.push(taskData);
                    }
                }
            }
            if(responses){
            setTasks(responses)
            }
        })();
    }, []);
    const navigateHander = (url:ITask) => {
        navigate(`/${url.type}/${url.id}`)
    }
    return (
        <>
            {type === 'description' ? (
                <div className={styles.description_container}>
                    <div className={styles.description_content}>
                        <div className={styles.article}>
                            <p>Описание курса</p>
                        </div>
                        <div className={styles.main}>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.article}>
                            <p>{topic?.title}</p>
                            {role === "ROLE_TEACHER" ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 5.5C10.7652 5.5 11.0196 5.60536 11.2071 5.79289C11.3946 5.98043 11.5 6.23478 11.5 6.5V9.5H14.5C14.7652 9.5 15.0196 9.60536 15.2071 9.79289C15.3946 9.98043 15.5 10.2348 15.5 10.5C15.5 10.7652 15.3946 11.0196 15.2071 11.2071C15.0196 11.3946 14.7652 11.5 14.5 11.5H11.5V14.5C11.5 14.7652 11.3946 15.0196 11.2071 15.2071C11.0196 15.3946 10.7652 15.5 10.5 15.5C10.2348 15.5 9.98043 15.3946 9.79289 15.2071C9.60536 15.0196 9.5 14.7652 9.5 14.5V11.5H6.5C6.23478 11.5 5.98043 11.3946 5.79289 11.2071C5.60536 11.0196 5.5 10.7652 5.5 10.5C5.5 10.2348 5.60536 9.98043 5.79289 9.79289C5.98043 9.60536 6.23478 9.5 6.5 9.5H9.5V6.5C9.5 6.23478 9.60536 5.98043 9.79289 5.79289C9.98043 5.60536 10.2348 5.5 10.5 5.5Z" fill="#607D8B"/>
                                </svg>
                            ) : null}
                        </div>
                        <div className={styles.content_list}>
                            {tasks && tasks.map((task, index) => (
                                task.type === 'test' ? (
                                    <TestType onClick={() => navigateHander(task)} data={task} key={index}></TestType>
                                ) : task.type === 'homework' ? (
                                    <HometaskType onClick={() => navigateHander(task)} data={task} key={index}></HometaskType>
                                ) : task.type === 'note' ? (
                                    <LectureType onClick={() => navigateHander(task)}  key={index}></LectureType>
                                ) : (
                                    <VideoType onClick={() => navigateHander(task)}  key={index}></VideoType>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TopicComponent;