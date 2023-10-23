import {string} from "prop-types";
import {LessonTime} from "./ScheduleResponse";

export interface ITokens{
    access_token:string;
    refresh_token:string;
}
export interface IUser{
    authority:[string]
    email:string
    phone_number:string
    full_name:string
    sub:string
    position?:string;
    department?:string;
    img_url?:string;
    group?:[''];
    direction?:string;
}
export interface AuthBody{
    grant_type: string,
    code: string,
    redirect_uri: string,
}

export interface IDirections{
    content:direction[]
}
export interface ICurator{
    id: string,
    username: string,
    fullName: string,
    email: string,
    phoneNumber: string,
    directionId: string,
    imgUrl: string,
}
export interface IGroup{
    content:group[]
}
export type group = {
    id: string,
    username: string,
    fullName: string,
    email: string,
    phoneNumber: string,
    directionId: string,
    studGroup: string,
    imgUrl: string
}
export type direction = {
    id:string,
    title:string
}

export interface ILessons{
    title:string;
    description:string;
    teacherId:string;
    courseId:string;
    academicSubjectId:string;
    startsAt:LessonTime;
    endsAt:LessonTime;
}