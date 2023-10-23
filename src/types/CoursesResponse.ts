import {LessonTime} from "./ScheduleResponse";

export interface ICourse{
    content:course[]
}
export type course = {
    title: string,
    allowedDirection: string,
    teacherId: string,
    teacherFullName: string,
    description: string,
    startAt: string,
    endsAt: string,
    sectionIds: [
        string
    ]
}
export interface ISection{
    id: string,
    title: string,
    description: string,
    tasks: [
        string
    ]
}
export interface ITaskContent{
     id:string
     title:string
     description:string
    openedAt:LessonTime
    closedAt:LessonTime
     sectionId:string
     courseTitle:string
     isAnswered:string
     grade:number
     fileUrl?:string
}
export interface ITaskTeacher{
    title: string,
    description: string,
    openedAt: LessonTime | null,
    closedAt: LessonTime | null,
    fileUrl?: string | null
    duration?:number
}
export interface ITest extends ITaskContent{
    duration: number,
    questions: [
        {
            id: string,
            question: string,
            answers: [
                {
                    answer: string
                }
            ],
            testId: string
        }
    ],
}
export interface ITestResponse{
    taskId: string,
    courseTitle:string,
    sectionId: {
        timestamp: number,
        date: string
    },
    startedAt: LessonTime,
    finishedAt: LessonTime,
    url: string,
    studentId: string,
    grade: number
}
export interface IAnswers {
    questionId:string,
    answers:[
        {
            answer:string
        }
    ]
}
export interface ITask{
    id: string,
    title: string,
    description: string,
    openedAt: LessonTime,
    closedAt: LessonTime,
    sectionId: string,
    courseTitle: string,
    type: 'test' | 'homework' | 'note' | 'lecture'
}