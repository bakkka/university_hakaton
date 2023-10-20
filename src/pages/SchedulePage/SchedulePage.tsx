import React, {FC, useState} from 'react';
import styles from './SchedulePage.module.scss'
import picture from '../../images/TestPicture.png'
import Container from "../Container/Container";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import LessonComponent from "../../components/LessonComponent/LessonComponent";
import {OfflineType, OnlineType} from "../../components/LessonType/LessonType";
import AcceptButton from "../../components/Buttons/AcceptButton/AcceptButton";
import CancelButton from "../../components/Buttons/CancelButton/CancelButton";


const SchedulePage:FC = () => {
    const [showGroupList, setShowGroupList] = useState(false)
    const [editMode, setEditMode] = useState(false);
    const [addMode, setAddMode] = useState(false)
    const [addModeList, setAddModeList] = useState(false)
    const [activeListBlock, setActiveListBlock] = useState(0)
    return (
                <Container>
                    {editMode ? (
                        <>
                            <div className={styles.editBlock}>
                                <div className={styles.editBlock_content}>
                                    <div className={styles.info}>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                        <div className={styles.info_options}>
                                            <OnlineType></OnlineType>
                                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2.5C8.81434 2.5001 8.63237 2.55188 8.47447 2.64955C8.31658 2.74722 8.18899 2.88692 8.106 3.053L7.382 4.5H4C3.73478 4.5 3.48043 4.60536 3.29289 4.79289C3.10536 4.98043 3 5.23478 3 5.5C3 5.76522 3.10536 6.01957 3.29289 6.20711C3.48043 6.39464 3.73478 6.5 4 6.5V16.5C4 17.0304 4.21071 17.5391 4.58579 17.9142C4.96086 18.2893 5.46957 18.5 6 18.5H14C14.5304 18.5 15.0391 18.2893 15.4142 17.9142C15.7893 17.5391 16 17.0304 16 16.5V6.5C16.2652 6.5 16.5196 6.39464 16.7071 6.20711C16.8946 6.01957 17 5.76522 17 5.5C17 5.23478 16.8946 4.98043 16.7071 4.79289C16.5196 4.60536 16.2652 4.5 16 4.5H12.618L11.894 3.053C11.811 2.88692 11.6834 2.74722 11.5255 2.64955C11.3676 2.55188 11.1857 2.5001 11 2.5H9ZM7 8.5C7 8.23478 7.10536 7.98043 7.29289 7.79289C7.48043 7.60536 7.73478 7.5 8 7.5C8.26522 7.5 8.51957 7.60536 8.70711 7.79289C8.89464 7.98043 9 8.23478 9 8.5V14.5C9 14.7652 8.89464 15.0196 8.70711 15.2071C8.51957 15.3946 8.26522 15.5 8 15.5C7.73478 15.5 7.48043 15.3946 7.29289 15.2071C7.10536 15.0196 7 14.7652 7 14.5V8.5ZM12 7.5C11.7348 7.5 11.4804 7.60536 11.2929 7.79289C11.1054 7.98043 11 8.23478 11 8.5V14.5C11 14.7652 11.1054 15.0196 11.2929 15.2071C11.4804 15.3946 11.7348 15.5 12 15.5C12.2652 15.5 12.5196 15.3946 12.7071 15.2071C12.8946 15.0196 13 14.7652 13 14.5V8.5C13 8.23478 12.8946 7.98043 12.7071 7.79289C12.5196 7.60536 12.2652 7.5 12 7.5Z" fill="#607D8B"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div onClick={() => setAddMode(true)} className={styles.addLesson}>
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="plus">
                                                <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M10.5 5.00439C10.7586 5.00439 11.0066 5.10975 11.1894 5.29729C11.3723 5.48482 11.475 5.73918 11.475 6.00439V9.00439H14.4C14.6586 9.00439 14.9066 9.10975 15.0894 9.29729C15.2723 9.48482 15.375 9.73918 15.375 10.0044C15.375 10.2696 15.2723 10.524 15.0894 10.7115C14.9066 10.899 14.6586 11.0044 14.4 11.0044H11.475V14.0044C11.475 14.2696 11.3723 14.524 11.1894 14.7115C11.0066 14.899 10.7586 15.0044 10.5 15.0044C10.2414 15.0044 9.99342 14.899 9.81057 14.7115C9.62772 14.524 9.525 14.2696 9.525 14.0044V11.0044H6.6C6.34141 11.0044 6.09342 10.899 5.91057 10.7115C5.72772 10.524 5.625 10.2696 5.625 10.0044C5.625 9.73918 5.72772 9.48482 5.91057 9.29729C6.09342 9.10975 6.34141 9.00439 6.6 9.00439H9.525V6.00439C9.525 5.73918 9.62772 5.48482 9.81057 5.29729C9.99342 5.10975 10.2414 5.00439 10.5 5.00439Z" fill="#90A4AE"/>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {addMode ? (
                                <div className={styles.addBlock}>
                                    <div className={styles.addBlock_content}>
                                        <div className={styles.content_main}>
                                            <div className={styles.time}>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="chevron-right">
                                                        <path id="Vector" d="M3.56895 8.75L7.65229 4.66667L11.7356 8.75" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                </svg>
                                                <p className={styles.start}>15:40</p>
                                                <p className={styles.end}>17:10</p>
                                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="chevron-right">
                                                        <path id="Vector" d="M3.56895 8.75L7.65229 4.66667L11.7356 8.75" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div onClick={() => setAddModeList(!addModeList)} className={styles.names}>
                                                <div>
                                                    <p>Методы оптимизации</p>
                                                    <p>Валерий Александр Владимирович</p>
                                                </div>
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="chevron-down">
                                                        <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M6.14142 7.79308C6.32895 7.60561 6.58326 7.50029 6.84842 7.50029C7.11358 7.50029 7.36789 7.60561 7.55542 7.79308L10.8484 11.0861L14.1414 7.79308C14.2337 7.69757 14.344 7.62139 14.466 7.56898C14.588 7.51657 14.7192 7.48898 14.852 7.48783C14.9848 7.48668 15.1165 7.51198 15.2394 7.56226C15.3623 7.61254 15.4739 7.68679 15.5678 7.78069C15.6617 7.87458 15.736 7.98623 15.7862 8.10913C15.8365 8.23202 15.8618 8.3637 15.8607 8.49648C15.8595 8.62926 15.8319 8.76048 15.7795 8.88249C15.7271 9.00449 15.6509 9.11483 15.5554 9.20708L11.5554 13.2071C11.3679 13.3946 11.1136 13.4999 10.8484 13.4999C10.5833 13.4999 10.3289 13.3946 10.1414 13.2071L6.14142 9.20708C5.95395 9.01955 5.84863 8.76525 5.84863 8.50008C5.84863 8.23492 5.95395 7.98061 6.14142 7.79308Z" fill="#90A4AE"/>
                                                    </g>
                                                </svg>
                                            </div>
                                            {addModeList ? (
                                                <div className={styles.names_list}>
                                                    <div className={styles.names_list_content}>
                                                        <div className={styles.list_scroll}>
                                                            <div onClick={() => setActiveListBlock(1)} className={activeListBlock === 1 ? styles.list_scroll_block_active : styles.list_scroll_block}>
                                                                <p>Название предмета</p>
                                                                <p>ФИО преподавателя</p>
                                                            </div>
                                                            <div onClick={() => setActiveListBlock(2)} className={activeListBlock === 2 ? styles.list_scroll_block_active : styles.list_scroll_block}>
                                                                <p>Название предмета</p>
                                                                <p>ФИО преподавателя</p>
                                                            </div>
                                                            <div onClick={() => setActiveListBlock(3)} className={activeListBlock === 3 ? styles.list_scroll_block_active : styles.list_scroll_block}>
                                                                <p>Название предмета</p>
                                                                <p>ФИО преподавателя</p>
                                                            </div>
                                                            <div onClick={() => setActiveListBlock(4)} className={activeListBlock === 4 ? styles.list_scroll_block_active : styles.list_scroll_block}>
                                                                <p>Название предмета</p>
                                                                <p>ФИО преподавателя</p>
                                                            </div>
                                                            <div onClick={() => setActiveListBlock(5)} className={activeListBlock === 5 ? styles.list_scroll_block_active : styles.list_scroll_block}>
                                                                <p>Название предмета</p>
                                                                <p>ФИО преподавателя</p>
                                                            </div>
                                                            <div onClick={() => setActiveListBlock(6)} className={activeListBlock === 6 ? styles.list_scroll_block_active : styles.list_scroll_block}>
                                                                <p>Название предмета</p>
                                                                <p>ФИО преподавателя</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : null}
                                            <div className={styles.checkboxes}>
                                                <div className={styles.checkbox}>
                                                    <input type="checkbox"></input>
                                                    <p>Дист</p>
                                                </div>
                                                <div className={styles.checkbox}>
                                                    <input type="checkbox"></input>
                                                    <p>Очно</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.buttons}>
                                            <CancelButton onClick={() => setAddMode(false)}></CancelButton>
                                            <AcceptButton onClick={() => setAddMode(false)}></AcceptButton>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </>
                    ) : (
                        <div>
                            <div className={styles.schedule}>
                                <div className={styles.block}>
                                    <div className={styles.block_info}>
                                        <p className={styles.block_info_time}>Понедельник, 9 октября </p>
                                        <p className={styles.block_info_amount}>2 пары, с 11:40 по 15:10</p>
                                        <svg onClick={() => setEditMode(true)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="pencil-alt">
                                                <path id="Vector" d="M11 4.99998H6C5.46957 4.99998 4.96086 5.21069 4.58579 5.58577C4.21071 5.96084 4 6.46955 4 6.99998V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V13M17.586 3.58598C17.7705 3.39496 17.9912 3.24259 18.2352 3.13778C18.4792 3.03296 18.7416 2.97779 19.0072 2.97548C19.2728 2.97317 19.5361 3.02377 19.7819 3.12434C20.0277 3.2249 20.251 3.3734 20.4388 3.56119C20.6266 3.74897 20.7751 3.97228 20.8756 4.21807C20.9762 4.46386 21.0268 4.72722 21.0245 4.99278C21.0222 5.25834 20.967 5.52078 20.8622 5.76479C20.7574 6.0088 20.605 6.22949 20.414 6.41398L11.828 15H9V12.172L17.586 3.58598Z" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className={styles.block_content}>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'} type={'Лек'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'} type={'Пр'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                    </div>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.block_info}>
                                        <p className={styles.block_info_time}>Вторник, 9 октября </p>
                                        <p className={styles.block_info_amount}>2 пары, с 11:40 по 15:10</p>
                                        <svg onClick={() => setEditMode(true)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="pencil-alt">
                                                <path id="Vector" d="M11 4.99998H6C5.46957 4.99998 4.96086 5.21069 4.58579 5.58577C4.21071 5.96084 4 6.46955 4 6.99998V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V13M17.586 3.58598C17.7705 3.39496 17.9912 3.24259 18.2352 3.13778C18.4792 3.03296 18.7416 2.97779 19.0072 2.97548C19.2728 2.97317 19.5361 3.02377 19.7819 3.12434C20.0277 3.2249 20.251 3.3734 20.4388 3.56119C20.6266 3.74897 20.7751 3.97228 20.8756 4.21807C20.9762 4.46386 21.0268 4.72722 21.0245 4.99278C21.0222 5.25834 20.967 5.52078 20.8622 5.76479C20.7574 6.0088 20.605 6.22949 20.414 6.41398L11.828 15H9V12.172L17.586 3.58598Z" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className={styles.block_content}>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'} type={'Лек'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'} type={'Пр'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'} type={'Лек'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                    </div>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.block_info}>
                                        <p className={styles.block_info_time}>Среда, 9 октября </p>
                                        <p className={styles.block_info_amount}>2 пары, с 11:40 по 15:10</p>
                                        <svg onClick={() => setEditMode(true)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="pencil-alt">
                                                <path id="Vector" d="M11 4.99998H6C5.46957 4.99998 4.96086 5.21069 4.58579 5.58577C4.21071 5.96084 4 6.46955 4 6.99998V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V13M17.586 3.58598C17.7705 3.39496 17.9912 3.24259 18.2352 3.13778C18.4792 3.03296 18.7416 2.97779 19.0072 2.97548C19.2728 2.97317 19.5361 3.02377 19.7819 3.12434C20.0277 3.2249 20.251 3.3734 20.4388 3.56119C20.6266 3.74897 20.7751 3.97228 20.8756 4.21807C20.9762 4.46386 21.0268 4.72722 21.0245 4.99278C21.0222 5.25834 20.967 5.52078 20.8622 5.76479C20.7574 6.0088 20.605 6.22949 20.414 6.41398L11.828 15H9V12.172L17.586 3.58598Z" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className={styles.block_content}>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'} type={'Лек'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'} type={'Лек'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'} type={'Лек'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'} type={'Пр'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                    </div>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.block_info}>
                                        <p className={styles.block_info_time}>Четверг, 9 октября </p>
                                        <p className={styles.block_info_amount}>2 пары, с 11:40 по 15:10</p>
                                        <svg onClick={() => setEditMode(true)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="pencil-alt">
                                                <path id="Vector" d="M11 4.99998H6C5.46957 4.99998 4.96086 5.21069 4.58579 5.58577C4.21071 5.96084 4 6.46955 4 6.99998V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V13M17.586 3.58598C17.7705 3.39496 17.9912 3.24259 18.2352 3.13778C18.4792 3.03296 18.7416 2.97779 19.0072 2.97548C19.2728 2.97317 19.5361 3.02377 19.7819 3.12434C20.0277 3.2249 20.251 3.3734 20.4388 3.56119C20.6266 3.74897 20.7751 3.97228 20.8756 4.21807C20.9762 4.46386 21.0268 4.72722 21.0245 4.99278C21.0222 5.25834 20.967 5.52078 20.8622 5.76479C20.7574 6.0088 20.605 6.22949 20.414 6.41398L11.828 15H9V12.172L17.586 3.58598Z" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className={styles.block_content}>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'} type={'Лек'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'} type={'Пр'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                    </div>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.block_info}>
                                        <p className={styles.block_info_time}>Пятница, 9 октября </p>
                                        <p className={styles.block_info_amount}>2 пары, с 11:40 по 15:10</p>
                                        <svg onClick={() => setEditMode(true)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="pencil-alt">
                                                <path id="Vector" d="M11 4.99998H6C5.46957 4.99998 4.96086 5.21069 4.58579 5.58577C4.21071 5.96084 4 6.46955 4 6.99998V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V13M17.586 3.58598C17.7705 3.39496 17.9912 3.24259 18.2352 3.13778C18.4792 3.03296 18.7416 2.97779 19.0072 2.97548C19.2728 2.97317 19.5361 3.02377 19.7819 3.12434C20.0277 3.2249 20.251 3.3734 20.4388 3.56119C20.6266 3.74897 20.7751 3.97228 20.8756 4.21807C20.9762 4.46386 21.0268 4.72722 21.0245 4.99278C21.0222 5.25834 20.967 5.52078 20.8622 5.76479C20.7574 6.0088 20.605 6.22949 20.414 6.41398L11.828 15H9V12.172L17.586 3.58598Z" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className={styles.block_content}>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'} type={'Лек'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'} type={'Пр'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'} type={'Пр'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                    </div>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.block_info}>
                                        <p className={styles.block_info_time}>Суббота, 9 октября </p>
                                        <p className={styles.block_info_amount}>2 пары, с 11:40 по 15:10</p>
                                        <svg onClick={() => setEditMode(true)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="pencil-alt">
                                                <path id="Vector" d="M11 4.99998H6C5.46957 4.99998 4.96086 5.21069 4.58579 5.58577C4.21071 5.96084 4 6.46955 4 6.99998V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V13M17.586 3.58598C17.7705 3.39496 17.9912 3.24259 18.2352 3.13778C18.4792 3.03296 18.7416 2.97779 19.0072 2.97548C19.2728 2.97317 19.5361 3.02377 19.7819 3.12434C20.0277 3.2249 20.251 3.3734 20.4388 3.56119C20.6266 3.74897 20.7751 3.97228 20.8756 4.21807C20.9762 4.46386 21.0268 4.72722 21.0245 4.99278C21.0222 5.25834 20.967 5.52078 20.8622 5.76479C20.7574 6.0088 20.605 6.22949 20.414 6.41398L11.828 15H9V12.172L17.586 3.58598Z" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className={styles.block_content}>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'} type={'Лек'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'} type={'Лек'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'} type={'Лек'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                        <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                         height={50}
                                                         lesson_name={'Машинное обучение'} type={'Лек'}
                                                         teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.legend}>
                                <div className={styles.legend_block}>
                                    <OfflineType></OfflineType> - очное
                                </div>
                                <div className={styles.legend_block}>
                                    <OnlineType></OnlineType> - дистанционное
                                </div>
                                <div onClick={() => setShowGroupList(!showGroupList)} className={styles.group_block}>
                                    <p>1379</p>
                                    <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292787 0.299246C0.480314 0.111775 0.734622 0.00645932 0.999786 0.00645932C1.26495 0.00645932 1.51926 0.111775 1.70679 0.299246L4.99979 3.59225L8.29279 0.299246C8.38503 0.203736 8.49538 0.127553 8.61738 0.0751444C8.73939 0.0227354 8.87061 -0.00485091 9.00339 -0.00600472C9.13616 -0.00715854 9.26784 0.018143 9.39074 0.0684238C9.51364 0.118705 9.62529 0.192958 9.71918 0.286851C9.81307 0.380743 9.88733 0.492395 9.93761 0.615292C9.98789 0.738188 10.0132 0.869868 10.012 1.00265C10.0109 1.13543 9.9833 1.26665 9.93089 1.38865C9.87848 1.51065 9.8023 1.621 9.70679 1.71325L5.70679 5.71325C5.51926 5.90072 5.26495 6.00603 4.99979 6.00603C4.73462 6.00603 4.48031 5.90072 4.29279 5.71325L0.292787 1.71325C0.105316 1.52572 0 1.27141 0 1.00625C0 0.741082 0.105316 0.486774 0.292787 0.299246Z" fill="#212121"/>
                                    </svg>
                                </div>
                                {showGroupList ? (
                                    <div className={styles.group_list}>
                                        <div className={styles.list_content}>
                                            <div className={styles.scrollBlock}>
                                                <div onClick={() => setShowGroupList(!showGroupList)} className={styles.content_block}>1376</div>
                                                <div onClick={() => setShowGroupList(!showGroupList)} className={styles.content_block}>1378</div>
                                                <div onClick={() => setShowGroupList(!showGroupList)} className={styles.content_block}>1377</div>
                                                <div onClick={() => setShowGroupList(!showGroupList)} className={styles.content_blockActive}>1379</div>
                                                <div onClick={() => setShowGroupList(!showGroupList)} className={styles.content_block}>1380</div>
                                                <div onClick={() => setShowGroupList(!showGroupList)} className={styles.content_block}>1381</div>
                                                <div onClick={() => setShowGroupList(!showGroupList)} className={styles.content_block}>1382</div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    )}
                </Container>
    );
};

export default SchedulePage;