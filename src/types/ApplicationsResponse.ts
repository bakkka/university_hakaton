export interface IApplicationCreate{
    supervisorFullName: string,
    direction: string,
    letter: string,
    achievements: string
}
export interface IApplication{
    content: application[] ,
}
export type application = {
        id: string,
        date: string,
        userId: string,
        fullName: string,
        phoneNumber: string,
        email: string,
        supervisorFullName: string,
        direction: string,
        department: string,
        position: string,
        letter: string,
        achievements: string,
        status: string,
        workExperiences: [
        {
            id: string,
            startDate: string,
            endDate: string,
            departmentName: string,
            description: string
        }
    ]

}