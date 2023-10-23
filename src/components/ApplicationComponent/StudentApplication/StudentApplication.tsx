import React, {FC, useEffect, useState} from 'react';
import styles from './StudentApplication.module.scss'
import AcceptButton from "../../Buttons/AcceptButton/AcceptButton";
import GreenStatus from "../../Statuses/GreenStatus";
import CancelButton from "../../Buttons/CancelButton/CancelButton";
import {useTypedSelector} from "../../../hooks/redux";
import User from "../../../API's/User";
import {direction, IDirections} from "../../../types/UserResponse";
import {useNavigate} from "react-router-dom";
import app from "../../../App";
import Applications from "../../../API's/Applications";
import {application, IApplication, IApplicationCreate} from "../../../types/ApplicationsResponse";
import Schedule from "../../../API's/Schedule";
import YellowStatus from "../../Statuses/YellowStatus";
import RedStatus from "../../Statuses/RedStatus";

export const CreateApplication:FC = () => {
    const [helloWindow, setHelloWindow] = useState(true)
    const [applyStage, setApplyStage] = useState(1)

    const [directions, setDirections] = useState<IDirections>();
    const [chosenDirection, setChosenDirection] = useState<direction>()
    const [motivationSpeech, setMotivationSpeech] = useState('')
    const [experience, setExperience] = useState('')

    const [listOpen, setListOpen] = useState(false);

    const auth = useTypedSelector(state => state.userReducer.isAuth)
    const navigate = useNavigate();

    useEffect( () => {
        try {
            (async () => {
                const response = await User.getDirections();
                setDirections(response.data)
            })();
        }catch (e){
            console.log(e)
        }
    }, []);
    const setApplyStageHandler = async () => {
        if(applyStage === 3 && chosenDirection){
            const data : IApplicationCreate = {
                supervisorFullName:'',
                direction:chosenDirection.title,
                letter:motivationSpeech,
                achievements:experience
            }
            try {
                const response = await Applications.createApplication(data);
                console.log(response.data)
            } catch (e){
                console.log(e)
            }
        } else{
            setApplyStage(applyStage + 1)
        }
    }
    const setTextareaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if(applyStage === 2){
            setMotivationSpeech(e.target.value)
        } else if(applyStage === 3){
            setExperience(e.target.value)
        }

    }
    const chooseDirectionHandler = (direction?:direction) => {
        if(direction) {
            setChosenDirection(direction);
        }
        setListOpen(!listOpen)
    }
    const endApplying = () => {
        navigate('..');
    }

    return (
        <div className={styles.content}>
                    {helloWindow ? (
                        <div className={styles.helloWindow}>
                            <div className={styles.helloWindow_content}>
                                <p>Корпоративный Университета прямо здесь и сейчас!</p>
                                <p>Желаете ли вы подать заявку на поступление в корпоративный университет, выбрать направление обучения и стремиться к профессиональному совершенствованию, развитию и успеху?</p>
                                <div className={styles.buttons}>
                                    <AcceptButton onClick={() => setHelloWindow(false)}>поехали</AcceptButton>
                                </div>
                            </div>
                        </div>
                    ) : applyStage !== 4 ?(
                        <div style={applyStage === 1 ? {height:'434px'} : {}} className={styles.applyWindow}>
                            <div className={styles.applyWindow_content}>
                                <div className={styles.visualisation}>
                                    <div className={styles.visualisation_block}>
                                        <div className={styles.blockSvgActive}>
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="academic-cap">
                                                    <path id="Vector" d="M12.5 14L21.5 9L12.5 4L3.5 9L12.5 14Z" stroke="#212121"/>
                                                    <path id="Vector_2" d="M12.5001 14.0001L18.6601 10.5781C19.4706 12.6362 19.7006 14.8773 19.3251 17.0571C16.7886 17.3033 14.3973 18.3537 12.5001 20.0551C10.6031 18.3539 8.21216 17.3035 5.67608 17.0571C5.30028 14.8773 5.53031 12.6362 6.34108 10.5781L12.5001 14.0001Z" stroke="#212121"/>
                                                    <path id="Vector_3" d="M12.5 14L21.5 9L12.5 4L3.5 9L12.5 14ZM12.5 14L18.66 10.578C19.4705 12.6361 19.7005 14.8772 19.325 17.057C16.7886 17.3032 14.3972 18.3536 12.5 20.055C10.6031 18.3538 8.21208 17.3034 5.676 17.057C5.3002 14.8772 5.53023 12.636 6.341 10.578L12.5 14ZM8.5 20V12.5L12.5 10.278" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                            </svg>
                                        </div>
                                        <p>Шаг 1</p>
                                    </div>
                                    <div className={styles.lineActive}></div>
                                    <div className={styles.visualisation_block}>
                                        <div className={applyStage === 2 || applyStage === 3 ? styles.blockSvgActive : styles.blockSvg}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path id="Vector" d="M1 16.5963V7.6663C0.999951 7.33711 1.08116 7.01301 1.23641 6.72273C1.39166 6.43246 1.61617 6.185 1.89 6.0023L8.89 1.3363C9.21866 1.11702 9.6049 1 10 1C10.3951 1 10.7813 1.11702 11.11 1.3363L18.11 6.0023C18.3838 6.185 18.6083 6.43246 18.7636 6.72273C18.9188 7.01301 19 7.33711 19 7.6663V16.5963M1 16.5963C1 17.1267 1.21071 17.6354 1.58579 18.0105C1.96086 18.3856 2.46957 18.5963 3 18.5963H17C17.5304 18.5963 18.0391 18.3856 18.4142 18.0105C18.7893 17.6354 19 17.1267 19 16.5963M1 16.5963L7.75 12.0963M19 16.5963L12.25 12.0963M7.75 12.0963L1 7.5963M7.75 12.0963L8.89 12.8563C9.21866 13.0756 9.6049 13.1926 10 13.1926C10.3951 13.1926 10.7813 13.0756 11.11 12.8563L12.25 12.0963M12.25 12.0963L19 7.5963" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <p>Шаг 2</p>
                                    </div>
                                    <div className={applyStage === 3 ? styles.lineActive : styles.line}></div>
                                    <div className={styles.visualisation_block}>
                                        <div className={applyStage === 3 ? styles.blockSvgActive : styles.blockSvg}>
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="sparkles">
                                                    <path id="Vector" d="M5.5 3V7V3ZM3.5 5H7.5H3.5ZM6.5 17V21V17ZM4.5 19H8.5H4.5ZM13.5 3L15.786 9.857L21.5 12L15.786 14.143L13.5 21L11.214 14.143L5.5 12L11.214 9.857L13.5 3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                            </svg>
                                        </div>
                                        <p>Шаг 3</p>
                                    </div>
                                </div>
                                <div className={styles.text}>
                                    <p> {applyStage === 1 ? (
                                        'Выберите направление обучения!'
                                    ) : applyStage === 2 ? (
                                        'Напишите мотивационное письмо!'
                                    ) : (
                                        'Расскажите про личные достижения!'
                                    )}
                                    </p>
                                    <p> {applyStage === 1 ? (
                                        'Выбирайте с умом!'
                                    ) : applyStage === 2 ? (
                                        'Ничего не стесняйтесь, можете даже написать, насколько любите маму!'
                                    ) : (
                                        'Нам интересно узнать о Ваших увлечениях!'
                                    )}
                                    </p>
                                </div>
                                {applyStage === 1 ? (
                                    <div className={styles.applyMain}>
                                        <div onClick={() => chooseDirectionHandler()} className={styles.list}>
                                            <p>Обучения для самого лучшего сотрудника</p>
                                            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292787 0.299246C0.480314 0.111775 0.734622 0.00645932 0.999786 0.00645932C1.26495 0.00645932 1.51926 0.111775 1.70679 0.299246L4.99979 3.59225L8.29279 0.299246C8.38503 0.203736 8.49538 0.127553 8.61738 0.0751444C8.73939 0.0227354 8.87061 -0.00485091 9.00339 -0.00600472C9.13616 -0.00715854 9.26784 0.018143 9.39074 0.0684238C9.51364 0.118705 9.62529 0.192958 9.71918 0.286851C9.81307 0.380743 9.88733 0.492395 9.93761 0.615292C9.98789 0.738188 10.0132 0.869868 10.012 1.00265C10.0109 1.13543 9.9833 1.26665 9.93089 1.38865C9.87848 1.51065 9.8023 1.621 9.70679 1.71325L5.70679 5.71325C5.51926 5.90072 5.26495 6.00603 4.99979 6.00603C4.73462 6.00603 4.48031 5.90072 4.29279 5.71325L0.292787 1.71325C0.105316 1.52572 0 1.27141 0 1.00625C0 0.741082 0.105316 0.486774 0.292787 0.299246Z" fill="#212121"/>
                                            </svg>
                                        </div>
                                        {listOpen ? (
                                            <div className={styles.options}>
                                                <div className={styles.options_content}>
                                                    {directions?.content.map((direction, index) => (
                                                        <div key={direction.id} onClick={() => chooseDirectionHandler(direction)} className={styles.options_block}>{direction.title}</div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                ) : (
                                    <textarea value={applyStage === 2 ? (motivationSpeech) : (experience)} onChange={(e) => setTextareaHandler(e)} placeholder={applyStage === 2 ? 'Пожалуйста, напишите здесь ваше мотивационное письмо, в котором вы можете поделиться своими мечтами и амбициями, которые будут вдохновлять нас принять вас в наш университет и совместно достичь великих результатов.' : 'Пожалуйста, опишите здесь свои личные достижения и успехи, которые вы достигли за последние 12 месяцев. Делитесь с нами своими яркими моментами и показывайте, почему ваше участие в нашем университете будет взаимовыгодным и вдохновительным.'}></textarea>
                                )}
                                <div className={styles.buttons}>
                                    <CancelButton onClick={() => applyStage === 1 ? setHelloWindow(true) : setApplyStage(applyStage - 1)}>назад</CancelButton>
                                    <AcceptButton background={applyStage === 3 ? '#4CAF50' : ''} onClick={() => setApplyStageHandler()}>{applyStage === 3 ? 'готово' : 'дальше'}</AcceptButton>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.goodbyeWindow}>
                            <div className={styles.goodbyeWindow_content}>
                                <p className={styles.article}>Готово!</p>
                                <div>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="speakerphone">
                                            <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M43.1998 7.19999C43.1996 6.79105 43.0949 6.38895 42.8956 6.03184C42.6964 5.67473 42.4092 5.37446 42.0613 5.15952C41.7134 4.94458 41.3163 4.8221 40.9078 4.8037C40.4993 4.7853 40.0928 4.87159 39.727 5.05439L21.031 14.4H11.9998C10.0902 14.4 8.2589 15.1586 6.90864 16.5088C5.55837 17.8591 4.7998 19.6904 4.7998 21.6C4.7998 23.5095 5.55837 25.3409 6.90864 26.6912C8.2589 28.0414 10.0902 28.8 11.9998 28.8H12.6718L16.9222 41.5584C17.0814 42.0365 17.3871 42.4523 17.7959 42.747C18.2047 43.0416 18.6959 43.2001 19.1998 43.2H21.5998C22.2363 43.2 22.8468 42.9471 23.2969 42.497C23.7469 42.047 23.9998 41.4365 23.9998 40.8V30.2832L39.727 38.1456C40.0928 38.3284 40.4993 38.4147 40.9078 38.3963C41.3163 38.3779 41.7134 38.2554 42.0613 38.0405C42.4092 37.8255 42.6964 37.5252 42.8956 37.1681C43.0949 36.811 43.1996 36.4089 43.1998 36V7.19999Z" fill="#212121"/>
                                        </g>
                                    </svg>
                                    <p>Ваша заявка отправлена!</p>
                                    <p>Вы можете следить за актуальным статусом вашей заявки в личном кабинете.</p>
                                </div>
                                <AcceptButton background={'black'} onClick={() => endApplying()}>хорошо</AcceptButton>
                            </div>
                        </div>
                    )}
        </div>
    );
};

export const MyApplications = () => {
    const [applications, setApplications] = useState<IApplication>()
    const handler = () => {
        console.log(1)
    }
    function formatDate(inputDate:string) {
        const dateObject = new Date(inputDate);
        const day = dateObject.getUTCDate();
        const month = dateObject.getUTCMonth() + 1;
        const year = dateObject.getUTCFullYear();


        const addLeadingZero = (value:number) => (value < 10 ? `0${value}` : value);

        return `${addLeadingZero(day)}/${addLeadingZero(month)}/${year}`;
    }
    useEffect( () => {
        (async () => {
            const response = await Applications.getStudentApplications()
            setApplications(response.data)
        })();
    }, []);
    return (
      <div className={styles.content}>
          <div className={styles.myApplications_window}>
              <div className={styles.myApplications_window_content}>
                  <div className={styles.header}>
                      <p>Направление</p>
                      <p>Дата</p>
                      <p>Статус</p>
                      <svg onClick={() => handler()} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 5C10.0086 5 10.2566 5.10536 10.4394 5.29289C10.6223 5.48043 10.725 5.73478 10.725 6V9H13.65C13.9086 9 14.1566 9.10536 14.3394 9.29289C14.5223 9.48043 14.625 9.73478 14.625 10C14.625 10.2652 14.5223 10.5196 14.3394 10.7071C14.1566 10.8946 13.9086 11 13.65 11H10.725V14C10.725 14.2652 10.6223 14.5196 10.4394 14.7071C10.2566 14.8946 10.0086 15 9.75 15C9.49141 15 9.24342 14.8946 9.06057 14.7071C8.87772 14.5196 8.775 14.2652 8.775 14V11H5.85C5.59141 11 5.34342 10.8946 5.16057 10.7071C4.97772 10.5196 4.875 10.2652 4.875 10C4.875 9.73478 4.97772 9.48043 5.16057 9.29289C5.34342 9.10536 5.59141 9 5.85 9H8.775V6C8.775 5.73478 8.87772 5.48043 9.06057 5.29289C9.24342 5.10536 9.49141 5 9.75 5Z" fill="#90A4AE"/>
                      </svg>
                  </div>
                  {applications?.content.map((application, index) => (
                      <div key={index} className={styles.block}>
                          <p>{application.direction}</p>
                          <p>{formatDate(application.date)}</p>
                          {application.status === 'WAITING' || application.status === 'PENDING' ? (
                              <YellowStatus>ожидает</YellowStatus>
                          ) : application.status === 'APPROVED' ? (
                              <GreenStatus>принято</GreenStatus>
                          ) : application.status === 'REJECTED_BY_SUPERVISOR' ? (
                              <RedStatus>отклонено руководителем</RedStatus>
                          ) : application.status === 'REJECTED_BY_ADMISSION' ? (
                              <RedStatus>отклонено приемной комиссией</RedStatus>
                          ) : null}
                      </div>
                  ))}
              </div>
          </div>
      </div>
    );
};