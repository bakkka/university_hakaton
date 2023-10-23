import {AxiosResponse} from "axios/index";
import {IScheduleDay} from "../types/ScheduleResponse";
import {AxiosInstanceCourses, AxiosInstanceSchedule, AxiosInstanceStorage} from "./AxiosInstance";
import {IStudentAttendance} from "../types/AttendanceResponse";
import {ICourse, ISection, ITask} from "../types/CoursesResponse";

export default class Storage{
    static async uploadFile(file:FormData): Promise<AxiosResponse<string>>{
        return AxiosInstanceStorage.post<string>('/course', {file})
    }
}