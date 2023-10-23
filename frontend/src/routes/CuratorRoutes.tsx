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

const CuratorRoutes:FC = () => {
    return (
        <Routes>
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/" element={<SchedulePage />} />
            <Route path="/schedule/change" element={<ChangeSchedulePage />} />

            <Route path="/chat" element={<ChatPage />} />

            <Route path="/attendance/all" element={<AttendanceAllPage />} />
            <Route path="/attendance/:id" element={<AttendanceStudentPage />} />

            <Route path="/news" element={<NewsPage />} />

        </Routes>
    );
};

export default CuratorRoutes;