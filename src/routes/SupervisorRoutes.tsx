import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import ChatPage from "../pages/ChatPage/ChatPage";
import ApplicationPage from "../pages/ApplicationsPages/ApplicationPage/ApplicationPage";
import MyApplicationsPage from "../pages/ApplicationsPages/MyApplicationsPage/MyApplicationsPage";
import NewsPage from "../pages/NewsPages/NewsPage/NewsPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

const SupervisorRoutes:FC = () => {
    return (
        <Routes>
            <Route path="/chat" element={<ChatPage />} />

            <Route path="/application/:id" element={<ApplicationPage />} />
            <Route path="/application/list" element={<MyApplicationsPage/>} />

            <Route path="/news" element={<NewsPage />} />

            <Route path="/" element={<MyApplicationsPage />} />
        </Routes>
    );
};

export default SupervisorRoutes;