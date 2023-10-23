import React, {FC, useState} from 'react';
import styles from './ChatPage.module.scss'
import Container from "../Container/Container";
import picture from '../../images/TestPicture2.png'
import InfoComponent from "../../components/InfoComponent/InfoComponent";
import SearchBarComponent from "../../components/SearchBarComponent/SearchBarComponent";
import ContactsComponent from "../../components/ContactsComponent/ContactsComponent";
import UnavailablePageComponent from "../../components/UnavailablePageComponent/UnavailablePageComponent";
const ChatPage:FC = () => {
    const [active, setActive] = useState(0)
    return (
                <Container>
                    <div className={styles.content}>
                        <div className={styles.contacts}>
                            <div className={styles.contacts_content}>
                                <div className={styles.search}>
                                    <SearchBarComponent ></SearchBarComponent>
                                </div>
                                <div className={styles.contacts_main}>
                                    <ContactsComponent></ContactsComponent>
                                </div>
                            </div>
                        </div>
                        <div className={styles.chat}></div>
                        <InfoComponent></InfoComponent>
                    </div>
                </Container>
    );
};

export default ChatPage;