import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { getUser, signInRequest } from "../services/auth";
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { api } from "../services/api";
import Router from "next/router";
import { apiClient } from "../services/axios";

type AuthContextType = {
    loggedUser: User | null;
    setLoggedUser: Dispatch<SetStateAction<User | null>>
    isAuthenticated: boolean;
    signIn: (data: SignInData) => Promise<User | null>;
    signOut: any
}

type User = {
    id: string;
    email: string;
    username: string;
}

type SignInData = {
    email: string;
    password: string;
}

type Props = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: Props) {
    
    const [loggedUser, setLoggedUser] = useState<User | null>(null)
    const isAuthenticated = !!loggedUser;

    useEffect(() => {
        const { 'x-access-token': token } = parseCookies()
        
        if (token) {
            apiClient(AuthContext).get('/auth/me').then(result => {
                const user = result.data
                setLoggedUser(user)
            })
        }
    }, [])

    async function signIn({ email, password }: SignInData) : Promise<User | null>{
        await signInRequest({
            email,
            password
        })
        .then((response: any) => {
            api.defaults.headers.common['Authorization'] = `Bearer ${response.token.accessToken}`

            setCookie(undefined, 'x-access-token', response.token.accessToken, {
                maxAge: response.token.expiresIn
            })

            setLoggedUser(response.user)
            
            Router.push('/')
        })
        .catch((error: any) => {
            console.log(error.message)
        })
        return loggedUser
    }

    async function signOut() {
        destroyCookie(null, 'x-access-token')
        setLoggedUser(null)
        Router.push('/')
    }

    return (
        <AuthContext.Provider value={{ loggedUser, setLoggedUser, isAuthenticated, signIn, signOut }}>
            { children }
        </AuthContext.Provider>
    )    
}