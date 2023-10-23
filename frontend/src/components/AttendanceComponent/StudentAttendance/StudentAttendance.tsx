import React, {FC, useEffect, useState} from 'react';
import styles from "./StudentAttendance.module.scss";
import ProgressComponent from "../../ProgressComponent/ProgressComponent";
import GreenStatus from "../../Statuses/GreenStatus";
import RedStatus from "../../Statuses/RedStatus";
import {IStudentAttendance} from "../../../types/AttendanceResponse";
import Schedule from "../../../API's/Schedule";
import User from "../../../API's/User";
import {useTypedSelector} from "../../../hooks/redux";
import {ILessons} from "../../../types/UserResponse";

const StudentAttendance:FC = () => {
    const [attendance, setAttendance] = useState<IStudentAttendance>({
        content: [],
        empty: false,
        last: false,
        numberOfElements: 0,
        size: 0,
        totalElements: 0,
        totalPages: 0
    })
    const [lessons, setLesson] = useState<ILessons[]>()
    const title = useTypedSelector(state => state.userReducer.data.direction)

    useEffect( () => {
        (async () => {
            const response = await Schedule.getStudentAttendance('123')
            setAttendance(response.data)
        })();
    }, []);
    useEffect( () => {
        (async () => {
            if(title) {
                const response = await User.getLessons(title)
                setLesson(response.data)
            }
        })();
    }, []);
    return (
        <div className={styles.content}>
            <div className={styles.progress}>
                <ProgressComponent dataProps={lessons} type={"attendance"} maxHeight={660}></ProgressComponent>
            </div>
            <div className={styles.attendance}>
                <div className={styles.attendance_content}>
                    <div className={styles.header_block}>
                        <p>Дата</p>
                        <p>Статус</p>
                    </div>
                    {attendance.content.map((data, index) => (
                        <div className={styles.block}>
                            <p className={styles.date}>{data.date}</p>
                            {data.attended ? (
                                <GreenStatus>присутствовал</GreenStatus>
                            ) : (
                                <RedStatus>отсутствовал</RedStatus>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentAttendance;