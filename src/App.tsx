import React, {useEffect, useState} from 'react';
import './App.module.scss';
import {BrowserRouter, Outlet, Route, Router, Routes, useLocation} from "react-router-dom";
import SchedulePage from "./pages/SchedulePage/SchedulePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import styles from './App.module.scss'
import ChatPage from "./pages/ChatPage/ChatPage";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import ApplicationsPage from "./pages/ApplicationsPage/ApplicationsPage";
import { OAuthPopup, useOAuth2 } from "@tasoskakour/react-use-oauth2";
import axios from "axios";
import * as querystring from "querystring";
import qs from 'qs';
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AttendancePage from "./pages/AttendancePage/AttendancePage";

interface RequestData {
    grant_type: string;
    client_id: string;
    client_secret: string;
    code: string;
    redirect_uri: string;
}


function App() {

    const Home = () => {
        const location = useLocation();
        const [accessToken, setAccessToken] = useState(null);
            const authorizeUrl = "http://localhost:9000/oauth2/authorize";
            const clientId = "front";
            const clientSecret = 'admin'
            const redirectUri = "http://localhost:3000/authorized";
            const scope = "openid";
            const responseType = "code";

            const authorizationUrl = `${authorizeUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;

            const handleLogin = () => {
                window.location.href = authorizationUrl
        };
        useEffect(() => {
            const urlParams = new URLSearchParams(window.location.search);
            const authorizationCode = urlParams.get('code');
            // const data = new URLSearchParams();
            // data.append('grant_type', 'authorization_code');
            // data.append('client_id', 'front');
            // data.append('client_secret', 'admin');
            // data.append('code', `${authorizationCode}`);
            // data.append('redirect_uri', 'http://localhost:3000/authorized');
            if (authorizationCode) {
                const authString = `${clientId}:${clientSecret}`;
                const base64AuthString = btoa(authString);

                const requestBody = {
                    grant_type: 'authorization_code',
                    code: authorizationCode,
                    redirect_uri: 'http://localhost:3000/authorized',
                };

                const config = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Basic ${base64AuthString}`,

                    },
                };
                axios.post('http://localhost:9000/oauth2/token', requestBody, config)
                    .then((response) => {
                        console.log('Успешный ответ:', response.data);
                    })
                    .catch((error) => {
                        console.error('Ошибка при запросе на получение токена:', error);
                    });
            }
        }, [location.pathname]);

        return (
            <button style={{ margin: "24px" }} type="button" onClick={() => handleLogin()}>
                Login
            </button>
        );
    };


    return (
        <div className={styles.container}>
            <BrowserRouter>
                <Routes>
                    <Route path="/schedule" element={<SchedulePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/attendance" element={<AttendancePage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/" element={<ProfilePage />} />
                    <Route path="/applications" element={<ApplicationsPage />} />
                    <Route element={<Home />} path="/authorized" />
                </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;
