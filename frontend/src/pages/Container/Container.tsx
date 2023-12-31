import React, {FC, useEffect, useState} from 'react';
import styles from "../Container/Container.module.scss";
import picture from "../../images/TestPicture.png";
import {useLocation, useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../hooks/redux";

interface props{
    children: React.ReactNode
}

const Container:FC<props> = ({children}) => {
    const [active, setActive] = useState('')
    const navigate = useNavigate()
    const location = useLocation();
    const role = useTypedSelector(state => state.userReducer.data.authority[0])


    useEffect(() => {
        if (location.pathname === '/chat' || location.pathname === '/schedule') {
            // При открытии вкладки /chat установить overflow: hidden
            document.documentElement.style.overflow = 'hidden';
        } else {
            // В противном случае убрать overflow: hidden
            document.documentElement.style.overflow = 'auto';
        }
    }, [location.pathname]);

    useEffect(() => {
        setActive(location.pathname)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.name}>SovcomStudents</div>
                <div className={styles.pages}>
                    {role === 'ROLE_STUDENT' || role === 'ROLE_TEACHER' ? (
                        <div onClick={() => navigate('/courses')} className={styles.pages_block}>
                            {active === '/courses' ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                    <path
                                        d="M12.4728 2.49599C12.3234 2.43195 12.1625 2.39893 12 2.39893C11.8374 2.39893 11.6766 2.43195 11.5272 2.49599L3.12716 6.09599C2.91069 6.18821 2.72611 6.34203 2.59637 6.53831C2.46663 6.7346 2.39746 6.9647 2.39746 7.19999C2.39746 7.43528 2.46663 7.66538 2.59637 7.86167C2.72611 8.05796 2.91069 8.21178 3.12716 8.30399L6.29996 9.66119C6.41773 9.52798 6.56365 9.42264 6.72716 9.35279L11.5272 7.29599C11.6724 7.23126 11.8291 7.19603 11.9881 7.19237C12.147 7.18872 12.3052 7.21669 12.4532 7.27468C12.6013 7.33267 12.7364 7.41951 12.8506 7.53016C12.9648 7.6408 13.0559 7.77305 13.1186 7.91921C13.1812 8.06537 13.2142 8.22252 13.2156 8.38154C13.217 8.54056 13.1868 8.69827 13.1267 8.84551C13.0666 8.99274 12.9779 9.12656 12.8656 9.23919C12.7533 9.35183 12.6198 9.44102 12.4728 9.50159L9.20036 10.9056L11.5284 11.9028C11.6776 11.9667 11.8382 11.9996 12.0006 11.9996C12.1629 11.9996 12.3235 11.9667 12.4728 11.9028L20.8728 8.30279C21.0885 8.21023 21.2724 8.05642 21.4016 7.8604C21.5308 7.66438 21.5996 7.43476 21.5996 7.19999C21.5996 6.96522 21.5308 6.73561 21.4016 6.53959C21.2724 6.34357 21.0885 6.18975 20.8728 6.09719L12.4728 2.49719V2.49599ZM3.97196 11.2764L5.99996 12.144V17.0664C5.58446 16.9719 5.16372 16.9022 4.73996 16.8576C4.46653 16.8289 4.21126 16.7071 4.01686 16.5127C3.82245 16.3183 3.7007 16.063 3.67196 15.7896C3.51415 14.2787 3.61561 12.7519 3.97196 11.2752V11.2764ZM11.16 19.8876C10.3488 19.0917 9.41738 18.4283 8.39996 17.922V13.1736L10.5816 14.1096C11.0298 14.3017 11.5123 14.4008 12 14.4008C12.4876 14.4008 12.9702 14.3017 13.4184 14.1096L20.028 11.2764C20.3864 12.7528 20.4879 14.2799 20.328 15.7908C20.2992 16.0642 20.1775 16.3195 19.9831 16.5139C19.7887 16.7083 19.5334 16.8301 19.26 16.8588C16.839 17.1132 14.5758 18.1809 12.84 19.8876C12.6156 20.1075 12.3141 20.2306 12 20.2306C11.6859 20.2306 11.3843 20.1075 11.16 19.8876V19.8876ZM7.19996 21.6C7.51822 21.6 7.82344 21.4736 8.04849 21.2485C8.27353 21.0235 8.39996 20.7183 8.39996 20.4V17.922C7.63676 17.5428 6.83107 17.256 5.99996 17.0676V20.4C5.99996 20.7183 6.12639 21.0235 6.35143 21.2485C6.57647 21.4736 6.8817 21.6 7.19996 21.6Z"
                                        fill="#212121"/>
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                    <path d="M12 14L21 9L12 4L3 9L12 14Z" stroke="#212121"/>
                                    <path
                                        d="M12 14L18.16 10.578C18.9705 12.6361 19.2005 14.8772 18.825 17.057C16.2886 17.3032 13.8972 18.3536 12 20.055C10.103 18.3538 7.71207 17.3034 5.17599 17.057C4.80019 14.8772 5.03022 12.636 5.84099 10.578L12 14Z"
                                        stroke="#212121"/>
                                    <path
                                        d="M12 14L21 9L12 4L3 9L12 14ZM12 14L18.16 10.578C18.9705 12.6361 19.2005 14.8772 18.825 17.057C16.2886 17.3032 13.8972 18.3536 12 20.055C10.1031 18.3538 7.71208 17.3034 5.176 17.057C4.8002 14.8772 5.03023 12.636 5.841 10.578L12 14ZM8 20V12.5L12 10.278"
                                        stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )}
                            <p className={active === '/courses' ? styles.active : ''}>Курсы</p>
                        </div>
                    ) : null}
                    {role === 'ROLE_STUDENT' || role === 'ROLE_TEACHER' || role === 'ROLE_CURATOR' ? (
                        <div onClick={() => navigate('/schedule')}  className={styles.pages_block}>
                            {active === '/schedule' ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M7.20002 2.40002C6.88176 2.40002 6.57654 2.52645 6.3515 2.7515C6.12645 2.97654 6.00002 3.28176 6.00002 3.60002V4.80002H4.80002C4.1635 4.80002 3.55306 5.05288 3.10297 5.50297C2.65288 5.95306 2.40002 6.5635 2.40002 7.20002V19.2C2.40002 19.8365 2.65288 20.447 3.10297 20.8971C3.55306 21.3472 4.1635 21.6 4.80002 21.6H19.2C19.8365 21.6 20.447 21.3472 20.8971 20.8971C21.3472 20.447 21.6 19.8365 21.6 19.2V7.20002C21.6 6.5635 21.3472 5.95306 20.8971 5.50297C20.447 5.05288 19.8365 4.80002 19.2 4.80002H18V3.60002C18 3.28176 17.8736 2.97654 17.6486 2.7515C17.4235 2.52645 17.1183 2.40002 16.8 2.40002C16.4818 2.40002 16.1765 2.52645 15.9515 2.7515C15.7265 2.97654 15.6 3.28176 15.6 3.60002V4.80002H8.40002V3.60002C8.40002 3.28176 8.2736 2.97654 8.04855 2.7515C7.82351 2.52645 7.51828 2.40002 7.20002 2.40002V2.40002ZM7.20002 8.40002C6.88176 8.40002 6.57654 8.52645 6.3515 8.7515C6.12645 8.97654 6.00002 9.28176 6.00002 9.60002C6.00002 9.91828 6.12645 10.2235 6.3515 10.4486C6.57654 10.6736 6.88176 10.8 7.20002 10.8H16.8C17.1183 10.8 17.4235 10.6736 17.6486 10.4486C17.8736 10.2235 18 9.91828 18 9.60002C18 9.28176 17.8736 8.97654 17.6486 8.7515C17.4235 8.52645 17.1183 8.40002 16.8 8.40002H7.20002Z"
                                          fill="#212121"/>
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                    <path
                                        d="M8 7V3M16 7V3M7 11H17M5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21Z"
                                        stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            )}

                            <p className={active === '/schedule' ? styles.active : ''}>Расписание</p>
                        </div>
                    ) : null}
                    <div onClick={() => navigate('/news')} className={styles.pages_block}>
                        {active === '/news' ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                <path d="M3.59998 4.8C3.59998 4.48174 3.7264 4.17651 3.95145 3.95147C4.17649 3.72643 4.48172 3.6 4.79998 3.6H19.2C19.5182 3.6 19.8235 3.72643 20.0485 3.95147C20.2735 4.17651 20.4 4.48174 20.4 4.8V7.2C20.4 7.51826 20.2735 7.82348 20.0485 8.04853C19.8235 8.27357 19.5182 8.4 19.2 8.4H4.79998C4.48172 8.4 4.17649 8.27357 3.95145 8.04853C3.7264 7.82348 3.59998 7.51826 3.59998 7.2V4.8ZM3.59998 12C3.59998 11.6817 3.7264 11.3765 3.95145 11.1515C4.17649 10.9264 4.48172 10.8 4.79998 10.8H12C12.3182 10.8 12.6235 10.9264 12.8485 11.1515C13.0735 11.3765 13.2 11.6817 13.2 12V19.2C13.2 19.5183 13.0735 19.8235 12.8485 20.0485C12.6235 20.2736 12.3182 20.4 12 20.4H4.79998C4.48172 20.4 4.17649 20.2736 3.95145 20.0485C3.7264 19.8235 3.59998 19.5183 3.59998 19.2V12ZM16.8 10.8C16.4817 10.8 16.1765 10.9264 15.9514 11.1515C15.7264 11.3765 15.6 11.6817 15.6 12V19.2C15.6 19.5183 15.7264 19.8235 15.9514 20.0485C16.1765 20.2736 16.4817 20.4 16.8 20.4H19.2C19.5182 20.4 19.8235 20.2736 20.0485 20.0485C20.2735 19.8235 20.4 19.5183 20.4 19.2V12C20.4 11.6817 20.2735 11.3765 20.0485 11.1515C19.8235 10.9264 19.5182 10.8 19.2 10.8H16.8Z" fill="#212121"/>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H19C19.2652 8 19.5196 7.89464 19.7071 7.70711C19.8946 7.51957 20 7.26522 20 7V5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4H5C4.73478 4 4.48043 4.10536 4.29289 4.29289Z" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4.29289 12.2929C4.10536 12.4804 4 12.7348 4 13V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H11C11.2652 20 11.5196 19.8946 11.7071 19.7071C11.8946 19.5196 12 19.2652 12 19V13C12 12.7348 11.8946 12.4804 11.7071 12.2929C11.5196 12.1054 11.2652 12 11 12H5C4.73478 12 4.48043 12.1054 4.29289 12.2929Z" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.2929 12.2929C16.1054 12.4804 16 12.7348 16 13V19C16 19.2652 16.1054 19.5196 16.2929 19.7071C16.4804 19.8946 16.7348 20 17 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V13C20 12.7348 19.8946 12.4804 19.7071 12.2929C19.5196 12.1054 19.2652 12 19 12H17C16.7348 12 16.4804 12.1054 16.2929 12.2929Z" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        )}
                        <p className={active === '/news' ? styles.active : ''}>Новости</p>
                    </div>
                    {role !== 'ROLE_EMPLOYEE' && role !== 'ROLE_ENROLLEE' ? (
                        <div onClick={() => navigate('/chat')} className={styles.pages_block}>
                            {active === '/chat' ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                    <path d="M2.40356 7.0608L12 11.8584L21.5964 7.0608C21.5608 6.44934 21.2929 5.87459 20.8473 5.45428C20.4018 5.03396 19.8125 4.79989 19.2 4.8H4.79996C4.18747 4.79989 3.5981 5.03396 3.15258 5.45428C2.70705 5.87459 2.43909 6.44934 2.40356 7.0608V7.0608Z" fill="#212121"/>
                                    <path d="M21.6 9.74161L12 14.5416L2.40002 9.74161V16.8C2.40002 17.4365 2.65288 18.047 3.10297 18.4971C3.55306 18.9472 4.1635 19.2 4.80002 19.2H19.2C19.8365 19.2 20.447 18.9472 20.8971 18.4971C21.3472 18.047 21.6 17.4365 21.6 16.8V9.74161Z" fill="#212121"/>
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )}

                            <p className={active === '/chat' ? styles.active : ''}>Чат</p>
                        </div>
                    ) : null}
                    {role !== 'ROLE_TEACHER' && role !== 'ROLE_CURATOR' && role !== 'ROLE_ADMIN' ? (
                        <div onClick={() => navigate('/applications')} className={styles.pages_block}>
                            {active === '/applications' ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.7998 4.79999C4.7998 4.16347 5.05266 3.55302 5.50275 3.10294C5.95284 2.65285 6.56328 2.39999 7.1998 2.39999H12.703C13.3395 2.40013 13.9498 2.65308 14.3998 3.10319L18.4966 7.19999C18.9467 7.64998 19.1997 8.26033 19.1998 8.89679V19.2C19.1998 19.8365 18.9469 20.447 18.4969 20.8971C18.0468 21.3471 17.4363 21.6 16.7998 21.6H7.1998C6.56328 21.6 5.95284 21.3471 5.50275 20.8971C5.05266 20.447 4.7998 19.8365 4.7998 19.2V4.79999ZM7.1998 12C7.1998 11.6817 7.32623 11.3765 7.55128 11.1515C7.77632 10.9264 8.08154 10.8 8.3998 10.8H15.5998C15.9181 10.8 16.2233 10.9264 16.4483 11.1515C16.6734 11.3765 16.7998 11.6817 16.7998 12C16.7998 12.3183 16.6734 12.6235 16.4483 12.8485C16.2233 13.0736 15.9181 13.2 15.5998 13.2H8.3998C8.08154 13.2 7.77632 13.0736 7.55128 12.8485C7.32623 12.6235 7.1998 12.3183 7.1998 12ZM8.3998 15.6C8.08154 15.6 7.77632 15.7264 7.55128 15.9515C7.32623 16.1765 7.1998 16.4817 7.1998 16.8C7.1998 17.1183 7.32623 17.4235 7.55128 17.6485C7.77632 17.8736 8.08154 18 8.3998 18H15.5998C15.9181 18 16.2233 17.8736 16.4483 17.6485C16.6734 17.4235 16.7998 17.1183 16.7998 16.8C16.7998 16.4817 16.6734 16.1765 16.4483 15.9515C16.2233 15.7264 15.9181 15.6 15.5998 15.6H8.3998Z" fill="#212121"/>
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 12H15M9 16H15M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H12.586C12.8512 3.00006 13.1055 3.10545 13.293 3.293L18.707 8.707C18.8946 8.89449 18.9999 9.1488 19 9.414V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            )}
                            <p className={active === '/applications' ? styles.active : ''}>Заявки</p>
                        </div>
                    ) : null}
                    {role === 'ROLE_TEACHER' || role === 'ROLE_CURATOR' || role === 'ROLE_STUDENT' ?(
                        <div onClick={() => navigate('/attendance')} className={styles.pages_block}>
                            {active === '/attendance' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V21L12 17.5L19 21V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579Z" fill="#212121" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V21L12 17.5L19 21V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579Z" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            )}
                            <p className={active === '/applications' ? styles.active : ''}>Посещаемость</p>
                        </div>
                    ) : null}
                </div>
                <div onClick={() => navigate('/')} className={styles.profile}>
                    <img src={picture}/>
                </div>
            </div>
            <div className={styles.childrenIn}>
                {children}
            </div>
        </div>
    );
};

export default Container;