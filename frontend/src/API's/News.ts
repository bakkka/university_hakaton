import {AxiosResponse} from "axios";
import {IStudentAttendance, ITeacherAttendance} from "../types/AttendanceResponse";
import {AxiosInstanceAttendance, AxiosInstanceNews} from "./AxiosInstance";
import {INews} from "../types/NewsResponse";

export default class News{
    static async getNews(): Promise<AxiosResponse<INews>>{
        return AxiosInstanceNews.get<INews>('/news')
    }
}