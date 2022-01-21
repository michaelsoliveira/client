import { apiClient } from "./axios"

import type { User } from "./auth"

export type UserData = {
    email: string;
    username: string;
    password: string;
}

export type ResponseData = {
    data: {};
    errorMessage: string;
    error: boolean
}

export async function create(dataRequest: UserData) : Promise<ResponseData> {
    const { data } = await apiClient().post('users/create', dataRequest)
        return {
            data: data.user,
            errorMessage: data.errorMessage,
            error: data.error
        }
}

const AuthService = {
    create
}

export default AuthService