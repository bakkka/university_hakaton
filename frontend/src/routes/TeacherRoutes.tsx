import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import SchedulePage from "../pages/SchedulePages/SchedulePage/SchedulePage";
import ChatPage from "../pages/ChatPage/ChatPage";
import CoursesPage from "../pages/CoursesPages/CoursesPage/CoursesPage";
import TestPage from "../pages/CoursesPages/TestPage/TestPage";
import HometaskPage from "../pages/CoursesPages/HometaskPage/HometaskPage";
import LectureVideoPage from "../pages/CoursesPages/LectureVideoPage/LectureVideoPage";
import LecturePage from "../pages/CoursesPages/LecturePage/LecturePage";
import AttendancePage from "../pages/AttendancePages/AttendancePage/AttendancePage";
import NewsPage from "../pages/NewsPages/NewsPage/NewsPage";
import ApplicationsPage from "../pages/ApplicationsPages/ApplicationsPage/ApplicationsPage";
import CreateApplicationPage from "../pages/ApplicationsPages/CreateApplicationPage/CreateApplicationPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ChangeSchedulePage from "../pages/SchedulePages/ChangeSchedulePage/ChangeSchedulePage";
import AttendanceAllPage from "../pages/AttendancePages/AttendanceAllPage/AttendanceAllPage";
import AttendanceStudentPage from "../pages/AttendancePages/AttendanceStudentPage/AttendanceStudentPage";

const TeacherRoutes:FC = () => {
    return (
        <Routes>
            <Route path="/schedule" element={<SchedulePage />} />

            <Route path="/chat" element={<ChatPage />} />

            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/test/:id" element={<TestPage />} />
            <Route path="/courses/hometask/:id" element={<HometaskPage />} />
            <Route path="/courses/video/:id" element={<LectureVideoPage />} />
            <Route path="/courses/lecture/:id" element={<LecturePage />} />

            <Route path="/attendance/all" element={<AttendanceAllPage />} />
            <Route path="/attendance/:id" element={<AttendanceStudentPage />} />

            <Route path="/news" element={<NewsPage />} />

            <Route path="/" element={<SchedulePage />} />
        </Routes>
    );
};

export default TeacherRoutes;