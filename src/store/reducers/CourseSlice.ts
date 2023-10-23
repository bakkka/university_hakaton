import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITokens, IUser} from "../../types/UserResponse";
import {course, ICourse} from "../../types/CoursesResponse";


type state = {
    content:course[]
    activeSections:[string]
    activeDescription:string
}
const initialState : state = {
    content:[{
        title: '',
        allowedDirection: '',
        teacherId: '',
        teacherFullName: '',
        description: '',
        startAt: '',
        endsAt: '',
        sectionIds: [
            ''
        ]
    }],
    activeSections : [''],
    activeDescription : ''
}

export const courseSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        coursesFetchingSuccess(state, action: PayloadAction<ICourse>){
            state.content = action.payload.content
        },
        setActiveLesson(state, action:PayloadAction<{section:[string], description:string}>){
            state.activeSections = action.payload.section
            state.activeDescription = action.payload.description
        }
    },
})
export default courseSlice.reducer
export const {coursesFetchingSuccess, setActiveLesson} = courseSlice.actions