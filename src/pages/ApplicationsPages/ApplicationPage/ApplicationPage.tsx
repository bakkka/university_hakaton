import React, {FC} from 'react';
import styles from './ApplicationPage.module.scss'
import Container from "../../Container/Container";
import {Application} from "../../../components/ApplicationComponent/СommissionApplication/CommissionApplication";
const ApplicationPage:FC = () => {
    return (
        <Container>
            <Application></Application>
        </Container>
    );
};

export default ApplicationPage;