import {AxiosResponse} from "axios";
import {IScheduleDay} from "../types/ScheduleResponse";
import {AxiosInstanceApplications, AxiosInstanceSchedule} from "./AxiosInstance";
import {IStudentAttendance} from "../types/AttendanceResponse";
import {application, IApplication, IApplicationCreate} from "../types/ApplicationsResponse";

export default class Applications{
    static async createApplication(body:IApplicationCreate): Promise<AxiosResponse>{
        return AxiosInstanceApplications.post('/employee/applications/create', body)
    }
    static async getStudentApplications(): Promise<AxiosResponse<IApplication>>{
        return AxiosInstanceApplications.get<IApplication>('/employee/applications')
    }
    static async getSupervisorApplicationList(): Promise<AxiosResponse<IApplication>>{
        return AxiosInstanceApplications.get<IApplication>('/supervisor/applications')
    }
    static async getAdmissionApplicationList(): Promise<AxiosResponse<IApplication>>{
        return AxiosInstanceApplications.get<IApplication>('/admission/applications')
    }
    static async getAdmissionApplication(id:string): Promise<AxiosResponse<application>>{
        return AxiosInstanceApplications.get<application>(`/admission/applications/application?id=${id}`)
    }
    static async getSupervisorApplication(id:string): Promise<AxiosResponse<application>>{
        return AxiosInstanceApplications.get<application>(`/supervisor/applications/application?id=${id}`)
    }
    static async approveSupervisorApplication(id:string): Promise<AxiosResponse>{
        return AxiosInstanceApplications.put(`/supervisor/applications/application/approve/${id}`)
    }
    static async approveAdmissionApplication(id:string): Promise<AxiosResponse>{
        return AxiosInstanceApplications.put(`/admisson/applications/application/approve/${id}`)
    }
    static async rejectSupervisorApplication(id:string): Promise<AxiosResponse>{
        return AxiosInstanceApplications.put(`/supervisor/applications/application/reject/${id}`)
    }
    static async rejectAdmissionApplication(id:string): Promise<AxiosResponse>{
        return AxiosInstanceApplications.put(`/admisson/applications/application/reject/${id}`)
    }
}