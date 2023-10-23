import React, {FC} from 'react';
import Container from "../Container/Container";
import styles from "./ErrorPage.module.scss";
import AcceptButton from "../../components/Buttons/AcceptButton/AcceptButton";
import {useNavigate} from "react-router-dom";

const ErrorPage:FC = () => {
    const navigate = useNavigate();
    const handler = () => {
        navigate('/')
    }
    return (
        <Container>
            <div className={styles.block}>
                <div className={styles.content}>
                    <p className={styles.code}>404</p>
                    <p className={styles.article}>Такой страницы не существует</p>
                    <div className={styles.button}>
                        <AcceptButton height={50} onClick={() => handler()} background={'black'}>на главную</AcceptButton>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ErrorPage;