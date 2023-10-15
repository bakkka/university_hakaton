import React from 'react';
import './App.module.scss';
import {BrowserRouter, Outlet, Route, Router, Routes, useLocation} from "react-router-dom";
import SchedulePage from "./pages/SchedulePage/SchedulePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import styles from './App.module.scss'
import ChatPage from "./pages/ChatPage/ChatPage";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import ApplicationsPage from "./pages/ApplicationsPage/ApplicationsPage";

function App() {
    return (
        <div className={styles.container}>
            <BrowserRouter>
                <Routes>
                    <Route path="/schedule" element={<SchedulePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/applications" element={<ApplicationsPage />} />
                </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;
