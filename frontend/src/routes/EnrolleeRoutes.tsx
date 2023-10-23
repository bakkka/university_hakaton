import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import NewsPage from "../pages/NewsPages/NewsPage/NewsPage";
import CreateApplicationPage from "../pages/ApplicationsPages/CreateApplicationPage/CreateApplicationPage";
import ApplicationsPage from "../pages/ApplicationsPages/ApplicationsPage/ApplicationsPage";

const EnrolleeRoutes:FC = () => {
    return (
        <Routes>
            <Route path="/news" element={<NewsPage />} />
            <Route path="/" element={<ApplicationsPage />} />
            <Route path="/applications" element={<ApplicationsPage />} />
        </Routes>
    );
};

export default EnrolleeRoutes;