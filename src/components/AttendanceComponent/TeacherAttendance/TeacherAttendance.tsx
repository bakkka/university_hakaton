import React, {FC, useEffect, useState} from 'react';
import styles from './TeacherAttendance.module.scss'
import LessonComponent from "../../LessonComponent/LessonComponent";
import SearchBarComponent from "../../SearchBarComponent/SearchBarComponent";
import picture from "../../../images/TestPicture2.png";
import ContactsComponent from "../../ContactsComponent/ContactsComponent";
import ProgressComponent from "../../ProgressComponent/ProgressComponent";
import ActionButton from "../../Buttons/ActionButton/ActionButton";
import Schedule from "../../../API's/Schedule";
import Attendance from "../../../API's/Attendance";
import {IStudentAttendance, ITeacherAttendance} from "../../../types/AttendanceResponse";
import User from "../../../API's/User";
import {group, IGroup} from "../../../types/UserResponse";
export const AttendanceStudent:FC = () => {
    const handler = () => {
        console.log(1)
    }
    return (
        <div className={styles.content}>
            <ActionButton onClick={() => handler()}></ActionButton>
            <div className={styles.contacts}>
                        <div className={styles.contacts_content}>
                            <div className={styles.search}>
                                <SearchBarComponent ></SearchBarComponent>
                            </div>
                            <div className={styles.contacts_main}>
                                <ContactsComponent></ContactsComponent>
                            </div>
                        </div>
                    </div>
            <div className={styles.progress}>
                        <ProgressComponent type={"attendance"} maxHeight={680}></ProgressComponent>
                    </div>
            <div className={styles.student_attendance}>
                        <div className={styles.student_attendance_content}>
                            <div className={styles.student_header}>
                                <p>Дата</p>
                                <p>Пара</p>
                                <p>Отметка</p>
                            </div>
                            <div className={styles.attendance_list}>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export const AttendanceAll = () => {
    const [currentLesson, setCurrentLesson] = useState<ITeacherAttendance>()
    const [showDates, setShowDates] = useState<boolean>(false)
    const [selectedDate, setSelectedDate] = useState('');
    const [lessons, setLessons] = useState<ITeacherAttendance[]>([])
    const [attendance, setAttendance] = useState<IStudentAttendance>()
    const [studentData, setStudentData] = useState<group[]>([]);
    const [activeLesson, setActiveLesson] = useState(currentLesson?.id)
    const [currentLessonStudents, setCurrentLessonStudents] = useState<IGroup>()
    const [newAttendStudents, setNewAttendStudents] = useState<{
        studentId:string,
        attended:boolean
    }[]>()
    const handler = () => {
        console.log(1)
    }
    const datesHandler = (date:Date) => {
        setShowDates(!showDates)
        const formattedDate = getDateInDDMMYYYYFormat(date);
        setSelectedDate(formattedDate);
        console.log(formattedDate)
    }
    useEffect( () => {
        (async () => {
            const response = await Attendance.getCurrentLesson()
            setCurrentLesson(response.data)
        })();
    }, []);
    useEffect( () => {
        (async () => {
            const response = await Attendance.getDayLessons(selectedDate)
            setLessons(response.data)
        })();
    }, [selectedDate]);

    useEffect( () => {
        (async () => {
            const updatedStudentData : group[] = [];
            const content = attendance?.content
            if(content){
                for (const item of content) {
                    const response = await User.getStudent(item.studentId)
                    updatedStudentData.push(response.data);
                }
            }
            setStudentData(updatedStudentData);
        })();
    }, [attendance]);
    useEffect( () => {
        if(currentLesson) {
            activeLessonHandler(currentLesson)
        }
    }, []);
    const activeLessonHandler = (lesson:ITeacherAttendance) => {
        if(lesson.id){
            setActiveLesson(lesson.id)
        }
        const parts = selectedDate.split('/');
        const date = parts.join('-');
        (async () => {
            const response = await Attendance.getLessonAttendance(lesson.academicSubject.id, date, `${lesson.startTime.hour}:${lesson.startTime.minute}:00`, `${lesson.endTime.hour}:${lesson.endTime.minute}:00`)
            if(!response.data){
                if(currentLesson?.id === lesson.id && currentLesson){
                    const responseGroup = await User.getGroupList(currentLesson?.group)
                    setCurrentLessonStudents(responseGroup.data)
                    // const updatedStudentAttendance = responseGroup.data.content.map((element) => ({
                    //     studentId: element.id,
                    //     attended: false,
                    // }));
                    // setNewAttendStudents(updatedStudentAttendance)
                }
            }else{
                setAttendance(response.data)
            }
        })();
    }
    const changeStudentAttend = (id:string) => {
        if(id){
            const response =  Attendance.changeAttend(id)
        }
    }

    const getDateInDDMMYYYYFormat = (date: Date) => {
        const formattedDate = date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
        });
        return formattedDate;
    };

    const getLast14Days = () => {
        const dates = [];
        const today = new Date();
        for (let i = 0; i < 14; i++) {
            const day = new Date(today);
            day.setDate(today.getDate() - i);
            dates.push(day);
        }
        return dates;
    };
    return (
        <div className={styles.content}>
            <ActionButton onClick={() => handler()}></ActionButton>
            <div className={styles.lessons}>
                <div className={styles.current}>
                    <div className={styles.current_content}>
                        <p className={styles.article}>Текущая пара</p>
                        <div className={styles.lesson_content}>
                            {currentLesson ? (
                                <LessonComponent onClick={() => activeLessonHandler(currentLesson)} time_start={`${currentLesson.startTime.hour} : ${currentLesson.startTime.minute}`} time_end={`${currentLesson.endTime.hour} : ${currentLesson.endTime.minute}`}
                                                 lesson_name={currentLesson.academicSubject.title} active={activeLesson === currentLesson.id }
                                                 teacher_name={`${currentLesson.academicSubject.teacherFullName}, ${currentLesson.room}`}></LessonComponent>
                            ) : <p>Сейчас пары нет</p>}
                        </div>
                    </div>
                </div>
                <div className={styles.all}>
                    <div className={styles.all_content}>
                        <div className={styles.header}>
                            <SearchBarComponent></SearchBarComponent>
                            <div className={styles.header_date}>
                                <div onClick={() => setShowDates(!showDates)} className={styles.date_content}>
                                    {showDates ? (
                                        <div className={styles.date_list}>
                                            <div className={styles.date_list_content}>
                                                <div className={styles.scrollBlock}>
                                                    {getLast14Days().map((date, index) => (
                                                        <div onClick={() => datesHandler(date)} key={index}>{getDateInDDMMYYYYFormat(date)}</div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                    <p>{selectedDate}</p>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="chevron-down">
                                            <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M6.14142 7.79308C6.32895 7.60561 6.58326 7.50029 6.84842 7.50029C7.11358 7.50029 7.36789 7.60561 7.55542 7.79308L10.8484 11.0861L14.1414 7.79308C14.2337 7.69757 14.344 7.62139 14.466 7.56898C14.588 7.51657 14.7192 7.48898 14.852 7.48783C14.9848 7.48668 15.1165 7.51198 15.2394 7.56226C15.3623 7.61254 15.4739 7.68679 15.5678 7.78069C15.6617 7.87458 15.736 7.98623 15.7862 8.10913C15.8365 8.23202 15.8618 8.3637 15.8607 8.49648C15.8595 8.62926 15.8319 8.76048 15.7795 8.88249C15.7271 9.00449 15.6509 9.11483 15.5554 9.20708L11.5554 13.2071C11.3679 13.3946 11.1136 13.4999 10.8484 13.4999C10.5833 13.4999 10.3289 13.3946 10.1414 13.2071L6.14142 9.20708C5.95395 9.01955 5.84863 8.76525 5.84863 8.50008C5.84863 8.23492 5.95395 7.98061 6.14142 7.79308Z" fill="#90A4AE"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={styles.list}>
                            {lessons.map((lesson, index) => (
                                <LessonComponent active={activeLesson === lesson.id } onClick={() => activeLessonHandler(lesson)} time_start={`${lesson.startTime.hour}:${lesson.startTime.minute}`} time_end={`${lesson.endTime.hour}:${lesson.endTime.minute}`}
                                                 lesson_name={lesson.academicSubject.title}
                                                 page={'attendance'}
                                                 teacher_name={lesson.group}></LessonComponent>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.students}>
                <div className={styles.students_content}>
                    <div className={styles.students_header}>
                        <p>ФИО</p>
                        <p>Группа</p>
                        <p>Отметка</p>
                    </div>
                    //Отметка пользователя на текущей паре не была сделана в силу времени
                    {activeLesson === currentLesson?.id && newAttendStudents && currentLessonStudents ? (
                        <div className={styles.list}>
                            {currentLessonStudents.content.map((student, index) => (
                                <div className={styles.block}>
                                    <div className={styles.block_name}>
                                        <img src={picture}></img>
                                        <p>{student.fullName}</p>
                                    </div>
                                    <div className={styles.block_group}>{student.studGroup}</div>
                                        <input  checked={newAttendStudents[index].attended} type={"checkbox"} className={styles.block_attend}></input>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.list}>
                            {studentData.map((student, index) => (
                                <div className={styles.block}>
                                    <div className={styles.block_name}>
                                        <img src={picture}></img>
                                        <p>{student.fullName}</p>
                                    </div>
                                    <div className={styles.block_group}>{student.studGroup}</div>
                                    {attendance && (
                                        <input onClick={() => changeStudentAttend(attendance?.content[index].id)} checked={attendance?.content[index].attended} type={"checkbox"} className={styles.block_attend}></input>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};