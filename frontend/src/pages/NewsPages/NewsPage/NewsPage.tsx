import React, {FC, useEffect, useState} from 'react';
import Container from "../../Container/Container";
import styles from './NewPage.module.scss'
import picture from '../../../images/TestNewsPicture2.png'
import picture2 from '../../../images/TestNewsPicture.png'
import ActionButton from "../../../components/Buttons/ActionButton/ActionButton";
import AcceptButton from "../../../components/Buttons/AcceptButton/AcceptButton";
import Schedule from "../../../API's/Schedule";
import News from "../../../API's/News";
import {INews} from "../../../types/NewsResponse";
import {useAppDispatch} from "../../../hooks/redux";
import {errorDrop} from "../../../store/reducers/UserSlice";


const NewsPage:FC = () => {
    const [vertOrientation, setVertOrientation] = useState(false);
    const [data, setData] = useState<INews>()

    const dispatch = useAppDispatch()
    useEffect( () => {
        (async () => {
            try {
                const response = await News.getNews()
                setData(response.data)
            }
            catch (e){
                dispatch(errorDrop())
            }
        })();
    }, []);
    return (
        <Container>
                <div className={styles.content}>
                    {data?.content.map((newsBlock, index) => (
                        <div className={newsBlock.type === 'HORIZONTAL' ?  styles.block2 : styles.block}>
                            <div className={styles.block_content}>
                                <div className={styles.image}>
                                    <img src={newsBlock.imgUrl}></img>
                                </div>
                                <div className={styles.topic}>{newsBlock.topic}</div>
                                <div className={styles.title}>{newsBlock.header}</div>
                                <div className={styles.description}>{newsBlock.subtitle}</div>
                            </div>
                        </div>
                    ))}
                </div>
        </Container>
    );
};

export default NewsPage;