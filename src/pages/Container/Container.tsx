import React, {FC, useEffect, useState} from 'react';
import styles from "../Container/Container.module.scss";
import picture from "../../images/TestPicture.png";
import {useLocation, useNavigate} from "react-router-dom";

interface props{
    children: React.ReactNode
}

const Container:FC<props> = ({children}) => {
    const [active, setActive] = useState('')
    const [currentClassName, setCurrentClassName] = useState(styles.childrenIn); // Используйте стейт для управления классом
    const navigate = useNavigate()
    const location = useLocation();
    const Navigate = (i:string) => {
        setCurrentClassName(styles.childrenOut);
        setTimeout(() => {
            navigate(i)
        }, 800);

    }
    useEffect(() => {
        setActive(location.pathname)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.name}>Я самая пиздатая</div>
                <div className={styles.pages}>
                    <div onClick={() => Navigate('/courses')} className={styles.pages_block}>
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 10.9657L17.5 5.98287L9.5 1L1.5 5.98287L9.5 10.9657Z" stroke="#212121"/>
                            <path d="M9.50001 10.9657L14.9756 7.55547C15.696 9.6065 15.9005 11.8399 15.5667 14.0123C13.3121 14.2576 11.1864 15.3044 9.50001 17C7.81384 15.3046 5.68853 14.2578 3.43423 14.0123C3.10019 11.8399 3.30466 9.60644 4.02534 7.55547L9.50001 10.9657Z" stroke="#212121"/>
                            <path d="M9.5 10.9657L17.5 5.98287L9.5 1L1.5 5.98287L9.5 10.9657ZM9.5 10.9657L14.9756 7.55546C15.696 9.6065 15.9005 11.8399 15.5667 14.0123C13.3121 14.2576 11.1864 15.3044 9.5 17C7.81383 15.3046 5.68852 14.2578 3.43422 14.0123C3.10018 11.8399 3.30465 9.60644 4.02533 7.55546L9.5 10.9657ZM5.94444 16.9452V9.47088L9.5 7.25649" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className={active === '/courses' ? styles.active : ''}>Курсы</p>
                    </div>
                    <div onClick={() => Navigate('/schedule')}  className={styles.pages_block}>
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.94933 4.55556V1M13.0604 4.55556V1M5.06044 8.11111H13.9493M3.28266 17H15.7271C16.1986 17 16.6508 16.8127 16.9842 16.4793C17.3176 16.1459 17.5049 15.6937 17.5049 15.2222V4.55556C17.5049 4.08406 17.3176 3.63187 16.9842 3.29848C16.6508 2.96508 16.1986 2.77778 15.7271 2.77778H3.28266C2.81116 2.77778 2.35898 2.96508 2.02558 3.29848C1.69218 3.63187 1.50488 4.08406 1.50488 4.55556V15.2222C1.50488 15.6937 1.69218 16.1459 2.02558 16.4793C2.35898 16.8127 2.81116 17 3.28266 17Z" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className={active === '/schedule' ? styles.active : ''}>Расписание</p>
                    </div>
                    <div onClick={() => Navigate('/news')} className={styles.pages_block}>
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.79289 1.29289C1.60536 1.48043 1.5 1.73478 1.5 2V4C1.5 4.26522 1.60536 4.51957 1.79289 4.70711C1.98043 4.89464 2.23478 5 2.5 5H16.5C16.7652 5 17.0196 4.89464 17.2071 4.70711C17.3946 4.51957 17.5 4.26522 17.5 4V2C17.5 1.73478 17.3946 1.48043 17.2071 1.29289C17.0196 1.10536 16.7652 1 16.5 1H2.5C2.23478 1 1.98043 1.10536 1.79289 1.29289Z" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1.79289 9.29289C1.60536 9.48043 1.5 9.73478 1.5 10V16C1.5 16.2652 1.60536 16.5196 1.79289 16.7071C1.98043 16.8946 2.23478 17 2.5 17H8.5C8.76522 17 9.01957 16.8946 9.20711 16.7071C9.39464 16.5196 9.5 16.2652 9.5 16V10C9.5 9.73478 9.39464 9.48043 9.20711 9.29289C9.01957 9.10536 8.76522 9 8.5 9H2.5C2.23478 9 1.98043 9.10536 1.79289 9.29289Z" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.7929 9.29289C13.6054 9.48043 13.5 9.73478 13.5 10V16C13.5 16.2652 13.6054 16.5196 13.7929 16.7071C13.9804 16.8946 14.2348 17 14.5 17H16.5C16.7652 17 17.0196 16.8946 17.2071 16.7071C17.3946 16.5196 17.5 16.2652 17.5 16V10C17.5 9.73478 17.3946 9.48043 17.2071 9.29289C17.0196 9.10536 16.7652 9 16.5 9H14.5C14.2348 9 13.9804 9.10536 13.7929 9.29289Z" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className={active === '/news' ? styles.active : ''}>Новости</p>
                    </div>
                    <div onClick={() => Navigate('/chat')} className={styles.pages_block}>
                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 4L9.39 9.26C9.71866 9.47928 10.1049 9.5963 10.5 9.5963C10.8951 9.5963 11.2813 9.47928 11.61 9.26L19.5 4M3.5 15H17.5C18.0304 15 18.5391 14.7893 18.9142 14.4142C19.2893 14.0391 19.5 13.5304 19.5 13V3C19.5 2.46957 19.2893 1.96086 18.9142 1.58579C18.5391 1.21071 18.0304 1 17.5 1H3.5C2.96957 1 2.46086 1.21071 2.08579 1.58579C1.71071 1.96086 1.5 2.46957 1.5 3V13C1.5 13.5304 1.71071 14.0391 2.08579 14.4142C2.46086 14.7893 2.96957 15 3.5 15Z" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className={active === '/chat' ? styles.active : ''}>Чат</p>
                    </div>
                    <div onClick={() => Navigate('/applications')} className={styles.pages_block}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12H15M9 16H15M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H12.586C12.8512 3.00006 13.1055 3.10545 13.293 3.293L18.707 8.707C18.8946 8.89449 18.9999 9.1488 19 9.414V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className={active === '/applications' ? styles.active : ''}>Заявки</p>
                    </div>
                </div>
                <div className={styles.profile}>
                    <img src={picture}/>
                </div>
            </div>
            <div className={currentClassName}>
                {children}
            </div>
        </div>
    );
};

export default Container;