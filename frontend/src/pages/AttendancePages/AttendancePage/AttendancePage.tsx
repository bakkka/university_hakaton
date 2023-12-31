import React, {useState} from 'react';
import Container from "../../Container/Container";
import styles from './AttendancePage.module.scss'
import SearchBarComponent from "../../../components/SearchBarComponent/SearchBarComponent";
import picture from "../../../images/TestPicture2.png";
import ProgressComponent from "../../../components/ProgressComponent/ProgressComponent";
import GreenStatus from "../../../components/Statuses/GreenStatus";
import RedStatus from "../../../components/Statuses/RedStatus";
import StudentAttendance from "../../../components/AttendanceComponent/StudentAttendance/StudentAttendance";
const AttendancePage = () => {
    return (
        <Container>
                <StudentAttendance></StudentAttendance>
        </Container>
    );
};

export default AttendancePage;