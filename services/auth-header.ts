import { parseCookies } from "nookies";

export default function authHeader() {
    const { 'x-access-token': token } = parseCookies()

    if (token) {
        return { Authorization: `Bearer ${token}`};
    } else {
        return {};
    }
}