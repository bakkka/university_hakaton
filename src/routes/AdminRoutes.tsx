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
import CreateNewsPage from "../pages/NewsPages/CreateNewsPage/CreateNewsPage";

const AdminRoutes:FC = () => {
    return (
        <Routes>
            <Route path="/chat" element={<ChatPage />} />

            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/create" element={<CreateNewsPage />} />

            <Route path="/" element={<NewsPage />} />
        </Routes>
    );
};

export default AdminRoutes;