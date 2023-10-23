import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./reducers/UserSlice";
import userReducer from './reducers/UserSlice';
import courseReducer from './reducers/CourseSlice'
const rootReducer = combineReducers({
    userReducer,
    courseReducer
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export default setupStore
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch']
export type AppStore = ReturnType<typeof setupStore>