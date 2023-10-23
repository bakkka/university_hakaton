import {AxiosResponse} from "axios";
import {IScheduleDay} from "../types/ScheduleResponse";
import {AxiosInstanceSchedule, AxiosInstanceUser} from "./AxiosInstance";
import {IStudentAttendance} from "../types/AttendanceResponse";
import {group, ICurator, IDirections, IGroup, ILessons} from "../types/UserResponse";

export default class User{
    static async getDirections(): Promise<AxiosResponse<IDirections>>{
        return AxiosInstanceUser.get<IDirections>('/directions')
    }
    static async getGroupList(group:string): Promise<AxiosResponse<IGroup>>{
        return AxiosInstanceUser.get<IGroup>(`/group/${group}/students`)
    }
    static async getCurator(dirTitle:string): Promise<AxiosResponse<ICurator>>{
        return AxiosInstanceUser.get<ICurator>(`/direction/${dirTitle}/curator`)
    }
    static async getStudent(id:string): Promise<AxiosResponse<group>>{
        return AxiosInstanceUser.get<group>(`/user/student/${id}`)
    }
    static async getLessons(dirTitle:string): Promise<AxiosResponse<ILessons[]>>{
        return AxiosInstanceUser.get<ILessons[]>(`/direction/${dirTitle}/discipline`)
    }
}