import {AxiosResponse} from "axios/index";
import {IScheduleDay} from "../types/ScheduleResponse";
import {AxiosInstanceCourses, AxiosInstanceSchedule} from "./AxiosInstance";
import {IStudentAttendance} from "../types/AttendanceResponse";
import {
    IAnswers,
    ICourse,
    ISection,
    ITask,
    ITaskContent,
    ITaskTeacher,
    ITest,
    ITestResponse
} from "../types/CoursesResponse";

export default class Courses{
    static async getCourse(): Promise<AxiosResponse<ICourse>>{
        return AxiosInstanceCourses.get<ICourse>('/course')
    }
    static async getProgress(courseTitle:string): Promise<AxiosResponse<number>>{
        return AxiosInstanceCourses.get<number>(`/course/${courseTitle}/progress`)
    }
    static async getSection(sectionId:string): Promise<AxiosResponse<ISection>>{
        return AxiosInstanceCourses.get<ISection>(`/section/${sectionId}`)
    }
    static async getTask(taskId:string): Promise<AxiosResponse<ITask>>{
        return AxiosInstanceCourses.get<ITask>(`/task/${taskId}`)
    }
    static async getTaskContent(taskId:string, taskType:string): Promise<AxiosResponse<ITask>>{
        return AxiosInstanceCourses.get<ITask>(`/task/${taskType}/${taskId}`)
    }
    static async getTest(taskId:string): Promise<AxiosResponse<ITest>>{
        return AxiosInstanceCourses.post<ITest>(`/task/test/${taskId}`)
    }
    static async endTest(answers:IAnswers[], taskId:string): Promise<AxiosResponse<ITestResponse>>{
        return AxiosInstanceCourses.post<ITestResponse>(`/task/test/${taskId}`, answers)
    }
    static async postHometask(taskId:string, link:string): Promise<AxiosResponse<ITask>>{
        return AxiosInstanceCourses.post<ITask>(`/task/homework/${taskId}`,{link})
    }
    static async postTeacherTask(sectionId:string, type:string, body:ITaskTeacher): Promise<AxiosResponse<ITaskContent>>{
        return AxiosInstanceCourses.post<ITaskContent>(`/section/${sectionId}/${type}`, body)
    }
}