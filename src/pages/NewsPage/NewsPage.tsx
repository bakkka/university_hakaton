import React, {FC, useState} from 'react';
import Container from "../Container/Container";
import styles from './NewPage.module.scss'
import picture from '../../images/TestNewsPicture2.png'
import picture2 from '../../images/TestNewsPicture.png'
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import AcceptButton from "../../components/Buttons/AcceptButton/AcceptButton";


const NewsPage:FC = () => {
    const [createMode, setCreateMode] = useState(false)
    const [vertOrientation, setVertOrientation] = useState(false);
    return (
        <Container>
            {createMode ? (
                <div className={styles.content_upload}>
                    <ActionButton onClick={() => setCreateMode(false)}></ActionButton>
                    {vertOrientation ? (
                        <div className={styles.block_upload}>
                            <div className={styles.block_content_upload}>
                                <div className={styles.image_upload}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 3.99993V8.99993H4.582M4.582 8.99993C5.24585 7.35806 6.43568 5.98284 7.96503 5.08979C9.49438 4.19674 11.2768 3.83634 13.033 4.06507C14.7891 4.29379 16.4198 5.09872 17.6694 6.3537C18.919 7.60869 19.7168 9.24279 19.938 10.9999M4.582 8.99993H9M20 19.9999V14.9999H19.419M19.419 14.9999C18.7542 16.6408 17.564 18.015 16.0348 18.9072C14.5056 19.7995 12.7237 20.1594 10.9681 19.9308C9.21246 19.7022 7.5822 18.8978 6.33253 17.6437C5.08287 16.3895 4.28435 14.7564 4.062 12.9999M19.419 14.9999H15" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>.jpg</p>
                                </div>
                                <div className={styles.topic_upload}>Тема</div>
                                <div className={styles.title_upload}>Заголовок</div>
                                <div className={styles.description_upload}>Краткое описание новости, у которого есть Заголовок и Тема. Данный текст является наполнителем и ничем больше.</div>
                                <div className={styles.buttons}>
                                    <svg onClick={() => setVertOrientation(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 3.99993V8.99993H4.582M4.582 8.99993C5.24585 7.35806 6.43568 5.98284 7.96503 5.08979C9.49438 4.19674 11.2768 3.83634 13.033 4.06507C14.7891 4.29379 16.4198 5.09872 17.6694 6.3537C18.919 7.60869 19.7168 9.24279 19.938 10.9999M4.582 8.99993H9M20 19.9999V14.9999H19.419M19.419 14.9999C18.7542 16.6408 17.564 18.015 16.0348 18.9072C14.5056 19.7995 12.7237 20.1594 10.9681 19.9308C9.21246 19.7022 7.5822 18.8978 6.33253 17.6437C5.08287 16.3895 4.28435 14.7564 4.062 12.9999M19.419 14.9999H15" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <AcceptButton onClick={() => setCreateMode(false)}>Создать</AcceptButton>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.block2_upload}>
                            <div className={styles.block_content_upload}>
                                <div className={styles.image_upload}>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 16.5V17.5C4 18.2956 4.31607 19.0587 4.87868 19.6213C5.44129 20.1839 6.20435 20.5 7 20.5H17C17.7956 20.5 18.5587 20.1839 19.1213 19.6213C19.6839 19.0587 20 18.2956 20 17.5V16.5M16 8.5L12 4.5M12 4.5L8 8.5M12 4.5V16.5" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>.jpg</p>
                                </div>
                                <div className={styles.text_upload}>
                                    <div className={styles.topic_upload}>Тема</div>
                                    <div className={styles.title_upload}>Заголовок</div>
                                    <div className={styles.description_upload}>Краткое описание новости, у которого есть Заголовок и Тема. Данный текст является наполнителем и ничем больше.</div>
                                    <div className={styles.buttons}>
                                        <svg onClick={() => setVertOrientation(true)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 3.99993V8.99993H4.582M4.582 8.99993C5.24585 7.35806 6.43568 5.98284 7.96503 5.08979C9.49438 4.19674 11.2768 3.83634 13.033 4.06507C14.7891 4.29379 16.4198 5.09872 17.6694 6.3537C18.919 7.60869 19.7168 9.24279 19.938 10.9999M4.582 8.99993H9M20 19.9999V14.9999H19.419M19.419 14.9999C18.7542 16.6408 17.564 18.015 16.0348 18.9072C14.5056 19.7995 12.7237 20.1594 10.9681 19.9308C9.21246 19.7022 7.5822 18.8978 6.33253 17.6437C5.08287 16.3895 4.28435 14.7564 4.062 12.9999M19.419 14.9999H15" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                        <AcceptButton onClick={() => setCreateMode(false)}>Создать</AcceptButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className={styles.content}>
                    <ActionButton onClick={() => setCreateMode(true)}></ActionButton>
                    <div className={styles.block}>
                        <div className={styles.block_content}>
                            <div className={styles.image}>
                                <img src={picture}></img>
                            </div>
                            <div className={styles.topic}>Человек Бензопила</div>
                            <div className={styles.title}>Катя Кищук о своем  отношении к аниме Человек Бензопила</div>
                            <div className={styles.description}>Аниме "Человек Бензопила" - это уникальное произведение, которое оставило глубокий след в моем сердце. Это анимационный шедевр, сочетающий в себе все самое плохо от мира аниме.</div>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.block_content}>
                            <div className={styles.image}>
                                <img src={picture}></img>
                            </div>
                            <div className={styles.topic}>Человек Бензопила</div>
                            <div className={styles.title}>Катя Кищук о своем  отношении к аниме Человек Бензопила</div>
                            <div className={styles.description}>Аниме "Человек Бензопила" - это уникальное произведение, которое оставило глубокий след в моем сердце. Это анимационный шедевр, сочетающий в себе все самое плохо от мира аниме.</div>
                        </div>
                    </div>
                    <div className={styles.block2}>
                        <div className={styles.block_content}>
                            <div className={styles.image}>
                                <img src={picture2}></img>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.topic}>Человек Бензопила</div>
                                <div className={styles.title}>Макима призналась, что накачала свою жопу используя...</div>
                                <div className={styles.description}>Лицо Александра Логинова. А вы что думали? Самый главный фанат Макимы не мог остаться в стороне, предложив своей богине попрактиковаться в приседаниях над его светлым личикимо</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.block2}>
                        <div className={styles.block_content}>
                            <div className={styles.image}>
                                <img src={picture2}></img>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.topic}>Человек Бензопила</div>
                                <div className={styles.title}>Макима призналась, что накачала свою жопу используя...</div>
                                <div className={styles.description}>Лицо Александра Логинова. А вы что думали? Самый главный фанат Макимы не мог остаться в стороне, предложив своей богине попрактиковаться в приседаниях над его светлым личикимо</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.block_content}>
                            <div className={styles.image}>
                                <img src={picture}></img>
                            </div>
                            <div className={styles.topic}>Человек Бензопила</div>
                            <div className={styles.title}>Катя Кищук о своем  отношении к аниме Человек Бензопила</div>
                            <div className={styles.description}>Аниме "Человек Бензопила" - это уникальное произведение, которое оставило глубокий след в моем сердце. Это анимационный шедевр, сочетающий в себе все самое плохо от мира аниме.</div>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.block_content}>
                            <div className={styles.image}>
                                <img src={picture}></img>
                            </div>
                            <div className={styles.topic}>Человек Бензопила</div>
                            <div className={styles.title}>Катя Кищук о своем  отношении к аниме Человек Бензопила</div>
                            <div className={styles.description}>Аниме "Человек Бензопила" - это уникальное произведение, которое оставило глубокий след в моем сердце. Это анимационный шедевр, сочетающий в себе все самое плохо от мира аниме.</div>
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
};

export default NewsPage;