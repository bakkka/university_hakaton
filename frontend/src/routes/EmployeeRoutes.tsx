import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import SchedulePage from "../pages/SchedulePages/SchedulePage/SchedulePage";
import ChangeSchedulePage from "../pages/SchedulePages/ChangeSchedulePage/ChangeSchedulePage";
import ChatPage from "../pages/ChatPage/ChatPage";
import CoursesPage from "../pages/CoursesPages/CoursesPage/CoursesPage";
import TestPage from "../pages/CoursesPages/TestPage/TestPage";
import HometaskPage from "../pages/CoursesPages/HometaskPage/HometaskPage";
import LectureVideoPage from "../pages/CoursesPages/LectureVideoPage/LectureVideoPage";
import LecturePage from "../pages/CoursesPages/LecturePage/LecturePage";
import AttendanceAllPage from "../pages/AttendancePages/AttendanceAllPage/AttendanceAllPage";
import AttendanceStudentPage from "../pages/AttendancePages/AttendanceStudentPage/AttendanceStudentPage";
import NewsPage from "../pages/NewsPages/NewsPage/NewsPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ApplicationsPage from "../pages/ApplicationsPages/ApplicationsPage/ApplicationsPage";
import ApplicationPage from "../pages/ApplicationsPages/ApplicationPage/ApplicationPage";
import CreateApplicationPage from "../pages/ApplicationsPages/CreateApplicationPage/CreateApplicationPage";

const EmployeeRoutes:FC = () => {
    return (
        <Routes>
            <Route path="/news" element={<NewsPage />} />
            <Route path="/application/create" element={<CreateApplicationPage />} />
            <Route path="/applications" element={<ApplicationsPage />} />
            <Route path="/" element={<CreateApplicationPage />} />
        </Routes>
    );
};

export default EmployeeRoutes;