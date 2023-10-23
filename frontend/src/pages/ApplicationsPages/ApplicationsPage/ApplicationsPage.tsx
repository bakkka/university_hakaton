import React, {FC, useState} from 'react';
import Container from "../../Container/Container";
import {ApplicationList} from "../../../components/ApplicationComponent/СommissionApplication/CommissionApplication";
const ApplicationsPage:FC = () => {

    return (
        <Container>
            <ApplicationList></ApplicationList>
        </Container>
    );
};

export default ApplicationsPage;