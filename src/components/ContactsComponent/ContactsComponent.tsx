import React, {FC, useState} from 'react';
import styles from "../../components/ContactsComponent/ContactsComponent.module.scss";
import picture from "../../images/TestPicture2.png";
import {useLocation, useNavigate} from "react-router-dom";

const ContactsComponent:FC = () => {
    const [active, setActive] = useState(0)
    const location = useLocation();
    const navigate = useNavigate()
    const handleClick = (i:number) => {
        if (location.pathname === '/courses') {
            navigate('/chat'); // Предположим, что у вас есть функция navigate для перехода по маршрутам
        } else {
            setActive(i); // Предположим, что setActive - это функция
        }
    };
    return (
        <div className={styles.container}>
            <div onClick={() => handleClick(1)} className={`${styles.person} ${active === 1 ? styles.active : ''}`}>
                <div className={styles.person_photo}>
                    <img src={picture}></img>
                </div>
                <div className={styles.person_info}>
                    <p className={styles.person_name}>Зеньков Артем</p>
                    <p className={styles.person_online}>15 октября</p>
                </div>
            </div>
            <div onClick={() => handleClick(2)} className={`${styles.person} ${active === 2 ? styles.active : ''}`}>
                <div className={styles.person_photo}>
                    <img src={picture}></img>
                </div>
                <div className={styles.person_info}>
                    <p className={styles.person_name}>Зеньков Артем</p>
                    <p className={styles.person_online}>15 октября</p>
                </div>
            </div>
            <div onClick={() => handleClick(3)} className={`${styles.person} ${active === 3 ? styles.active : ''}`}>
                <div className={styles.person_photo}>
                    <img src={picture}></img>
                </div>
                <div className={styles.person_info}>
                    <p className={styles.person_name}>Зеньков Артем</p>
                    <p className={styles.person_online}>15 октября</p>
                </div>
            </div>
            <div onClick={() => handleClick(4)} className={`${styles.person} ${active === 4 ? styles.active : ''}`}>
                <div className={styles.person_photo}>
                    <img src={picture}></img>
                </div>
                <div className={styles.person_info}>
                    <p className={styles.person_name}>Зеньков Артем</p>
                    <p className={styles.person_online}>15 октября</p>
                </div>

            </div>
            <div onClick={() => handleClick(5)} className={`${styles.person} ${active === 5 ? styles.active : ''}`}>
                <div className={styles.person_photo}>
                    <img src={picture}></img>
                </div>
                <div className={styles.person_info}>
                    <p className={styles.person_name}>Зеньков Артем</p>
                    <p className={styles.person_online}>15 октября</p>
                </div>
            </div>
            <div onClick={() => handleClick(6)} className={`${styles.person} ${active === 6 ? styles.active : ''}`}>
                <div className={styles.person_photo}>
                    <img src={picture}></img>
                </div>
                <div className={styles.person_info}>
                    <p className={styles.person_name}>Зеньков Артем</p>
                    <p className={styles.person_online}>15 октября</p>
                </div>
            </div>
            <div onClick={() => handleClick(7)} className={`${styles.person} ${active === 7 ? styles.active : ''}`}>
                <div className={styles.person_photo}>
                    <img src={picture}></img>
                </div>
                <div className={styles.person_info}>
                    <p className={styles.person_name}>Зеньков Артем</p>
                    <p className={styles.person_online}>15 октября</p>
                </div>
            </div>
            <div onClick={() => handleClick(8)} className={`${styles.person} ${active === 8 ? styles.active : ''}`}>
                <div className={styles.person_photo}>
                    <img src={picture}></img>
                </div>
                <div className={styles.person_info}>
                    <p className={styles.person_name}>Зеньков Артем</p>
                    <p className={styles.person_online}>15 октября</p>
                </div>
            </div>
            <div onClick={() => handleClick(9)} className={`${styles.person} ${active === 9 ? styles.active : ''}`}>
                <div className={styles.person_photo}>
                    <img src={picture}></img>
                </div>
                <div className={styles.person_info}>
                    <p className={styles.person_name}>Зеньков Артем</p>
                    <p className={styles.person_online}>15 октября</p>
                </div>
            </div>
            <div onClick={() => handleClick(10)} className={`${styles.person} ${active === 10 ? styles.active : ''}`}>
                <div className={styles.person_photo}>
                    <img src={picture}></img>
                </div>
                <div className={styles.person_info}>
                    <p className={styles.person_name}>Зеньков Артем</p>
                    <p className={styles.person_online}>15 октября</p>
                </div>
            </div>
            <div onClick={() => handleClick(11)} className={`${styles.person} ${active === 11 ? styles.active : ''}`}>
                <div className={styles.person_photo}>
                    <img src={picture}></img>
                </div>
                <div className={styles.person_info}>
                    <p className={styles.person_name}>Зеньков Артем</p>
                    <p className={styles.person_online}>15 октября</p>
                </div>
            </div>
        </div>
    );
};

export default ContactsComponent;