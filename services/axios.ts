import axios from 'axios'
import { NextApiRequest, NextPageContext } from 'next'
import { parseCookies } from 'nookies'
import * as cookie from 'cookie';

export function apiClient(ctx?: any) {
    const { 'x-access-token': token } = parseCookies(ctx)

    const api = axios.create({
        baseURL: 'http://localhost:3333',
        // withCredentials: true
    })

    api.interceptors.request.use(config => {

        return Promise.resolve(config)
    })

    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    return api;
}