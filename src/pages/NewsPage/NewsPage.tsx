import React, {FC} from 'react';
import Container from "../Container/Container";
import styles from './NewPage.module.scss'
import picture from '../../images/TestNewsPicture2.png'
import picture2 from '../../images/TestNewsPicture.png'


const NewsPage:FC = () => {
    return (
        <Container>
            <div className={styles.content}>
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

        </Container>
    );
};

export default NewsPage;