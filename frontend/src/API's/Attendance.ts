import {application, IApplication, IApplicationCreate} from "../types/ApplicationsResponse";
import {AxiosResponse} from "axios/index";
import {AxiosInstanceApplications, AxiosInstanceAttendance} from "./AxiosInstance";
import {IStudentAttendance, ITeacherAttendance} from "../types/AttendanceResponse";

export default class Attendance{
    static async getCurrentLesson(): Promise<AxiosResponse<ITeacherAttendance>>{
        return AxiosInstanceAttendance.get<ITeacherAttendance>('/teacher/schedule/current')
    }
    static async getDayLessons(date:string): Promise<AxiosResponse<ITeacherAttendance[]>>{
        return AxiosInstanceAttendance.get<ITeacherAttendance[]>(`/teacher/attendance/all-academic-subjects/?date=${date}`)
    }
    static async getLessonAttendance(academicSubjectId:string,date:string, startTime:string, endTime:string): Promise<AxiosResponse<IStudentAttendance>>{
        return AxiosInstanceAttendance.get<IStudentAttendance>(`/teacher/attendance/academic-subject?academicSubjectId=${academicSubjectId}&date=${date}&startTime=${startTime}&endTime=${endTime}`)
    }
    static async changeAttend(id:string): Promise<AxiosResponse>{
        return AxiosInstanceAttendance.post(`/teacher/attendance?attendanceId=${id}`)
    }

}