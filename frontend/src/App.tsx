import React, {useEffect, useState} from 'react';
import './App.module.scss';
import {BrowserRouter, Outlet, Route, Router, Routes, useLocation} from "react-router-dom";
import SchedulePage from "./pages/SchedulePages/SchedulePage/SchedulePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import styles from './App.module.scss'
import ChatPage from "./pages/ChatPage/ChatPage";
import CoursesPage from "./pages/CoursesPages/CoursesPage/CoursesPage";
import NewsPage from "./pages/NewsPages/NewsPage/NewsPage";
import ApplicationsPage from "./pages/ApplicationsPages/ApplicationsPage/ApplicationsPage";
import { OAuthPopup, useOAuth2 } from "@tasoskakour/react-use-oauth2";
import axios from "axios";
import * as querystring from "querystring";
import qs from 'qs';
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AttendancePage from "./pages/AttendancePages/AttendancePage/AttendancePage";
import TestPage from "./pages/CoursesPages/TestPage/TestPage";
import HometaskPage from "./pages/CoursesPages/HometaskPage/HometaskPage";
import LectureVideoPage from "./pages/CoursesPages/LectureVideoPage/LectureVideoPage";
import LecturePage from "./pages/CoursesPages/LecturePage/LecturePage";
import ApplicationPage from "./pages/ApplicationsPages/ApplicationPage/ApplicationPage";
import CreateApplicationPage from "./pages/ApplicationsPages/CreateApplicationPage/CreateApplicationPage";
import {MyApplications} from "./components/ApplicationComponent/StudentApplication/StudentApplication";
import MyApplicationsPage from "./pages/ApplicationsPages/MyApplicationsPage/MyApplicationsPage";
import AttendanceAllPage from "./pages/AttendancePages/AttendanceAllPage/AttendanceAllPage";
import AttendanceStudentPage from "./pages/AttendancePages/AttendanceStudentPage/AttendanceStudentPage";
import CreateNewsPage from "./pages/NewsPages/CreateNewsPage/CreateNewsPage";
import ChangeSchedulePage from "./pages/SchedulePages/ChangeSchedulePage/ChangeSchedulePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import {useTypedSelector} from "./hooks/redux";
import StudentRoutes from "./routes/StudentRoutes";
import TeacherRoutes from "./routes/TeacherRoutes";
import EmployeeRoutes from "./routes/EmployeeRoutes";
import EnrolleeRoutes from "./routes/EnrolleeRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import SupervisorRoutes from "./routes/SupervisorRoutes";
import CuratorRoutes from "./routes/CuratorRoutes";
import AdmissionRoutes from "./routes/AdmissionRoutes";

interface RequestData {
    grant_type: string;
    client_id: string;
    client_secret: string;
    code: string;
    redirect_uri: string;
}


function App() {
    const role = useTypedSelector(state => state.userReducer.data.authority[0])

    return (
        <div className={styles.container}>
            <BrowserRouter>
                {role === 'ROLE_STUDENT' ? (
                    <StudentRoutes></StudentRoutes>
                ) : null}
                {role === 'ROLE_TEACHER' ? (
                    <TeacherRoutes></TeacherRoutes>
                ) : null}
                {role === 'ROLE_EMPLOYEE' ? (
                    <EmployeeRoutes></EmployeeRoutes>
                ) : null}
                {role === 'ROLE_ENROLLEE' ? (
                    <EnrolleeRoutes></EnrolleeRoutes>
                ) : null}
                {role === 'ROLE_ADMIN' ? (
                    <AdminRoutes></AdminRoutes>
                ) : null}
                {role === 'ROLE_SUPERVISOR' ? (
                    <SupervisorRoutes></SupervisorRoutes>
                ) : null}
                {role === 'ROLE_CURATOR' ? (
                    <CuratorRoutes></CuratorRoutes>
                ) : null}
                {role === 'ROLE_ADMISSION' ? (
                    <AdmissionRoutes></AdmissionRoutes>
                ) : null}
                <Routes>
                    <Route path="/authorized" element={<LoginPage />} />
                    <Route path={'*'} element={<ErrorPage/>}/>
                    <Route path="/attendance/all" element={<AttendanceAllPage />} />
                </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;
