import React, {FC, useEffect, useState} from 'react';
import styles from './SchedulePage.module.scss'
import picture from '../../../images/TestPicture.png'
import Container from "../../Container/Container";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import LessonComponent from "../../../components/LessonComponent/LessonComponent";
import {OfflineType, OnlineType} from "../../../components/LessonType/LessonType";
import AcceptButton from "../../../components/Buttons/AcceptButton/AcceptButton";
import CancelButton from "../../../components/Buttons/CancelButton/CancelButton";
import Schedule from "../../../API's/Schedule";
import {AuthBody} from "../../../types/UserResponse";
import {AppDispatch} from "../../../store";
import Auth from "../../../API's/Auth";
import {errorDrop, loginFetchingSuccess} from "../../../store/reducers/UserSlice";
import {IScheduleDay} from "../../../types/ScheduleResponse";
import { format, parseISO } from 'date-fns';
import {useAppDispatch} from "../../../hooks/redux";


const SchedulePage:FC = () => {
    const [showGroupList, setShowGroupList] = useState(false)
    const [editMode, setEditMode] = useState(false);
    const [type, setType] = useState('teacher')//teacher or student
    const [schedule, setSchedule] = useState<IScheduleDay[]>([])
    const [error, setError] = useState(null);
    const dispatch = useAppDispatch()
    const daytype = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];

    const formatedDayHandler = (date:string) => {
        const formattedDate = format(new Date(date), 'dd MMMM');
        return formattedDate
    }

    useEffect( () => {
        (async () => {
            try {
                const response = await Schedule.getStudentSchedule()
                setSchedule(response.data)
            }catch (e){
                dispatch(errorDrop())
            }
        })();
    }, []);
    return (
                <Container>
                        <div>
                            <div className={styles.schedule}>
                                {schedule.map((day, index) => (
                                    <div key={index} className={styles.block}>
                                        <div className={styles.block_info}>
                                            <p className={styles.block_info_time}>{daytype[index]}, {formatedDayHandler(day.date)}</p>
                                            <p className={styles.block_info_amount}>{day.numberOfLessons} пары, с {day.firstLessonTime.hour}:{day.firstLessonTime.minute} по {day.lastLessonTime.hour}:{day.lastLessonTime.minute}</p>
                                            {type === 'teacher' ? (
                                                <svg onClick={() => setEditMode(true)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="pencil-alt">
                                                        <path id="Vector" d="M11 4.99998H6C5.46957 4.99998 4.96086 5.21069 4.58579 5.58577C4.21071 5.96084 4 6.46955 4 6.99998V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V13M17.586 3.58598C17.7705 3.39496 17.9912 3.24259 18.2352 3.13778C18.4792 3.03296 18.7416 2.97779 19.0072 2.97548C19.2728 2.97317 19.5361 3.02377 19.7819 3.12434C20.0277 3.2249 20.251 3.3734 20.4388 3.56119C20.6266 3.74897 20.7751 3.97228 20.8756 4.21807C20.9762 4.46386 21.0268 4.72722 21.0245 4.99278C21.0222 5.25834 20.967 5.52078 20.8622 5.76479C20.7574 6.0088 20.605 6.22949 20.414 6.41398L11.828 15H9V12.172L17.586 3.58598Z" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                </svg>
                                            ) : null}
                                        </div>
                                        <div className={styles.block_content}>
                                            {day.lessons.map((lesson, index) => (
                                                <LessonComponent time_start={`${lesson.startTime.hour}:${lesson.startTime.minute}`} time_end={`${lesson.endTime.hour}:${lesson.endTime.minute}`}
                                                                 height={50}
                                                                 lesson_name={lesson.academicSubject.title} type={lesson.type}
                                                                 teacher_name={`${lesson.academicSubject.teacherFullName}, ${lesson.room}`}></LessonComponent>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.legend}>
                                <div className={styles.legend_block}>
                                    <OfflineType></OfflineType> - очное
                                </div>
                                <div className={styles.legend_block}>
                                    <OnlineType></OnlineType> - дистанционное
                                </div>
                                {type === 'teacher' ? (
                                    <div onClick={() => setShowGroupList(!showGroupList)} className={styles.group_block}>
                                        <p>1379</p>
                                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292787 0.299246C0.480314 0.111775 0.734622 0.00645932 0.999786 0.00645932C1.26495 0.00645932 1.51926 0.111775 1.70679 0.299246L4.99979 3.59225L8.29279 0.299246C8.38503 0.203736 8.49538 0.127553 8.61738 0.0751444C8.73939 0.0227354 8.87061 -0.00485091 9.00339 -0.00600472C9.13616 -0.00715854 9.26784 0.018143 9.39074 0.0684238C9.51364 0.118705 9.62529 0.192958 9.71918 0.286851C9.81307 0.380743 9.88733 0.492395 9.93761 0.615292C9.98789 0.738188 10.0132 0.869868 10.012 1.00265C10.0109 1.13543 9.9833 1.26665 9.93089 1.38865C9.87848 1.51065 9.8023 1.621 9.70679 1.71325L5.70679 5.71325C5.51926 5.90072 5.26495 6.00603 4.99979 6.00603C4.73462 6.00603 4.48031 5.90072 4.29279 5.71325L0.292787 1.71325C0.105316 1.52572 0 1.27141 0 1.00625C0 0.741082 0.105316 0.486774 0.292787 0.299246Z" fill="#212121"/>
                                        </svg>
                                    </div>
                                ) : null}
                                {type === 'teacher' && showGroupList ? (
                                    <div className={styles.group_list}>
                                        <div className={styles.list_content}>
                                            <div className={styles.scrollBlock}>
                                                <div onClick={() => setShowGroupList(!showGroupList)} className={styles.content_block}>1376</div>
                                                <div onClick={() => setShowGroupList(!showGroupList)} className={styles.content_block}>1378</div>
                                                <div onClick={() => setShowGroupList(!showGroupList)} className={styles.content_block}>1377</div>
                                                <div onClick={() => setShowGroupList(!showGroupList)} className={styles.content_blockActive}>1379</div>
                                                <div onClick={() => setShowGroupList(!showGroupList)} className={styles.content_block}>1380</div>
                                                <div onClick={() => setShowGroupList(!showGroupList)} className={styles.content_block}>1381</div>
                                                <div onClick={() => setShowGroupList(!showGroupList)} className={styles.content_block}>1382</div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                </Container>
    );
};

export default SchedulePage;