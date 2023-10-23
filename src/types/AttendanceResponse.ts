import {IAcademicSubject, LessonTime} from "./ScheduleResponse";

export interface IStudentAttendance {
    size:number;
    numberOfElements?:number;
    content:IAttendance[]
    last?:boolean;
    empty?:boolean
    totalPages:number;
    totalElements:number
}
export interface IAttendance {
    id:string
    academicSubject:IAcademicSubject;
    studentId: string;
    date:string;
    startTime:LessonTime;
    endTime:LessonTime;
    attended:boolean
}
export interface ITeacherAttendance {
    id?:string
    group:string
    academicSubject:IAcademicSubject;
    weekDay: number
    startTime:LessonTime;
    endTime:LessonTime;
    type: string,
    room: string

}
export type studentAttendance = {
    id: string,
    academicSubject: IAcademicSubject,
    studentId: string,
    date: string,
    startTime: LessonTime,
    endTime: LessonTime
    attended: boolean
}
export interface IStudentAttendance{
    content: studentAttendance[]
}