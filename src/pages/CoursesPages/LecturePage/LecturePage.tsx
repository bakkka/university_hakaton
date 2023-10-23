import React, {FC, useEffect, useState} from 'react';
import styles from './LecturePage.module.scss'
import CoursesComponent from "../../../components/CoursesComponents/CoursesConstructor/CoursesComponent";
import CancelButton from "../../../components/Buttons/CancelButton/CancelButton";
import AcceptButton from "../../../components/Buttons/AcceptButton/AcceptButton";
import {ITaskContent, ITaskTeacher} from "../../../types/CoursesResponse";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useTypedSelector} from "../../../hooks/redux";
import Courses from "../../../API's/Courses";
import {upHometask} from "../../../store/reducers/ActionCreator";
import Storage from "../../../API's/Storage";
import {errorDrop} from "../../../store/reducers/UserSlice";

const LecturePage:FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [options, setOptions] = useState({
        type:'',
        id:''
    })
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
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [pdfFile, setPdfFile] = useState<File | null>(null);

    const { urlId } = useParams();
    const { pathname } = useLocation();
    const urlParts = pathname.split('/');
    const urlType = urlParts[2];
    if(urlType && urlId) {
        setOptions({type: urlType, id: urlId});
    }

    const type = useTypedSelector(state => state.userReducer.data.authority[0]);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const upLectureTeacher = async () => {
        if (pdfFile) {
            const formData = new FormData();
            formData.append('file', pdfFile);
            const url = await Storage.uploadFile(formData)
            const body: ITaskTeacher = {
                title: title,
                description: description,
                openedAt:  null,
                closedAt:  null,
                fileUrl:  url.data
            }
            try {
                const response = await Courses.postTeacherTask(data.sectionId, options.type, body)
                console.log(response)
                alert('PDF файл успешно загружен')
            } catch (error){
                alert('Ошибка при загрузке PDF файла')
                console.log(error)
                dispatch(errorDrop())

            }

        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.type === 'application/pdf') {
                setPdfFile(file);
            } else {
                alert('Выберите pdf файл');
            }
        }
    };

    useEffect( () => {
        (async () => {
            if(options.id && options.type) {
                try {
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
                }catch (e){
                    dispatch(errorDrop())
                }
            }
        })();
    }, [options]);
    return (
        <CoursesComponent>
            <>
                <div className={styles.container}>
                    {type === 'ROLE_STUDENT' ? (
                        <div className={styles.content}>
                            <div className={styles.acricle}>{data.title}</div>
                            <div className={styles.description}>{data.description}</div>
                            <div className={styles.lecture}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 16V17C4 17.7956 4.31607 18.5587 4.87868 19.1213C5.44129 19.6839 6.20435 20 7 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V16M16 12L12 16M12 16L8 12M12 16V4" stroke="#607D8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <a href={data.fileUrl} target="_blank" rel="noopener noreferrer">
                                    {data.title}pdf
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.content}>
                            <input onChange={e => handleTitleChange(e)} value={title} placeholder={'Заголовок лекции'}></input>
                            <textarea onChange={e => handleDescriptionChange(e)} value={description} placeholder={'Описание лекции'}></textarea>
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
                        </div>
                    )}
                </div>
                {type === 'teacher' ? (
                    <div className={styles.buttons}>
                        <CancelButton onClick={() =>  navigate('..')}>Отмена</CancelButton>
                        <AcceptButton onClick={() => upLectureTeacher()}>Готово</AcceptButton>
                    </div>
                ) : null}
            </>
        </CoursesComponent>
    );
};

export default LecturePage;