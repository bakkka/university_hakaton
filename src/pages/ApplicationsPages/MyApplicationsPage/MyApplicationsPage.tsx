import React, {FC} from 'react';
import Container from "../../Container/Container";
import {MyApplications} from "../../../components/ApplicationComponent/StudentApplication/StudentApplication";

const MyApplicationsPage:FC = () => {
    return (
        <Container>
            <MyApplications></MyApplications>
        </Container>
    );
};

export default MyApplicationsPage;