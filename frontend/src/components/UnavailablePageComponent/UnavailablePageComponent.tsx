import React, {FC} from 'react';
import Container from "../../pages/Container/Container";
import styles from './UnavailablePageComponent.module.scss'
import AcceptButton from "../Buttons/AcceptButton/AcceptButton";
import {useNavigate} from "react-router-dom";
const UnavailablePageComponent:FC = () => {
    const navigate = useNavigate();
    const handler = () => {
        navigate('/')
    }
    return (
            <div className={styles.block}>
                <div className={styles.content}>
                    <p className={styles.code}>500</p>
                    <div>
                        <p className={styles.article}>Сервис временно не доступен</p>
                        <p className={styles.retry}>Попробуйте позже</p>
                    </div>
                    <div className={styles.button}>
                        <AcceptButton height={50} onClick={() => handler()  } background={'black'}>на главную</AcceptButton>
                    </div>
                </div>
            </div>
    );
};

export default UnavailablePageComponent;