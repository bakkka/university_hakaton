import {AuthBody, ITokens, IUser} from "../types/UserResponse";
import {AxiosResponse} from "axios";
import {AxiosInstanceAuth, AxiosInstanceSchedule} from "./AxiosInstance";
import {IScheduleDay} from "../types/ScheduleResponse";
import {IStudentAttendance} from "../types/AttendanceResponse";

export default class Schedule{
    static async getStudentSchedule(): Promise<AxiosResponse<IScheduleDay[]>>{
        return AxiosInstanceSchedule.get<IScheduleDay[]>('/student/schedule')
    }
    static async getStudentAttendance(academicSubjectId:string):Promise<AxiosResponse<IStudentAttendance>>{
        return AxiosInstanceSchedule.get<IStudentAttendance>(`/student/attendance?academicSubjectId=${academicSubjectId}`)
    }
}