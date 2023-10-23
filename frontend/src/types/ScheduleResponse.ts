export type LessonTime = {
    hour: string,
    minute: string,
    second: string,
    nano: string
}
// export interface IScheduleDay{
//     day:Day
// }
export interface IAcademicSubject{
    id: string,
    title: string,
    direction: string,
    teacherFullName: string,
    teacherId: string
}
export interface IScheduleDay {
    date: string,
    numberOfLessons: number,
    firstLessonTime: LessonTime,
    lastLessonTime: LessonTime,
    lessons: [
        {
            id: string,
            academicSubject: IAcademicSubject
            weekDay: number,
            startTime: LessonTime,
            endTime: LessonTime,
            type: string,
            group: string,
            room: string
        }
    ]
}