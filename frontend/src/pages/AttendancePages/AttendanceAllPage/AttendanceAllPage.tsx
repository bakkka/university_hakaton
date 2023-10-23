import React, {FC} from 'react';
import Container from "../../Container/Container";
import {AttendanceAll} from "../../../components/AttendanceComponent/TeacherAttendance/TeacherAttendance";

const AttendanceAllPage:FC = () => {
    return (
        <Container>
            <AttendanceAll></AttendanceAll>
        </Container>
    );
};

export default AttendanceAllPage;