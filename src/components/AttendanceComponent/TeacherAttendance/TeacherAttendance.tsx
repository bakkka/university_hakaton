import React, {FC, useState} from 'react';
import styles from './TeacherAttendance.module.scss'
import LessonComponent from "../../LessonComponent/LessonComponent";
import SearchBarComponent from "../../SearchBarComponent/SearchBarComponent";
import picture from "../../../images/TestPicture2.png";
import ContactsComponent from "../../ContactsComponent/ContactsComponent";
import ProgressComponent from "../../ProgressComponent/ProgressComponent";
import ActionButton from "../../Buttons/ActionButton/ActionButton";
const TeacherAttendance:FC = () => {
    const [generalMode, setGeneralMode] = useState(true)
    return (
        <div className={styles.content}>
            <ActionButton onClick={() => setGeneralMode(!generalMode)}></ActionButton>
            {generalMode ? (
                <>
                    <div className={styles.lessons}>
                        <div className={styles.current}>
                            <div className={styles.current_content}>
                                <p className={styles.article}>Текущая пара</p>
                                <div className={styles.lesson_content}>
                                    <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                     lesson_name={'Машинное обучение'} active={true}
                                                     teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                </div>
                            </div>
                        </div>
                        <div className={styles.all}>
                            <div className={styles.all_content}>
                                <div className={styles.header}>
                                    <SearchBarComponent></SearchBarComponent>
                                    <div className={styles.header_date}>
                                        <div className={styles.date_content}>
                                            <p>20/10/2023</p>
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="chevron-down">
                                                    <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M6.14142 7.79308C6.32895 7.60561 6.58326 7.50029 6.84842 7.50029C7.11358 7.50029 7.36789 7.60561 7.55542 7.79308L10.8484 11.0861L14.1414 7.79308C14.2337 7.69757 14.344 7.62139 14.466 7.56898C14.588 7.51657 14.7192 7.48898 14.852 7.48783C14.9848 7.48668 15.1165 7.51198 15.2394 7.56226C15.3623 7.61254 15.4739 7.68679 15.5678 7.78069C15.6617 7.87458 15.736 7.98623 15.7862 8.10913C15.8365 8.23202 15.8618 8.3637 15.8607 8.49648C15.8595 8.62926 15.8319 8.76048 15.7795 8.88249C15.7271 9.00449 15.6509 9.11483 15.5554 9.20708L11.5554 13.2071C11.3679 13.3946 11.1136 13.4999 10.8484 13.4999C10.5833 13.4999 10.3289 13.3946 10.1414 13.2071L6.14142 9.20708C5.95395 9.01955 5.84863 8.76525 5.84863 8.50008C5.84863 8.23492 5.95395 7.98061 6.14142 7.79308Z" fill="#90A4AE"/>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.list}>
                                    <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                     lesson_name={'Машинное обучение'}
                                                     page={'attendance'}
                                                     teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                    <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                     lesson_name={'Машинное обучение'}
                                                     page={'attendance'}
                                                     teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                    <LessonComponent active={true} time_start={'13:40'} time_end={'15:10'}
                                                     lesson_name={'Машинное обучение'}
                                                     page={'attendance'}
                                                     teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                    <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                     lesson_name={'Машинное обучение'}
                                                     page={'attendance'}
                                                     teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                    <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                     lesson_name={'Машинное обучение'}
                                                     page={'attendance'}
                                                     teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                    <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                     lesson_name={'Машинное обучение'}
                                                     page={'attendance'}
                                                     teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                    <LessonComponent time_start={'13:40'} time_end={'15:10'}
                                                     lesson_name={'Машинное обучение'}
                                                     page={'attendance'}
                                                     teacher_name={'Орлов Александр Владимирович, 1337'}></LessonComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.students}>
                        <div className={styles.students_content}>
                            <div className={styles.students_header}>
                                <p>ФИО</p>
                                <p>Группа</p>
                                <p>Отметка</p>
                            </div>
                            <div className={styles.list}>
                                <div className={styles.block}>
                                    <div className={styles.block_name}>
                                        <img src={picture}></img>
                                        <p>Мкртчян Гарик Артушович</p>
                                    </div>
                                    <div className={styles.block_group}>1375</div>
                                    <input type={"checkbox"} className={styles.block_attend}></input>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.block_name}>
                                        <img src={picture}></img>
                                        <p>Мкртчян Гарик Артушович</p>
                                    </div>
                                    <div className={styles.block_group}>1375</div>
                                    <input type={"checkbox"} className={styles.block_attend}></input>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.block_name}>
                                        <img src={picture}></img>
                                        <p>Мкртчян Гарик Артушович</p>
                                    </div>
                                    <div className={styles.block_group}>1375</div>
                                    <input type={"checkbox"} className={styles.block_attend}></input>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.block_name}>
                                        <img src={picture}></img>
                                        <p>Мкртчян Гарик Артушович</p>
                                    </div>
                                    <div className={styles.block_group}>1375</div>
                                    <input type={"checkbox"} className={styles.block_attend}></input>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.block_name}>
                                        <img src={picture}></img>
                                        <p>Мкртчян Гарик Артушович</p>
                                    </div>
                                    <div className={styles.block_group}>1375</div>
                                    <input type={"checkbox"} className={styles.block_attend}></input>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.block_name}>
                                        <img src={picture}></img>
                                        <p>Мкртчян Гарик Артушович</p>
                                    </div>
                                    <div className={styles.block_group}>1375</div>
                                    <input type={"checkbox"} className={styles.block_attend}></input>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.block_name}>
                                        <img src={picture}></img>
                                        <p>Мкртчян Гарик Артушович</p>
                                    </div>
                                    <div className={styles.block_group}>1375</div>
                                    <input type={"checkbox"} className={styles.block_attend}></input>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.block_name}>
                                        <img src={picture}></img>
                                        <p>Мкртчян Гарик Артушович</p>
                                    </div>
                                    <div className={styles.block_group}>1375</div>
                                    <input type={"checkbox"} className={styles.block_attend}></input>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.block_name}>
                                        <img src={picture}></img>
                                        <p>Мкртчян Гарик Артушович</p>
                                    </div>
                                    <div className={styles.block_group}>1375</div>
                                    <input type={"checkbox"} className={styles.block_attend}></input>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.block_name}>
                                        <img src={picture}></img>
                                        <p>Мкртчян Гарик Артушович</p>
                                    </div>
                                    <div className={styles.block_group}>1375</div>
                                    <input type={"checkbox"} className={styles.block_attend}></input>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.block_name}>
                                        <img src={picture}></img>
                                        <p>Мкртчян Гарик Артушович</p>
                                    </div>
                                    <div className={styles.block_group}>1375</div>
                                    <input type={"checkbox"} className={styles.block_attend}></input>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.block_name}>
                                        <img src={picture}></img>
                                        <p>Мкртчян Гарик Артушович</p>
                                    </div>
                                    <div className={styles.block_group}>1375</div>
                                    <input type={"checkbox"} className={styles.block_attend}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
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
                    <div className={styles.progress}>
                        <ProgressComponent type={"attendance"} maxHeight={680}></ProgressComponent>
                    </div>
                    <div className={styles.student_attendance}>
                        <div className={styles.student_attendance_content}>
                            <div className={styles.student_header}>
                                <p>Дата</p>
                                <p>Пара</p>
                                <p>Отметка</p>
                            </div>
                            <div className={styles.attendance_list}>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                                <div className={styles.block}>
                                    <p>20/10/23</p>
                                    <p>13:40 - 15:10</p>
                                    <input type={'checkbox'}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default TeacherAttendance;