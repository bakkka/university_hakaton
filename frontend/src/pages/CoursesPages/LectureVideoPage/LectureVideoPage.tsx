import React, {FC, useEffect, useState} from 'react';
import CoursesComponent from "../../../components/CoursesComponents/CoursesConstructor/CoursesComponent";
import styles from './LectureVideoPage.module.scss'
import CancelButton from "../../../components/Buttons/CancelButton/CancelButton";
import AcceptButton from "../../../components/Buttons/AcceptButton/AcceptButton";
import {ITaskContent, ITaskTeacher} from "../../../types/CoursesResponse";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useTypedSelector} from "../../../hooks/redux";
import Courses from "../../../API's/Courses";
import Storage from "../../../API's/Storage";
import {errorDrop} from "../../../store/reducers/UserSlice";
const LectureVideoPage:FC = () => {
    const navigate = useNavigate()
    const type = useTypedSelector(state => state.userReducer.data.authority[0])
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
    const [mp4File, setMp4File] = useState<File | null>(null);

    const { urlId } = useParams();
    const { pathname } = useLocation();
    const urlParts = pathname.split('/');
    const urlType = urlParts[2];
    if(urlType && urlId) {
        setOptions({type: urlType, id: urlId});
    }


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
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const upVideoTeacher = async () => {
        if (mp4File) {
            const formData = new FormData();
            formData.append('file', mp4File);
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
                alert('MP4 файл успешно загружен')
                console.log(response);
            } catch (error){
                alert('Ошибка при загрузке MP4 файла')
                console.log(error)
                dispatch(errorDrop())
            }
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.type === 'application/pdf') {
                setMp4File(file);
            } else {
                alert('Выберите MP4 файл');
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
                            <p className={styles.description}>{data.description}</p>
                            <video width="960" height="480" controls>
                                <source src={data.fileUrl} type="video/mp4"></source>
                            </video>
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
                                    accept=".mp4"
                                    onChange={(e) => handleFileChange(e)}
                                />
                            </div>
                        </div>
                    )}
                </div>
                {type === 'teacher' ? (
                    <div className={styles.buttons}>
                        <CancelButton onClick={() =>  navigate('..')}>Отмена</CancelButton>
                        <AcceptButton onClick={() => upVideoTeacher()}>Готово</AcceptButton>
                    </div>
                ) : null}
            </>
        </CoursesComponent>
    );
};

export default LectureVideoPage;