import React, {FC, useEffect, useState} from 'react';
import styles from "../InfoComponent/InfoComponent.module.scss";
import picture from "../../images/TestPicture2.png";
import User from "../../API's/User";
import {useTypedSelector} from "../../hooks/redux";
import {ICurator} from "../../types/UserResponse";

interface props{
    type?:string;
}

const InfoComponent:FC<props> = (props) => {
    const dirTitle = useTypedSelector(state => state.userReducer.data.direction)
    const user = useTypedSelector(state => state.userReducer.data)
    const [data, setData] = useState<ICurator>()
    useEffect( () => {
        (async () => {
            if(dirTitle) {
                const response = await User.getCurator(dirTitle)
                setData(response.data)
            }
        })();
    }, []);
    return (
        <div className={styles.info}>
            <div className={styles.info_content}>
                <div className={styles.person}>
                    <div className={styles.person_photo}>
                        <img src={picture}></img>
                    </div>
                    <div className={styles.person_info}>
                        <p className={styles.person_name}>{props.type === 'куратор' ? data?.fullName : user.full_name}</p>
                        <p className={styles.person_online}>{props.type || 'студент'}</p>
                    </div>
                </div>
                <div className={styles.line}></div>
                {props.type !== 'куратор' ? (
                    <div className={styles.info_block}>
                        <div className={styles.svg_block}>
                            <svg width="18" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 6C13 6.79565 12.6839 7.55871 12.1213 8.12132C11.5587 8.68393 10.7956 9 10 9C9.20435 9 8.44129 8.68393 7.87868 8.12132C7.31607 7.55871 7 6.79565 7 6C7 5.20435 7.31607 4.44129 7.87868 3.87868C8.44129 3.31607 9.20435 3 10 3C10.7956 3 11.5587 3.31607 12.1213 3.87868C12.6839 4.44129 13 5.20435 13 6ZM18 8C18 8.53043 17.7893 9.03914 17.4142 9.41421C17.0391 9.78929 16.5304 10 16 10C15.4696 10 14.9609 9.78929 14.5858 9.41421C14.2107 9.03914 14 8.53043 14 8C14 7.46957 14.2107 6.96086 14.5858 6.58579C14.9609 6.21071 15.4696 6 16 6C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8ZM14 15C14 13.9391 13.5786 12.9217 12.8284 12.1716C12.0783 11.4214 11.0609 11 10 11C8.93913 11 7.92172 11.4214 7.17157 12.1716C6.42143 12.9217 6 13.9391 6 15V18H14V15ZM6 8C6 8.53043 5.78929 9.03914 5.41421 9.41421C5.03914 9.78929 4.53043 10 4 10C3.46957 10 2.96086 9.78929 2.58579 9.41421C2.21071 9.03914 2 8.53043 2 8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6C4.53043 6 5.03914 6.21071 5.41421 6.58579C5.78929 6.96086 6 7.46957 6 8ZM16 18V15C16.0014 13.9833 15.7433 12.983 15.25 12.094C15.6933 11.9805 16.1568 11.9698 16.6049 12.0627C17.053 12.1556 17.474 12.3496 17.8357 12.6299C18.1974 12.9102 18.4903 13.2695 18.6921 13.6802C18.8939 14.091 18.9992 14.5424 19 15V18H16ZM4.75 12.094C4.25675 12.983 3.9986 13.9833 4 15V18H1V15C0.999808 14.542 1.10446 14.0901 1.30595 13.6789C1.50743 13.2676 1.80039 12.9079 2.16238 12.6274C2.52437 12.3469 2.94578 12.153 3.39431 12.0605C3.84284 11.9681 4.30658 11.9795 4.75 12.094Z" fill="#90A4AE"/>
                            </svg>
                        </div>
                        <p>1375</p>
                    </div>
                ) : null}
                <div className={styles.info_block}>
                    <div className={styles.svg_block}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H3.153C3.38971 0.000108969 3.6187 0.0841807 3.79924 0.23726C3.97979 0.390339 4.10018 0.602499 4.139 0.836L4.879 5.271C4.91436 5.48222 4.88097 5.69921 4.78376 5.89003C4.68655 6.08085 4.53065 6.23543 4.339 6.331L2.791 7.104C3.34611 8.47965 4.17283 9.72928 5.22178 10.7782C6.27072 11.8272 7.52035 12.6539 8.896 13.209L9.67 11.661C9.76552 11.4695 9.91994 11.3138 10.1106 11.2166C10.3012 11.1194 10.5179 11.0859 10.729 11.121L15.164 11.861C15.3975 11.8998 15.6097 12.0202 15.7627 12.2008C15.9158 12.3813 15.9999 12.6103 16 12.847V15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H13C5.82 16 0 10.18 0 3V1Z" fill="#90A4AE"/>
                        </svg>
                    </div>
                    <p>{props.type === 'куратор' ? data?.phoneNumber : user.phone_number}</p>
                </div>
                <div className={styles.info_block}>
                    <div className={styles.svg_block}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H12C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0H2ZM2 2H12V9H10L9 11H5L4 9H2V2Z" fill="#90A4AE"/>
                        </svg>
                    </div>
                    <p>{props.type === 'куратор' ? data?.email : user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoComponent;