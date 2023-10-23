import React, {FC, useState} from 'react';
import styles from './CoursesPage.module.scss'
import Container from "../../Container/Container";
import picture1 from '../../../images/TestPicture2.png'
import picture2 from '../../../images/TestPicture.png'
import InfoComponent from "../../../components/InfoComponent/InfoComponent";
import SearchBarComponent from "../../../components/SearchBarComponent/SearchBarComponent";
import picture from "../../../images/TestPicture2.png";
import ContactsComponent from "../../../components/ContactsComponent/ContactsComponent";
import ProgressComponent from "../../../components/ProgressComponent/ProgressComponent";
import TopicComponent from "../../../components/TopicComponent/TopicComponent";
import CoursesComponent from "../../../components/CoursesComponents/CoursesConstructor/CoursesComponent";
import {useTypedSelector} from "../../../hooks/redux";

const CoursesPage:FC = () => {
    const data = useTypedSelector(state => state.courseReducer.activeSections)
    const description = useTypedSelector(state => state.courseReducer.activeDescription)

    return (
        <CoursesComponent>
            <>
                <TopicComponent description = {description} type={'description'}></TopicComponent>
                {data.map((topic, index) => (
                    <TopicComponent data = {topic}></TopicComponent>
                ))}
            </>
        </CoursesComponent>
    );
};

export default CoursesPage;