import React, {FC, useEffect, useState} from 'react';
import styles from './LoginPage.module.scss'
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios/index";
import {fetchLogin, fetchUserInfo} from "../../store/reducers/ActionCreator";
import {useAppDispatch, useTypedSelector} from "../../hooks/redux";
const LoginPage:FC = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const auth = useTypedSelector(state => state.userReducer.isAuth)

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
        if (authorizationCode) {

            const requestBody = {
                grant_type: 'authorization_code',
                code: authorizationCode,
                redirect_uri: 'http://localhost:3000/authorized',
            };
            dispatch(fetchLogin(requestBody))
            dispatch(fetchUserInfo())
        }
    }, [location.pathname]);
    useEffect(() => {
        if(auth){
            navigate('/')
        }
    }, [auth]);

    return (
        <div className={styles.container}>
            <p className={styles.article}>Авторизация</p>
            {/*<div className={styles.block}>*/}
            {/*    <p className={styles.block_article}>Почта</p>*/}
            {/*    <input placeholder={'mail@mail.ru'}/>*/}
            {/*</div>*/}
            {/*<div className={styles.block}>*/}
            {/*    <p className={styles.block_article}>Пароль</p>*/}
            {/*    <input type={'password'} placeholder={'******'}/>*/}
            {/*</div>*/}
            <button onClick={() => handleLogin()}>Войти</button>
        </div>
    );
};

export default LoginPage;