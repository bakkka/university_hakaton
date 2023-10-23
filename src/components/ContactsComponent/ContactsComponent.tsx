import React, {FC, useEffect, useState} from 'react';
import styles from "../../components/ContactsComponent/ContactsComponent.module.scss";
import picture from "../../images/TestPicture2.png";
import {useLocation, useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../hooks/redux";
import User from "../../API's/User";
import {IGroup} from "../../types/UserResponse";

const ContactsComponent:FC = () => {
    const [active, setActive] = useState('')
    const [group, setGroup] = useState<IGroup>()
    const location = useLocation();
    const navigate = useNavigate();
    const myGroup = useTypedSelector(state => state.userReducer.data.group)

    const handleClick = (i:string) => {
        if (location.pathname === '/courses') {
            navigate('/chat');
        } else {
            setActive(i);
        }
    };
    useEffect( () => {
        if (location.pathname === '/courses') {
            (async () => {
                if (myGroup !== undefined) {
                    const response = await User.getGroupList(myGroup[0])
                    setGroup(response.data)
                }
            })();
        }
    }, []);
    return (
        <div className={styles.container}>
            {group?.content.map((person, index) => (
                <div key={person.id} onClick={() => handleClick(person.id)} className={`${styles.person} ${active === person.id ? styles.active : ''}`}>
                    <div className={styles.person_photo}>
                        <img src={picture}></img>
                    </div>
                    <div className={styles.person_info}>
                        <p className={styles.person_name}>{person.fullName}</p>
                        <p className={styles.person_online}>{myGroup}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactsComponent;