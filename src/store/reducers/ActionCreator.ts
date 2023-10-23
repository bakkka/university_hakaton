import {
    errorDrop,
    loginFetchingSuccess, userFetchingSuccess,
} from "./UserSlice";
import {useNavigate} from "react-router-dom";
import {AuthBody} from "../../types/UserResponse";
import Auth from "../../API's/Auth";
import {AppDispatch} from "../index";
import Courses from "../../API's/Courses";
import {coursesFetchingSuccess} from "./CourseSlice";
import Storage from "../../API's/Storage";
import {ITaskTeacher} from "../../types/CoursesResponse";


export const fetchLogin = (body:AuthBody) => async (dispatch: AppDispatch) => {
    try {
        console.log(body)
        const response = await Auth.login(body);
        dispatch(loginFetchingSuccess(response.data))
    } catch (e:any){
        dispatch(errorDrop())

    }
}
export const fetchUserInfo = () => async (dispatch:AppDispatch) => {
    try{
        const response = await Auth.userInfo();
        dispatch(userFetchingSuccess(response.data))
    } catch (e:any){
        dispatch(errorDrop())
    }
}
export const fetchCourse = () => async (dispatch: AppDispatch) => {
    try{
        const response = await Courses.getCourse();
        dispatch(coursesFetchingSuccess(response.data))
    } catch (e:any){
        dispatch(errorDrop())
    }
}
export const upHometask = (file:FormData, id:string) => async (dispatch: AppDispatch) => {
    try{
        const response = await Storage.uploadFile(file);
        const response2 = await Courses.postHometask(id, response.data);
        console.log(response2)
    } catch (e:any){
        dispatch(errorDrop())
    }
}
export const upTeacherTask = (sectionId:string, type:string, body:ITaskTeacher) => async (dispatch: AppDispatch) => {
    try{
        const response2 = await Courses.postTeacherTask(sectionId,type, body);
        console.log(response2)
    } catch (e:any){
        dispatch(errorDrop())
    }
}
// export const fetchUpdateUser = (id:number) => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(loginFetching())
//         const response = await Users.getUser(id);
//         dispatch(userUpdateFetchingSuccess(response.data))
//     } catch (e:any){
//         console.log(e.response.data.message)
//     }
// }
// export const fetchRegistration = (email:string, password:string, phone:string, city_id:number, name:string) =>
//     async (dispatch:AppDispatch) => {
//         try {
//             dispatch(registrationFetching());
//             const response = await Auth.registration(email, password, phone, name, city_id)
//             dispatch(registrationFetchingSuccess(response.data))
//         } catch (e:any){
//             dispatch(errorDrop())
//             dispatch(registrationFetchingError(e.response.data.message))
//         }
//     }
// export const fetchTeamRegistration = (title: string, phone:string, email:string,city_id:number, admin_id:number,address:string,
//                                       tags:string[]) => async(dispatch: AppDispatch) => {
//     try{
//         const response = await Team.create(title, phone, email, city_id, admin_id, address, tags)
//     }catch (e:any){
//         dispatch(errorDrop())
//         dispatch(teamRegistrationFetchingError('error'))
//     }
// }
// export const fetchGetTeam = (id:number) => async(dispatch: AppDispatch) => {
//     try{
//         const response = await Team.get(id)
//         dispatch(teamFetchingSuccess(response.data))
//     }catch (e:any){
//         console.log('error')
//     }
// }
// export const fetchUpdateTeam = (id:number, team:team) => async(dispatch: AppDispatch) => {
//     try{
//         const response = await Team.update(id,team)
//         dispatch(teamUpdateFetchingSuccess(response.data))
//     }catch (e:any){
//         console.log('error')
//     }
// }
// export const fetchLogout = (id:number) => async (dispatch: AppDispatch) => {
//     try {
//         const response = await Auth.logout(id);
//         dispatch(logoutFetching())
//     } catch (e) {
//         console.log('error')
//     }
// }
// export const fetchBioUpdate = (id:number, name:string,email:string, phone:string, city_id:number) => async (dispatch: AppDispatch) => {
//     try {
//         const response = await Users.userBioUpdate(id, name,email, phone, city_id);
//         dispatch(updateBioFetching(response.data))
//     } catch (e) {
//         console.log('error')
//     }
// }
// export const fetchPasswordUpdate = (id:number, oldPassword:string, newPassword:string) => async (dispatch: AppDispatch) => {
//     try {
//         const response = await Users.userPasswordUpdate(id,oldPassword,newPassword)
//     } catch (e:any) {
//         dispatch(errorDrop())
//         dispatch(updatePasswordError(e.response.data.message))
//     }
// }
// export const fetchRefresh = (refreshToken: string) => async (dispatch: AppDispatch) => {
//     try {
//         const response = await Auth.refresh(refreshToken)
//         dispatch(updateTokens(response.data))
//     } catch (e) {
//         console.log('error')
//     }
// }
// export const fetchTeamPhotoUpdate = (id: number, file: File) => async (dispatch: AppDispatch) => {
//     try{
//         const formData = new FormData();
//         formData.append('image', file);
//         const response = await Team.updatePhoto(id, formData);
//     } catch (e) {
//         console.log('error')
//     }
//
// }