import axios from "axios";
import env from '../env.json'

export const AxiosInstanceAuth = axios.create({
    baseURL: env.AUTH_URL, // Замените на ваш URL
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa('front:admin')}`,
    },
});
export const AxiosInstanceSchedule = axios.create({
    baseURL: env.SCHEDULE_ATTENDANCE_URL, // Замените на ваш URL
});

export const AxiosInstanceUser = axios.create({
    baseURL: env.USER_URL
});

export const AxiosInstanceCourses = axios.create({
    baseURL: env.COURSES_URL,
});
export const AxiosInstanceStorage = axios.create({
    baseURL: env.STORAGE_URL,
});
export const AxiosInstanceApplications = axios.create({
    baseURL: env.APPLICATIONS_URL,
});
export const AxiosInstanceAttendance = axios.create({
    baseURL: env.SCHEDULE_ATTENDANCE_URL,
});
export const AxiosInstanceNews = axios.create({
    baseURL: env.NEWS_URL,
});

AxiosInstanceSchedule.interceptors.request.use((config) =>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config;
})
AxiosInstanceNews.interceptors.request.use((config) =>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config;
})
AxiosInstanceAttendance.interceptors.request.use((config) =>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config;
})
AxiosInstanceApplications.interceptors.request.use((config) =>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config;
})
AxiosInstanceStorage.interceptors.request.use((config) =>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    config.headers["Content-Type"] = 'multipart/form-data'
    return config;
})
AxiosInstanceCourses.interceptors.request.use((config) =>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config;
})
AxiosInstanceUser.interceptors.request.use((config) =>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config;
})