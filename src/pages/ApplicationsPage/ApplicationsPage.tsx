import React, {FC, useState} from 'react';
import Container from "../Container/Container";
import styles from './ApplicationsPage.module.scss'
import SearchBarComponent from "../../components/SearchBarComponent/SearchBarComponent";
import picture from "../../images/TestPicture2.png";
import applicationPicture from '../../images/Frame 955.png'
import ExperienceComponent from "../../components/ExperienceComponent/ExperienceComponent";
import AcceptButton from "../../components/Buttons/AcceptButton/AcceptButton";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import StudentApplication from "../../components/ApplicationComponent/StudentApplication/StudentApplication";
import CommissionApplication from "../../components/ApplicationComponent/СommissionApplication/CommissionApplication";
const ApplicationsPage:FC = () => {
    const [applicationMode, setApplicationMode] = useState<boolean>(false)
    const [studentMode, setStudentMode] = useState(false)
    const [helloWindow, setHelloWindow] = useState(true)
    const [applyStage, setApplyStage] = useState(1)
    const [listOpen, setListOpen] = useState(false);
    return (
        <Container>
                {studentMode ? (
                    <StudentApplication></StudentApplication>
                ) : (
                    <CommissionApplication></CommissionApplication>
                )}
        </Container>
    );
};

export default ApplicationsPage;