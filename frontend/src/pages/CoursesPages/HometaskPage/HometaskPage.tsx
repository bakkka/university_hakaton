import React, {FC, useEffect, useState} from 'react';
import CoursesComponent from "../../../components/CoursesComponents/CoursesConstructor/CoursesComponent";
import styles from './HometaskPage.module.scss'
import AcceptButton from "../../../components/Buttons/AcceptButton/AcceptButton";
import CancelButton from "../../../components/Buttons/CancelButton/CancelButton";
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import Schedule from "../../../API's/Schedule";
import Courses from "../../../API's/Courses";
import {ITaskContent, ITaskTeacher} from "../../../types/CoursesResponse";
import {useAppDispatch, useTypedSelector} from "../../../hooks/redux";
import {upHometask} from "../../../store/reducers/ActionCreator";
import {errorDrop} from "../../../store/reducers/UserSlice";


const HometaskPage:FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const type = useTypedSelector(state => state.userReducer.data.authority[0])
    const [options, setOptions] = useState({
        type:'',
        id:''
    })
    const { urlId } = useParams();
    const { pathname } = useLocation();
    const urlParts = pathname.split('/');
    const urlType = urlParts[2];
    if(urlType && urlId) {
        setOptions({type: urlType, id: urlId});
    }
    //TEACHER
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const upHometaskTeacher = async () => {
        const body: ITaskTeacher = {
            title: title,
            description: description,
            openedAt:  null,
            closedAt:  null,
            fileUrl:  null
        }
        try {
            const response = await Courses.postTeacherTask(data.sectionId, options.type, body)
            console.log(response)
        } catch (e){
            dispatch(errorDrop())
        }
    }
    //STUDENT
    const [data,setData] = useState<ITaskContent>({
        id:'',
        title:'',
        description:'',
        openedAt:{
            hour:'',
            minute:'',
            second:'',
            nano:''
        },
        closedAt:{
            hour:'',
            minute:'',
            second:'',
            nano:''
        },
        sectionId:'',
        courseTitle:'',
        isAnswered:'',
        grade:0,
        fileUrl:''
    });

    const upHometaskStudent = () => {
        if (pdfFile) {
            const formData = new FormData();
            formData.append('file', pdfFile);
            dispatch(upHometask(formData, options.id))
        }
    }


    useEffect( () => {
        (async () => {
            if(options.id && options.type) {
                const response = await Courses.getTaskContent(options.id, options.type)
                const taskContent: ITaskContent = {
                    id: response.data.id,
                    title: response.data.title,
                    description: response.data.description,
                    openedAt: response.data.openedAt,
                    closedAt: response.data.closedAt,
                    sectionId: response.data.sectionId,
                    courseTitle: response.data.courseTitle,
                    isAnswered: '',
                    grade: 0,
                    fileUrl: '',
                };

                setData(taskContent);
            }
        })();
    }, [options]);
    const [pdfFile, setPdfFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.type === 'application/pdf') {
                setPdfFile(file);
            } else {
                alert('Выберите PDF файл');
            }
        }
    };
    return (
        <CoursesComponent>
            <>
                <div className={styles.container}>
                    {type === 'ROLE_STUDENT' ? (
                        <div className={styles.content}>
                            <p className={styles.article}>{data.title}</p>
                            <p className={styles.description}>{data.description}
                            </p>
                            <div className={styles.download}>
                                <label htmlFor="fileInput">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M4.5 16V17C4.5 17.7956 4.81607 18.5587 5.37868 19.1213C5.94129 19.6839 6.70435 20 7.5 20H17.5C18.2956 20 19.0587 19.6839 19.6213 19.1213C20.1839 18.5587 20.5 17.7956 20.5 17V16M16.5 8L12.5 4M12.5 4L8.5 8M12.5 4V16" stroke="#90A4AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>.pdf (до 2мб)</p>
                                </label>
                                <input
                                    id="fileInput"
                                    type="file"
                                    accept=".pdf"
                                    onChange={(e) => handleFileChange(e)}
                                />
                            </div>
                            <div className={styles.download}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M4.5 16V17C4.5 17.7956 4.81607 18.5587 5.37868 19.1213C5.94129 19.6839 6.70435 20 7.5 20H17.5C18.2956 20 19.0587 19.6839 19.6213 19.1213C20.1839 18.5587 20.5 17.7956 20.5 17V16M16.5 8L12.5 4M12.5 4L8.5 8M12.5 4V16" stroke="#90A4AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p>.pdf (до 2мб)</p>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.content}>
                            <input onChange={e => handleTitleChange(e)} value={title} placeholder={'Заголовок домашнего задания'}/>
                            <textarea onChange={e => handleDescriptionChange(e)} value={description} placeholder={'Описание домашнего задания'}/>
                        </div>
                    )}
                </div>
                {type === 'student' ? (
                    <div className={styles.button}>
                        <AcceptButton onClick={() => upHometaskStudent()}>Отправить</AcceptButton>
                    </div>
                ) : (
                    <div className={styles.buttons}>
                        <CancelButton onClick={() =>  navigate('..')}>Отмена</CancelButton>
                        <AcceptButton onClick={() => upHometaskTeacher()}>Готово</AcceptButton>
                    </div>
                )}
            </>
        </CoursesComponent>
    );
};

export default HometaskPage;