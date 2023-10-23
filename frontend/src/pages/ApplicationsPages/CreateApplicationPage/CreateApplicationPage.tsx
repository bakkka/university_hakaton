import React, {FC} from 'react';
import Container from "../../Container/Container";
import {CreateApplication} from "../../../components/ApplicationComponent/StudentApplication/StudentApplication";

const CreateApplicationPage:FC = () => {
    return (
        <Container>
            <CreateApplication></CreateApplication>
        </Container>
    );
};

export default CreateApplicationPage;