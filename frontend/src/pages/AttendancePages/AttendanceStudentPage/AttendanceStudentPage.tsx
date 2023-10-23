import React, {FC} from 'react';
import Container from "../../Container/Container";
import {AttendanceStudent} from "../../../components/AttendanceComponent/TeacherAttendance/TeacherAttendance";

const AttendanceStudentPage:FC = () => {
    return (
        <Container>
            <AttendanceStudent></AttendanceStudent>
        </Container>
    );
};

export default AttendanceStudentPage;