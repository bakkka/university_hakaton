import React, {FC, useState} from 'react';
import Container from "../Container/Container";
import styles from './ApplicationsPage.module.scss'
import SearchBarComponent from "../../components/SearchBarComponent/SearchBarComponent";
import picture from "../../images/TestPicture2.png";
const ApplicationsPage:FC = () => {
    const [active, setActive] = useState(0)

    return (
        <Container>
            <div className={styles.content}>
                <div className={styles.list}>
                    <div className={styles.list_content}>
                        <div className={styles.search}>
                            <SearchBarComponent ></SearchBarComponent>
                        </div>
                        <div className={styles.list_main}>
                            <div onClick={() => setActive(1)} className={`${styles.person} ${active === 1 ? styles.active : ''}`}>
                                <div className={styles.person_photo}>
                                    <img src={picture}></img>
                                </div>
                                <div className={styles.person_info}>
                                    <p className={styles.person_name}>Зеньков Артем</p>
                                    <p className={styles.person_online}>15 октября</p>
                                </div>
                            </div>
                            <div onClick={() => setActive(2)} className={`${styles.person} ${active === 2 ? styles.active : ''}`}>
                                <div className={styles.person_photo}>
                                    <img src={picture}></img>
                                </div>
                                <div className={styles.person_info}>
                                    <p className={styles.person_name}>Зеньков Артем</p>
                                    <p className={styles.person_online}>15 октября</p>
                                </div>
                            </div>
                            <div onClick={() => setActive(3)} className={`${styles.person} ${active === 3 ? styles.active : ''}`}>
                                <div className={styles.person_photo}>
                                    <img src={picture}></img>
                                </div>
                                <div className={styles.person_info}>
                                    <p className={styles.person_name}>Зеньков Артем</p>
                                    <p className={styles.person_online}>15 октября</p>
                                </div>
                            </div>
                            <div onClick={() => setActive(4)} className={`${styles.person} ${active === 4 ? styles.active : ''}`}>
                                <div className={styles.person_photo}>
                                    <img src={picture}></img>
                                </div>
                                <div className={styles.person_info}>
                                    <p className={styles.person_name}>Зеньков Артем</p>
                                    <p className={styles.person_online}>15 октября</p>
                                </div>

                            </div>
                            <div onClick={() => setActive(5)} className={`${styles.person} ${active === 5 ? styles.active : ''}`}>
                                <div className={styles.person_photo}>
                                    <img src={picture}></img>
                                </div>
                                <div className={styles.person_info}>
                                    <p className={styles.person_name}>Зеньков Артем</p>
                                    <p className={styles.person_online}>15 октября</p>
                                </div>
                            </div>
                            <div onClick={() => setActive(6)} className={`${styles.person} ${active === 6 ? styles.active : ''}`}>
                                <div className={styles.person_photo}>
                                    <img src={picture}></img>
                                </div>
                                <div className={styles.person_info}>
                                    <p className={styles.person_name}>Зеньков Артем</p>
                                    <p className={styles.person_online}>15 октября</p>
                                </div>
                            </div>
                            <div onClick={() => setActive(7)} className={`${styles.person} ${active === 7 ? styles.active : ''}`}>
                                <div className={styles.person_photo}>
                                    <img src={picture}></img>
                                </div>
                                <div className={styles.person_info}>
                                    <p className={styles.person_name}>Зеньков Артем</p>
                                    <p className={styles.person_online}>15 октября</p>
                                </div>
                            </div>
                            <div onClick={() => setActive(8)} className={`${styles.person} ${active === 8 ? styles.active : ''}`}>
                                <div className={styles.person_photo}>
                                    <img src={picture}></img>
                                </div>
                                <div className={styles.person_info}>
                                    <p className={styles.person_name}>Зеньков Артем</p>
                                    <p className={styles.person_online}>15 октября</p>
                                </div>
                            </div>
                            <div onClick={() => setActive(9)} className={`${styles.person} ${active === 9 ? styles.active : ''}`}>
                                <div className={styles.person_photo}>
                                    <img src={picture}></img>
                                </div>
                                <div className={styles.person_info}>
                                    <p className={styles.person_name}>Зеньков Артем</p>
                                    <p className={styles.person_online}>15 октября</p>
                                </div>
                            </div>
                            <div onClick={() => setActive(10)} className={`${styles.person} ${active === 10 ? styles.active : ''}`}>
                                <div className={styles.person_photo}>
                                    <img src={picture}></img>
                                </div>
                                <div className={styles.person_info}>
                                    <p className={styles.person_name}>Зеньков Артем</p>
                                    <p className={styles.person_online}>15 октября</p>
                                </div>
                            </div>
                            <div onClick={() => setActive(11)} className={`${styles.person} ${active === 11 ? styles.active : ''}`}>
                                <div className={styles.person_photo}>
                                    <img src={picture}></img>
                                </div>
                                <div className={styles.person_info}>
                                    <p className={styles.person_name}>Зеньков Артем</p>
                                    <p className={styles.person_online}>15 октября</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.details}></div>
            </div>
        </Container>
    );
};

export default ApplicationsPage;