import {AxiosInstanceAuth} from './AxiosInstance'
import {AxiosResponse} from "axios";
import {AuthBody, ITokens, IUser} from "../types/UserResponse";
export default class Auth{
    static async login(body:AuthBody): Promise<AxiosResponse<ITokens>>{
        return AxiosInstanceAuth.post<ITokens>('oauth2/token',body)
    }
    static async userInfo(): Promise<AxiosResponse<IUser>>{
        return AxiosInstanceAuth.get<IUser>('/userinfo')
    }
}