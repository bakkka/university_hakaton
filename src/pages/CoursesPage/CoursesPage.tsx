import React, {FC, useState} from 'react';
import styles from './CoursesPage.module.scss'
import Container from "../Container/Container";
import picture1 from '../../images/TestPicture2.png'
import picture2 from '../../images/TestPicture.png'
import InfoComponent from "../../components/InfoComponent/InfoComponent";
import SearchBarComponent from "../../components/SearchBarComponent/SearchBarComponent";
import picture from "../../images/TestPicture2.png";

const CoursesPage:FC = () => {
    const [active, setActive] = useState(0)
    const [trackPreviewMode, setTrackPreviewMode] = useState(true);
    return (
        <Container>
            <div className={styles.content}>
                <div className={styles.options}>
                    <div className={styles.progress}>
                        <div className={styles.progress_content}>
                            <div className={styles.search}>
                                <SearchBarComponent></SearchBarComponent>
                            </div>
                            <div className={styles.progress_main}>
                                <div onClick={() => setActive(1)} className={`${styles.lesson} ${active === 1 ? styles.active : ''}`}>
                                    <p className={styles.lesson_name}>Машинное обучение</p>
                                    <div className={styles.lesson_progress}>
                                        <div className={styles.progress_bar}></div>
                                        <p className={styles.progress_percentage}>50%</p>
                                    </div>
                                </div>
                                <div onClick={() => setActive(2)} className={`${styles.lesson} ${active === 2 ? styles.active : ''}`}>
                                    <p className={styles.lesson_name}>Машинное обучение</p>
                                    <div className={styles.lesson_progress}>
                                        <div className={styles.progress_bar}></div>
                                        <p className={styles.progress_percentage}>50%</p>
                                    </div>
                                </div>
                                <div onClick={() => setActive(3)} className={`${styles.lesson} ${active === 3 ? styles.active : ''}`}>
                                    <p className={styles.lesson_name}>Машинное обучение</p>
                                    <div className={styles.lesson_progress}>
                                        <div className={styles.progress_bar}></div>
                                        <p className={styles.progress_percentage}>50%</p>
                                    </div>
                                </div>
                                <div onClick={() => setActive(4)} className={`${styles.lesson} ${active === 4 ? styles.active : ''}`}>
                                    <p className={styles.lesson_name}>Машинное обучение</p>
                                    <div className={styles.lesson_progress}>
                                        <div className={styles.progress_bar}></div>
                                        <p className={styles.progress_percentage}>50%</p>
                                    </div>
                                </div>
                                <div onClick={() => setActive(5)} className={`${styles.lesson} ${active === 5 ? styles.active : ''}`}>
                                    <p className={styles.lesson_name}>Машинное обучение</p>
                                    <div className={styles.lesson_progress}>
                                        <div className={styles.progress_bar}></div>
                                        <p className={styles.progress_percentage}>50%</p>
                                    </div>
                                </div>
                                <div onClick={() => setActive(6)} className={`${styles.lesson} ${active === 6 ? styles.active : ''}`}>
                                    <p className={styles.lesson_name}>Машинное обучение</p>
                                    <div className={styles.lesson_progress}>
                                        <div className={styles.progress_bar}></div>
                                        <p className={styles.progress_percentage}>50%</p>
                                    </div>
                                </div>
                                <div onClick={() => setActive(7)} className={`${styles.lesson} ${active === 7 ? styles.active : ''}`}>
                                    <p className={styles.lesson_name}>Машинное обучение</p>
                                    <div className={styles.lesson_progress}>
                                        <div className={styles.progress_bar}></div>
                                        <p className={styles.progress_percentage}>50%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                <div className={styles.contacts_main}>
                                    <div className={styles.person}>
                                        <div className={styles.person_photo}>
                                            <img src={picture}></img>
                                        </div>
                                        <div className={styles.person_info}>
                                            <p className={styles.person_name}>Зеньков Артем</p>
                                            <p className={styles.person_group}>1395</p>
                                        </div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.9576 8.7152C14.0903 8.64869 14.2019 8.54657 14.2799 8.42026C14.3579 8.29395 14.3992 8.14844 14.3992 8C14.3992 7.85156 14.3579 7.70605 14.2799 7.57974C14.2019 7.45343 14.0903 7.35131 13.9576 7.2848L2.75762 1.6848C2.61875 1.61532 2.46266 1.58775 2.30839 1.60546C2.15412 1.62317 2.00834 1.6854 1.88883 1.78455C1.76933 1.8837 1.68126 2.01549 1.63537 2.16384C1.58949 2.31219 1.58777 2.47069 1.63042 2.62L2.77362 6.62C2.82144 6.78718 2.92243 6.93423 3.06129 7.03888C3.20016 7.14354 3.36934 7.2001 3.54322 7.2H7.20002C7.4122 7.2 7.61568 7.28429 7.76571 7.43431C7.91574 7.58434 8.00002 7.78783 8.00002 8C8.00002 8.21217 7.91574 8.41566 7.76571 8.56568C7.61568 8.71571 7.4122 8.8 7.20002 8.8H3.54322C3.36934 8.7999 3.20016 8.85646 3.06129 8.96112C2.92243 9.06577 2.82144 9.21282 2.77362 9.38L1.63122 13.38C1.58848 13.5293 1.5901 13.6877 1.63588 13.8361C1.68165 13.9845 1.76961 14.1163 1.88903 14.2155C2.00844 14.3147 2.15415 14.3771 2.30838 14.3949C2.46262 14.4128 2.61871 14.3853 2.75762 14.316L13.9576 8.716V8.7152Z" fill="#90A4AE"/>
                                        </svg>
                                    </div>
                                    <div className={styles.person}>
                                        <div className={styles.person_photo}>
                                            <img src={picture}></img>
                                        </div>
                                        <div className={styles.person_info}>
                                            <p className={styles.person_name}>Зеньков Артем</p>
                                            <p className={styles.person_group}>1386</p>
                                        </div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.9576 8.7152C14.0903 8.64869 14.2019 8.54657 14.2799 8.42026C14.3579 8.29395 14.3992 8.14844 14.3992 8C14.3992 7.85156 14.3579 7.70605 14.2799 7.57974C14.2019 7.45343 14.0903 7.35131 13.9576 7.2848L2.75762 1.6848C2.61875 1.61532 2.46266 1.58775 2.30839 1.60546C2.15412 1.62317 2.00834 1.6854 1.88883 1.78455C1.76933 1.8837 1.68126 2.01549 1.63537 2.16384C1.58949 2.31219 1.58777 2.47069 1.63042 2.62L2.77362 6.62C2.82144 6.78718 2.92243 6.93423 3.06129 7.03888C3.20016 7.14354 3.36934 7.2001 3.54322 7.2H7.20002C7.4122 7.2 7.61568 7.28429 7.76571 7.43431C7.91574 7.58434 8.00002 7.78783 8.00002 8C8.00002 8.21217 7.91574 8.41566 7.76571 8.56568C7.61568 8.71571 7.4122 8.8 7.20002 8.8H3.54322C3.36934 8.7999 3.20016 8.85646 3.06129 8.96112C2.92243 9.06577 2.82144 9.21282 2.77362 9.38L1.63122 13.38C1.58848 13.5293 1.5901 13.6877 1.63588 13.8361C1.68165 13.9845 1.76961 14.1163 1.88903 14.2155C2.00844 14.3147 2.15415 14.3771 2.30838 14.3949C2.46262 14.4128 2.61871 14.3853 2.75762 14.316L13.9576 8.716V8.7152Z" fill="#90A4AE"/>
                                        </svg>
                                    </div>
                                    <div className={styles.person}>
                                        <div className={styles.person_photo}>
                                            <img src={picture}></img>
                                        </div>
                                        <div className={styles.person_info}>
                                            <p className={styles.person_name}>Зеньков Артем</p>
                                            <p className={styles.person_group}>1387</p>
                                        </div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.9576 8.7152C14.0903 8.64869 14.2019 8.54657 14.2799 8.42026C14.3579 8.29395 14.3992 8.14844 14.3992 8C14.3992 7.85156 14.3579 7.70605 14.2799 7.57974C14.2019 7.45343 14.0903 7.35131 13.9576 7.2848L2.75762 1.6848C2.61875 1.61532 2.46266 1.58775 2.30839 1.60546C2.15412 1.62317 2.00834 1.6854 1.88883 1.78455C1.76933 1.8837 1.68126 2.01549 1.63537 2.16384C1.58949 2.31219 1.58777 2.47069 1.63042 2.62L2.77362 6.62C2.82144 6.78718 2.92243 6.93423 3.06129 7.03888C3.20016 7.14354 3.36934 7.2001 3.54322 7.2H7.20002C7.4122 7.2 7.61568 7.28429 7.76571 7.43431C7.91574 7.58434 8.00002 7.78783 8.00002 8C8.00002 8.21217 7.91574 8.41566 7.76571 8.56568C7.61568 8.71571 7.4122 8.8 7.20002 8.8H3.54322C3.36934 8.7999 3.20016 8.85646 3.06129 8.96112C2.92243 9.06577 2.82144 9.21282 2.77362 9.38L1.63122 13.38C1.58848 13.5293 1.5901 13.6877 1.63588 13.8361C1.68165 13.9845 1.76961 14.1163 1.88903 14.2155C2.00844 14.3147 2.15415 14.3771 2.30838 14.3949C2.46262 14.4128 2.61871 14.3853 2.75762 14.316L13.9576 8.716V8.7152Z" fill="#90A4AE"/>
                                        </svg>
                                    </div>
                                    <div className={styles.person}>
                                        <div className={styles.person_photo}>
                                            <img src={picture}></img>
                                        </div>
                                        <div className={styles.person_info}>
                                            <p className={styles.person_name}>Зеньков Артем</p>
                                            <p className={styles.person_group}>1387</p>
                                        </div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.9576 8.7152C14.0903 8.64869 14.2019 8.54657 14.2799 8.42026C14.3579 8.29395 14.3992 8.14844 14.3992 8C14.3992 7.85156 14.3579 7.70605 14.2799 7.57974C14.2019 7.45343 14.0903 7.35131 13.9576 7.2848L2.75762 1.6848C2.61875 1.61532 2.46266 1.58775 2.30839 1.60546C2.15412 1.62317 2.00834 1.6854 1.88883 1.78455C1.76933 1.8837 1.68126 2.01549 1.63537 2.16384C1.58949 2.31219 1.58777 2.47069 1.63042 2.62L2.77362 6.62C2.82144 6.78718 2.92243 6.93423 3.06129 7.03888C3.20016 7.14354 3.36934 7.2001 3.54322 7.2H7.20002C7.4122 7.2 7.61568 7.28429 7.76571 7.43431C7.91574 7.58434 8.00002 7.78783 8.00002 8C8.00002 8.21217 7.91574 8.41566 7.76571 8.56568C7.61568 8.71571 7.4122 8.8 7.20002 8.8H3.54322C3.36934 8.7999 3.20016 8.85646 3.06129 8.96112C2.92243 9.06577 2.82144 9.21282 2.77362 9.38L1.63122 13.38C1.58848 13.5293 1.5901 13.6877 1.63588 13.8361C1.68165 13.9845 1.76961 14.1163 1.88903 14.2155C2.00844 14.3147 2.15415 14.3771 2.30838 14.3949C2.46262 14.4128 2.61871 14.3853 2.75762 14.316L13.9576 8.716V8.7152Z" fill="#90A4AE"/>
                                        </svg>
                                    </div>
                                    <div className={styles.person}>
                                        <div className={styles.person_photo}>
                                            <img src={picture}></img>
                                        </div>
                                        <div className={styles.person_info}>
                                            <p className={styles.person_name}>Зеньков Артем</p>
                                            <p className={styles.person_group}>1387</p>
                                        </div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.9576 8.7152C14.0903 8.64869 14.2019 8.54657 14.2799 8.42026C14.3579 8.29395 14.3992 8.14844 14.3992 8C14.3992 7.85156 14.3579 7.70605 14.2799 7.57974C14.2019 7.45343 14.0903 7.35131 13.9576 7.2848L2.75762 1.6848C2.61875 1.61532 2.46266 1.58775 2.30839 1.60546C2.15412 1.62317 2.00834 1.6854 1.88883 1.78455C1.76933 1.8837 1.68126 2.01549 1.63537 2.16384C1.58949 2.31219 1.58777 2.47069 1.63042 2.62L2.77362 6.62C2.82144 6.78718 2.92243 6.93423 3.06129 7.03888C3.20016 7.14354 3.36934 7.2001 3.54322 7.2H7.20002C7.4122 7.2 7.61568 7.28429 7.76571 7.43431C7.91574 7.58434 8.00002 7.78783 8.00002 8C8.00002 8.21217 7.91574 8.41566 7.76571 8.56568C7.61568 8.71571 7.4122 8.8 7.20002 8.8H3.54322C3.36934 8.7999 3.20016 8.85646 3.06129 8.96112C2.92243 9.06577 2.82144 9.21282 2.77362 9.38L1.63122 13.38C1.58848 13.5293 1.5901 13.6877 1.63588 13.8361C1.68165 13.9845 1.76961 14.1163 1.88903 14.2155C2.00844 14.3147 2.15415 14.3771 2.30838 14.3949C2.46262 14.4128 2.61871 14.3853 2.75762 14.316L13.9576 8.716V8.7152Z" fill="#90A4AE"/>
                                        </svg>
                                    </div>
                                    <div className={styles.person}>
                                        <div className={styles.person_photo}>
                                            <img src={picture}></img>
                                        </div>
                                        <div className={styles.person_info}>
                                            <p className={styles.person_name}>Зеньков Артем</p>
                                            <p className={styles.person_group}>1387</p>
                                        </div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.9576 8.7152C14.0903 8.64869 14.2019 8.54657 14.2799 8.42026C14.3579 8.29395 14.3992 8.14844 14.3992 8C14.3992 7.85156 14.3579 7.70605 14.2799 7.57974C14.2019 7.45343 14.0903 7.35131 13.9576 7.2848L2.75762 1.6848C2.61875 1.61532 2.46266 1.58775 2.30839 1.60546C2.15412 1.62317 2.00834 1.6854 1.88883 1.78455C1.76933 1.8837 1.68126 2.01549 1.63537 2.16384C1.58949 2.31219 1.58777 2.47069 1.63042 2.62L2.77362 6.62C2.82144 6.78718 2.92243 6.93423 3.06129 7.03888C3.20016 7.14354 3.36934 7.2001 3.54322 7.2H7.20002C7.4122 7.2 7.61568 7.28429 7.76571 7.43431C7.91574 7.58434 8.00002 7.78783 8.00002 8C8.00002 8.21217 7.91574 8.41566 7.76571 8.56568C7.61568 8.71571 7.4122 8.8 7.20002 8.8H3.54322C3.36934 8.7999 3.20016 8.85646 3.06129 8.96112C2.92243 9.06577 2.82144 9.21282 2.77362 9.38L1.63122 13.38C1.58848 13.5293 1.5901 13.6877 1.63588 13.8361C1.68165 13.9845 1.76961 14.1163 1.88903 14.2155C2.00844 14.3147 2.15415 14.3771 2.30838 14.3949C2.46262 14.4128 2.61871 14.3853 2.75762 14.316L13.9576 8.716V8.7152Z" fill="#90A4AE"/>
                                        </svg>
                                    </div>
                                    <div className={styles.person}>
                                        <div className={styles.person_photo}>
                                            <img src={picture}></img>
                                        </div>
                                        <div className={styles.person_info}>
                                            <p className={styles.person_name}>Зеньков Артем</p>
                                            <p className={styles.person_group}>1387</p>
                                        </div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.9576 8.7152C14.0903 8.64869 14.2019 8.54657 14.2799 8.42026C14.3579 8.29395 14.3992 8.14844 14.3992 8C14.3992 7.85156 14.3579 7.70605 14.2799 7.57974C14.2019 7.45343 14.0903 7.35131 13.9576 7.2848L2.75762 1.6848C2.61875 1.61532 2.46266 1.58775 2.30839 1.60546C2.15412 1.62317 2.00834 1.6854 1.88883 1.78455C1.76933 1.8837 1.68126 2.01549 1.63537 2.16384C1.58949 2.31219 1.58777 2.47069 1.63042 2.62L2.77362 6.62C2.82144 6.78718 2.92243 6.93423 3.06129 7.03888C3.20016 7.14354 3.36934 7.2001 3.54322 7.2H7.20002C7.4122 7.2 7.61568 7.28429 7.76571 7.43431C7.91574 7.58434 8.00002 7.78783 8.00002 8C8.00002 8.21217 7.91574 8.41566 7.76571 8.56568C7.61568 8.71571 7.4122 8.8 7.20002 8.8H3.54322C3.36934 8.7999 3.20016 8.85646 3.06129 8.96112C2.92243 9.06577 2.82144 9.21282 2.77362 9.38L1.63122 13.38C1.58848 13.5293 1.5901 13.6877 1.63588 13.8361C1.68165 13.9845 1.76961 14.1163 1.88903 14.2155C2.00844 14.3147 2.15415 14.3771 2.30838 14.3949C2.46262 14.4128 2.61871 14.3853 2.75762 14.316L13.9576 8.716V8.7152Z" fill="#90A4AE"/>
                                        </svg>
                                    </div>
                                    <div className={styles.person}>
                                        <div className={styles.person_photo}>
                                            <img src={picture}></img>
                                        </div>
                                        <div className={styles.person_info}>
                                            <p className={styles.person_name}>Зеньков Артем</p>
                                            <p className={styles.person_group}>1387</p>
                                        </div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.9576 8.7152C14.0903 8.64869 14.2019 8.54657 14.2799 8.42026C14.3579 8.29395 14.3992 8.14844 14.3992 8C14.3992 7.85156 14.3579 7.70605 14.2799 7.57974C14.2019 7.45343 14.0903 7.35131 13.9576 7.2848L2.75762 1.6848C2.61875 1.61532 2.46266 1.58775 2.30839 1.60546C2.15412 1.62317 2.00834 1.6854 1.88883 1.78455C1.76933 1.8837 1.68126 2.01549 1.63537 2.16384C1.58949 2.31219 1.58777 2.47069 1.63042 2.62L2.77362 6.62C2.82144 6.78718 2.92243 6.93423 3.06129 7.03888C3.20016 7.14354 3.36934 7.2001 3.54322 7.2H7.20002C7.4122 7.2 7.61568 7.28429 7.76571 7.43431C7.91574 7.58434 8.00002 7.78783 8.00002 8C8.00002 8.21217 7.91574 8.41566 7.76571 8.56568C7.61568 8.71571 7.4122 8.8 7.20002 8.8H3.54322C3.36934 8.7999 3.20016 8.85646 3.06129 8.96112C2.92243 9.06577 2.82144 9.21282 2.77362 9.38L1.63122 13.38C1.58848 13.5293 1.5901 13.6877 1.63588 13.8361C1.68165 13.9845 1.76961 14.1163 1.88903 14.2155C2.00844 14.3147 2.15415 14.3771 2.30838 14.3949C2.46262 14.4128 2.61871 14.3853 2.75762 14.316L13.9576 8.716V8.7152Z" fill="#90A4AE"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <InfoComponent type={'куратор'}></InfoComponent>
                </div>
                <div className={styles.main}></div>
            </div>
        </Container>
    );
};

export default CoursesPage;