import React, {FC, useEffect, useState} from 'react';
import CoursesComponent from "../../../components/CoursesComponents/CoursesConstructor/CoursesComponent";
import styles from "./TestPage.module.scss";
import QuestionComponent from "../../../components/CoursesComponents/QuestionComponent/QuestionComponent";
import AcceptButton from "../../../components/Buttons/AcceptButton/AcceptButton";
import {useAppDispatch, useTypedSelector} from "../../../hooks/redux";
import {IAnswers, ITaskContent, ITest} from "../../../types/CoursesResponse";
import {useLocation, useParams} from "react-router-dom";
import {upHometask} from "../../../store/reducers/ActionCreator";
import Courses from "../../../API's/Courses";
import Schedule from "../../../API's/Schedule";
import {errorDrop} from "../../../store/reducers/UserSlice";

const TestPage:FC = () => {

    const dispatch = useAppDispatch()
    const [options, setOptions] = useState({
        type:'',
        id:''
    })
    const [selectedAnswersResult, setSelectedAnswersResult] = useState<IAnswers[]>(
        [
            {
                questionId:'',
                answers:[
                    {
                        answer:''
                    }
                ]
            }
        ]
    );
    const [data,setData] = useState<ITest>({
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
        fileUrl:'',
        duration: 0,
        questions: [
            {
                id: '',
                question: '',
                answers: [
                    {
                        answer: ''
                    }
                ],
                testId: ''
            }
        ],
    });
    const { urlId } = useParams();
    const { pathname } = useLocation();
    const urlParts = pathname.split('/');
    const urlType = urlParts[2];
    if(urlType && urlId) {
        setOptions({type: urlType, id: urlId});
    }

    const type = useTypedSelector(state => state.userReducer.data.authority[0])

    useEffect( () => {
        (async () => {
            if(options.id && options.type) {
                try {
                    const response = await Courses.getTest(options.id)
                    const taskContent: ITest = {
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
                        duration: response.data.duration,
                        questions: response.data.questions,
                    };

                    setData(taskContent);
                } catch (e){
                    dispatch(errorDrop())
                }
            }
        })();
    }, [options]);
    const handleAnswersChange = (questionId: string, selectedAnswers: string[]) => {
        const existingAnswerIndex = selectedAnswersResult.findIndex(answer => answer.questionId === questionId);

        if (existingAnswerIndex !== -1) {
            const updatedAnswers = [...selectedAnswersResult];
            updatedAnswers[existingAnswerIndex] = {
                ...updatedAnswers[existingAnswerIndex],
                answers: selectedAnswers.map(answer => ({ answer })) as [{ answer: string }],

            };


            setSelectedAnswersResult(updatedAnswers);
        } else {

            const newAnswer: IAnswers = {
                questionId,
                answers: selectedAnswers.map(answer => ({ answer })) as [{ answer: string }],
            };

            setSelectedAnswersResult([...selectedAnswersResult, newAnswer]);
        }
    };
    const endtest = async () => {
        const response = await Courses.endTest(selectedAnswersResult, options.id)
    }

    return (
        <CoursesComponent>
            <>
                <div className={styles.content_main}>
                    {data.questions.map((question, index) => (
                        <QuestionComponent onAnswersChange={handleAnswersChange} key={index} data={question} type={'test'}></QuestionComponent>
                    ))}
                </div>
                <div className={styles.button}>
                    <AcceptButton onClick={() => endtest()}></AcceptButton>
                </div>
            </>
        </CoursesComponent>
    );
};

export default TestPage;