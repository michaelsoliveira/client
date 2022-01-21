import { string } from "yup/lib/locale";
import { api } from "./api"
import { apiClient } from "./axios"

export type SignInRequestData = {
    email: string;
    password: string;
}

export type User = {
    id: string;
    email: string;
    username: string;
}

type DataResponse = {
    token: {
        accessToken: string;
        expiresIn: number;
    };
    refreshToken: string;
    user: User;
}

export async function signInRequest(data: SignInRequestData) : Promise<DataResponse>{
    try {
        const dataResponse = await api.post('/auth/login', data)
        const { user, token, refreshToken } = dataResponse.data as DataResponse
        
        return Promise.resolve({
            token,
            user,
            refreshToken
        })
    } catch (error) {
        return Promise.reject()
    }
    
}

export async function getUser() : Promise<User>{
    return await apiClient().get('/auth/me')
}