import React, {FC, useState} from 'react';
import styles from './CoursesPage.module.scss'
import Container from "../Container/Container";
import picture1 from '../../images/TestPicture2.png'
import picture2 from '../../images/TestPicture.png'
import InfoComponent from "../../components/InfoComponent/InfoComponent";
import SearchBarComponent from "../../components/SearchBarComponent/SearchBarComponent";
import picture from "../../images/TestPicture2.png";
import ContactsComponent from "../../components/ContactsComponent/ContactsComponent";
import ProgressComponent from "../../components/ProgressComponent/ProgressComponent";
import TopicComponent from "../../components/TopicComponent/TopicComponent";

const CoursesPage:FC = () => {
    const [active, setActive] = useState(0)
    const [trackPreviewMode, setTrackPreviewMode] = useState(true);
    return (
        <Container>
            <div className={styles.content}>
                <div className={styles.options}>
                    <ProgressComponent type={'course'} maxHeight={460}></ProgressComponent>
                    {trackPreviewMode ? (
                        <div className={styles.track_preview}>
                            <div className={styles.track_content}>
                                <div className={styles.track_name}>Информационные системы и технологии</div>
                                <div onClick={() => setTrackPreviewMode(false)} className={styles.track_students}>
                                    <img src={picture2}></img>
                                    <img src={picture2}></img>
                                    <img src={picture2}></img>
                                    <img src={picture2}></img>
                                    <img src={picture2}></img>
                                    <img src={picture2}></img>
                                    <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292787 0.299246C0.480314 0.111775 0.734622 0.00645932 0.999786 0.00645932C1.26495 0.00645932 1.51926 0.111775 1.70679 0.299246L4.99979 3.59225L8.29279 0.299246C8.38503 0.203736 8.49538 0.127553 8.61738 0.0751444C8.73939 0.0227354 8.87061 -0.00485091 9.00339 -0.00600472C9.13616 -0.00715854 9.26784 0.018143 9.39074 0.0684238C9.51364 0.118705 9.62529 0.192958 9.71918 0.286851C9.81307 0.380743 9.88733 0.492395 9.93761 0.615292C9.98789 0.738188 10.0132 0.869868 10.012 1.00265C10.0109 1.13543 9.9833 1.26665 9.93089 1.38865C9.87848 1.51065 9.8023 1.621 9.70679 1.71325L5.70679 5.71325C5.51926 5.90072 5.26495 6.00603 4.99979 6.00603C4.73462 6.00603 4.48031 5.90072 4.29279 5.71325L0.292787 1.71325C0.105316 1.52572 0 1.27141 0 1.00625C0 0.741082 0.105316 0.486774 0.292787 0.299246Z" fill="#212121"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.track}>
                            <div className={styles.track_content}>
                                <p className={styles.track_name}>Информационные системы и технологии, 1375</p>
                                <div className={styles.search}>
                                    <SearchBarComponent position={'left'}></SearchBarComponent>
                                </div>
                                <div className={styles.line}></div>
                                <div className={styles.contacts_main}>
                                    <ContactsComponent></ContactsComponent>
                                </div>
                            </div>
                        </div>
                    )}
                    <InfoComponent type={'куратор'}></InfoComponent>
                </div>
                <div className={styles.main}>
                    <div className={styles.main_content}>
                        <div className={styles.content_header}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6.66667 12.6667L2 8M2 8L6.66667 3.33333M2 8H14" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Машинное обучение</p>
                        </div>
                        <TopicComponent type={'description'}></TopicComponent>
                        <TopicComponent></TopicComponent>
                        <TopicComponent></TopicComponent>
                        <TopicComponent></TopicComponent>
                        <TopicComponent></TopicComponent>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CoursesPage;