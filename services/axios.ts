import axios from 'axios'
import { NextApiRequest, NextPageContext } from 'next'
import { parseCookies } from 'nookies'
import * as cookie from 'cookie';
import { useRouter } from 'next/router'

export function apiClient(ctx?: any) {
    
    const { 'x-access-token': token } = parseCookies(ctx)

    const api = axios.create({
        baseURL: 'http://localhost:3333',
        // withCredentials: true
    })

    api.interceptors.request.use(config => {
        

        return Promise.resolve(config)
    }, error => {
        const router = useRouter()
        if (error.response.status === 401) {
            router.push('/unauthorized')
        }
        
        return Promise.reject(error)
    })
    
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    return api;
}