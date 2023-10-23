import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITokens, IUser} from "../../types/UserResponse";


type state = {
    data: IUser;
    access_token:string;
    refresh_token:string
    isAuth: boolean;
    error: string;
    errorStatus: boolean;
}
const initialState : state = {
    data : {
        authority: [''],
        phone_number:'',
        email:'',
        sub:'',
        full_name:'',
        position:'',
        department:'',
        img_url:'',
        group: [''],
        direction:''
    },
    access_token:'',
    refresh_token:'',
    isAuth: false,
    error: '',
    errorStatus:false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        errorDrop(state){
            state.errorStatus = !state.errorStatus
        },
        loginFetchingSuccess(state, action: PayloadAction<ITokens>){
            state.error = '';
            state.isAuth = true;
            // state.data.user = action.payload.user
            state.access_token = action.payload.access_token
            localStorage.setItem('access_token', action.payload.access_token)
            localStorage.setItem('refresh_token', action.payload.refresh_token)
            // localStorage.setItem('user', JSON.stringify(action.payload.user))
        },
        userFetchingSuccess(state, action:PayloadAction<IUser>){
            state.data.authority[0] = action.payload.authority[0]
            state.data.email = action.payload.email
            state.data.sub = action.payload.sub
            state.data.full_name = action.payload.full_name
            state.data.phone_number = action.payload.phone_number
            if(action.payload.group){
                state.data.group = action.payload.group
            }
            if(action.payload.img_url){
                state.data.img_url = action.payload.img_url
            }
            if(action.payload.position){
                state.data.position = action.payload.position
            }
            if(action.payload.department){
                state.data.department = action.payload.department
            }
            if(action.payload.direction){
                state.data.direction = action.payload.direction
            }
        }
        // userUpdateFetchingSuccess(state, action:PayloadAction<IData>){
        //     state.isLoading = false;
        //     state.error = '';
        //     state.isAuth = true;
        //     state.data.user = action.payload;
        //     localStorage.setItem('user', JSON.stringify(action.payload))
        // },
        // loginFetchingError(state, action: PayloadAction<string>){
        //     state.isLoading = false;
        //     state.error = action.payload
        // },
        // registrationFetching(state){
        //     state.isLoading = true;
        // },
        // registrationFetchingSuccess(state, action: PayloadAction<IUser>){
        //     state.isLoading = false;
        //     state.error = '';
        //     state.isAuth = true;
        //     state.data.user = action.payload.user;
        //     state.data.tokens = action.payload.tokens
        //     localStorage.setItem('accessToken', action.payload.tokens.accessToken)
        //     localStorage.setItem('refreshToken', action.payload.tokens.refreshToken)
        //     localStorage.setItem('user', JSON.stringify(action.payload.user))
        // },
        // registrationFetchingError(state, action:PayloadAction<string>){
        //     state.isLoading = false;
        //     state.error = action.payload
        // },
        // logoutFetching(state){
        //     localStorage.removeItem('accessToken')
        //     localStorage.removeItem('refreshToken')
        //     localStorage.removeItem('user');
        //     state.isAuth = false;
        //     state.data.user = {
        //         id: 0,
        //         name: '',
        //         email:'',
        //         phone:'',
        //         city_id: 0,
        //         roles:[
        //             {
        //                 value: ''
        //             },
        //         ],
        //         teams: [
        //             {
        //                 id:0,
        //                 title:'',
        //                 description:''
        //             }
        //         ],
        //         master:{
        //             team_id:0
        //         }
        //     }
        //     state.error = ''
        // },
        // updateBioFetching(state, action: PayloadAction<IData>){
        //     state.data.user = action.payload;
        //     localStorage.setItem('user', JSON.stringify(action.payload))
        // },
        // updatePasswordError(state, action: PayloadAction<string>){
        //     state.error = action.payload
        // },
        // updateTokens(state, action: PayloadAction<ITokens>){
        //     state.data.tokens = action.payload
        //     localStorage.setItem('accessToken', action.payload.accessToken)
        //     localStorage.setItem('refreshToken', action.payload.refreshToken)
        //     state.data.user = JSON.parse(localStorage.getItem('user') || '{}')
        //     state.isAuth = true;
        // },
        // teamRegistrationFetchingError(state, action:PayloadAction<string>){
        //     state.error = action.payload
        // }
    },
})
export default userSlice.reducer
export const {loginFetchingSuccess,errorDrop,userFetchingSuccess} = userSlice.actions