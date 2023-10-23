import React, {FC, useEffect, useState} from 'react';
import styles from './CommissionApplication.module.scss'
import applicationPicture from "../../../images/Frame 955.png";
import AcceptButton from "../../Buttons/AcceptButton/AcceptButton";
import ExperienceComponent from "../../ExperienceComponent/ExperienceComponent";
import picture from "../../../images/TestPicture2.png";
import CancelButton from "../../Buttons/CancelButton/CancelButton";
import YellowStatus from "../../Statuses/YellowStatus";
import Applications from "../../../API's/Applications";
import {application, IApplication} from "../../../types/ApplicationsResponse";
import {useTypedSelector} from "../../../hooks/redux";
import GreenStatus from "../../Statuses/GreenStatus";
import RedStatus from "../../Statuses/RedStatus";
import BlueStatus from "../../Statuses/BlueStatus";
import {useNavigate, useParams} from "react-router-dom";
import app from "../../../App";

export const Application:FC = () => {
    const { applicationId } = useParams();
    const navigate = useNavigate()
    const role = useTypedSelector(state => state.userReducer.data.authority[0])
    const [application, setApplication] = useState<application>()
    useEffect( () => {
        if(role === 'ROLE_SUPERVISOR' && applicationId) {
            (async () => {
                const response = await Applications.getSupervisorApplication(applicationId)
                setApplication(response.data)
            })();
        } else if(role === 'ROLE_ADMISSION' && applicationId){
            (async () => {
                const response = await Applications.getAdmissionApplication(applicationId)
                setApplication(response.data)
            })();
        }
    }, []);
    const approveHandler = (id:string) => {
        if(role === 'ROLE_SUPERVISOR') {
            (async () => {
                const response = await Applications.approveSupervisorApplication(id)
                console.log(response.data)
            })();
        } else if(role === 'ROLE_ADMISSION'){
            (async () => {
                const response = await Applications.approveAdmissionApplication(id)
                console.log(response.data)
            })();
        }
    }
    const rejectHandler = (id:string) => {
        if(role === 'ROLE_SUPERVISOR') {
            (async () => {
                const response = await Applications.rejectSupervisorApplication(id)
                console.log(response.data)
            })();
        } else if(role === 'ROLE_ADMISSION'){
            (async () => {
                const response = await Applications.rejectAdmissionApplication(id)
                console.log(response.data)
            })();
        }
    }
    return (
        <div className={styles.content}>
            <div className={styles.application}>
                    <div className={styles.application_main}>
                        <div className={styles.main_content}>
                            <div className={styles.content_header}>
                                <p className={styles.header_name}>{application?.fullName}</p>
                                <div className={styles.header_options}>
                                    <div className={styles.options_block}>
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 3.50002C17.9999 3.32962 17.9563 3.16208 17.8733 3.01329C17.7902 2.86449 17.6706 2.73938 17.5256 2.64982C17.3806 2.56026 17.2152 2.50923 17.045 2.50156C16.8748 2.4939 16.7054 2.52985 16.553 2.60602L8.763 6.50002H5C4.20435 6.50002 3.44129 6.81609 2.87868 7.3787C2.31607 7.9413 2 8.70437 2 9.50002C2 10.2957 2.31607 11.0587 2.87868 11.6213C3.44129 12.1839 4.20435 12.5 5 12.5H5.28L7.051 17.816C7.11735 18.0152 7.24472 18.1885 7.41505 18.3113C7.58538 18.434 7.79004 18.5001 8 18.5H9C9.26522 18.5 9.51957 18.3947 9.70711 18.2071C9.89464 18.0196 10 17.7652 10 17.5V13.118L16.553 16.394C16.7054 16.4702 16.8748 16.5061 17.045 16.4985C17.2152 16.4908 17.3806 16.4398 17.5256 16.3502C17.6706 16.2607 17.7902 16.1355 17.8733 15.9867C17.9563 15.8379 17.9999 15.6704 18 15.5V3.50002Z" fill="#90A4AE"/>
                                        </svg>
                                        <p>{application?.supervisorFullName}</p>
                                    </div>
                                    <div className={styles.options_block}>
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4.5C4 3.96957 4.21071 3.46086 4.58579 3.08579C4.96086 2.71071 5.46957 2.5 6 2.5H14C14.5304 2.5 15.0391 2.71071 15.4142 3.08579C15.7893 3.46086 16 3.96957 16 4.5V16.5C16.2652 16.5 16.5196 16.6054 16.7071 16.7929C16.8946 16.9804 17 17.2348 17 17.5C17 17.7652 16.8946 18.0196 16.7071 18.2071C16.5196 18.3946 16.2652 18.5 16 18.5H13C12.7348 18.5 12.4804 18.3946 12.2929 18.2071C12.1054 18.0196 12 17.7652 12 17.5V15.5C12 15.2348 11.8946 14.9804 11.7071 14.7929C11.5196 14.6054 11.2652 14.5 11 14.5H9C8.73478 14.5 8.48043 14.6054 8.29289 14.7929C8.10536 14.9804 8 15.2348 8 15.5V17.5C8 17.7652 7.89464 18.0196 7.70711 18.2071C7.51957 18.3946 7.26522 18.5 7 18.5H4C3.73478 18.5 3.48043 18.3946 3.29289 18.2071C3.10536 18.0196 3 17.7652 3 17.5C3 17.2348 3.10536 16.9804 3.29289 16.7929C3.48043 16.6054 3.73478 16.5 4 16.5V4.5ZM7 5.5H9V7.5H7V5.5ZM9 9.5H7V11.5H9V9.5ZM11 5.5H13V7.5H11V5.5ZM13 9.5H11V11.5H13V9.5Z" fill="#90A4AE"/>
                                        </svg>
                                        <p>{application?.direction}</p>
                                    </div>
                                    <div className={styles.options_block}>
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 6.5V5.5C6 4.70435 6.31607 3.94129 6.87868 3.37868C7.44129 2.81607 8.20435 2.5 9 2.5H11C11.7956 2.5 12.5587 2.81607 13.1213 3.37868C13.6839 3.94129 14 4.70435 14 5.5V6.5H16C16.5304 6.5 17.0391 6.71071 17.4142 7.08579C17.7893 7.46086 18 7.96957 18 8.5V12.07C15.4396 13.0187 12.7305 13.503 10 13.5C7.2695 13.503 4.56037 13.0188 2 12.07V8.5C2 7.96957 2.21071 7.46086 2.58579 7.08579C2.96086 6.71071 3.46957 6.5 4 6.5H6ZM8 5.5C8 5.23478 8.10536 4.98043 8.29289 4.79289C8.48043 4.60536 8.73478 4.5 9 4.5H11C11.2652 4.5 11.5196 4.60536 11.7071 4.79289C11.8946 4.98043 12 5.23478 12 5.5V6.5H8V5.5ZM9 10.5C9 10.2348 9.10536 9.98043 9.29289 9.79289C9.48043 9.60536 9.73478 9.5 10 9.5H10.01C10.2752 9.5 10.5296 9.60536 10.7171 9.79289C10.9046 9.98043 11.01 10.2348 11.01 10.5C11.01 10.7652 10.9046 11.0196 10.7171 11.2071C10.5296 11.3946 10.2752 11.5 10.01 11.5H10C9.73478 11.5 9.48043 11.3946 9.29289 11.2071C9.10536 11.0196 9 10.7652 9 10.5Z" fill="#90A4AE"/>
                                            <path d="M2 14.192V16.5C2 17.0304 2.21071 17.5392 2.58579 17.9142C2.96086 18.2893 3.46957 18.5 4 18.5H16C16.5304 18.5 17.0391 18.2893 17.4142 17.9142C17.7893 17.5392 18 17.0304 18 16.5V14.192C15.4224 15.0608 12.7201 15.5026 10 15.5C7.204 15.5 4.513 15.04 2 14.192Z" fill="#90A4AE"/>
                                        </svg>
                                        <p>{application?.position}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.content_main}>
                                <p>{application?.letter}</p>
                                <img src={applicationPicture}></img>
                            </div>
                            <div className={styles.content_footer}>
                                <p>{application?.achievements}</p>
                            </div>
                            <div className={styles.content_buttons}>
                                <YellowStatus>ожидает</YellowStatus>
                                <div className={styles.buttons}>
                                    <CancelButton onClick={() => application?.id && rejectHandler(application?.id)}>отклонить</CancelButton>
                                    <AcceptButton onClick={() => application?.id && approveHandler(application?.id)}>Принять</AcceptButton>
                                </div>
                            </div>
                        </div>
                    </div>
                {application && (
                    <ExperienceComponent data={application}></ExperienceComponent>
                )}
                </div>
        </div>
    );
};

export const ApplicationList:FC = () => {
    const [applications, setApplications] = useState<IApplication>()
    const navigate = useNavigate()
    const role = useTypedSelector(state => state.userReducer.data.authority[0])

    const handler = (id:string) => {
        navigate(`/application/${id}`)
    }
    useEffect( () => {
        if(role === 'ROLE_SUPERVISOR') {
            (async () => {
                const response = await Applications.getSupervisorApplicationList()
                setApplications(response.data)
            })();
        } else if(role === 'ROLE_ADMISSION'){
            (async () => {
                const response = await Applications.getAdmissionApplicationList()
                setApplications(response.data)
            })();
        }
    }, []);
    function formatDate(inputDate:string) {
        const dateObject = new Date(inputDate);
        const day = dateObject.getUTCDate();
        const month = dateObject.getUTCMonth() + 1;
        const year = dateObject.getUTCFullYear();


        const addLeadingZero = (value:number) => (value < 10 ? `0${value}` : value);

        return `${addLeadingZero(day)}/${addLeadingZero(month)}/${year}`;
    }
    return (
        <div className={styles.content}>
            <div className={styles.list}>
                <div className={styles.list_content}>
                    <table>
                        <thead>
                        <tr>
                            <th>ФИО</th>
                            <th>Отделение</th>
                            <th>Должность</th>
                            <th>Руководитель</th>
                            <th>Дата</th>
                            <th>Статус</th>
                        </tr>
                        </thead>
                        <tbody>
                        {applications?.content.map((application, index) => (
                            <tr key={index} onClick={() => handler(application.id)}>
                                <td className={styles.name}>
                                    <div>
                                        <img src={picture}></img>
                                        <p>{application.fullName}</p>
                                    </div>
                                </td>
                                <td className={styles.track}>{application.direction}</td>
                                <td className={styles.position}>{application.position}</td>
                                <td className={styles.headmaster}>{application.supervisorFullName}</td>
                                <td className={styles.date}>{formatDate(application.date)}</td>
                                <td className={styles.status}>
                                    {application.status === 'WAITING' ? (
                                        <YellowStatus>ожидает</YellowStatus>
                                    ) : application.status === 'APPROVED' ? (
                                        <GreenStatus>принято</GreenStatus>
                                    ) : application.status === 'REJECTED_BY_SUPERVISOR' || application.status === 'REJECTED_BY_ADMISSION' || application.status === 'REJECTED' ? (
                                        <RedStatus>отклонено</RedStatus>
                                    )  : application.status === 'PENDING' ? (
                                        <BlueStatus>рассмотрение</BlueStatus>
                                    ) : null}
                                </td>
                            </tr>
                        ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};