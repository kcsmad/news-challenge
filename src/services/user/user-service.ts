import axios from 'axios';
import { User } from '../../types';
import { Article } from "../../types/article";

axios.defaults.baseURL = "https://kcsmad.eu.auth0.com/api/v2/"
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_AUTH0_API_TOKEN}`

const doRegistration = async (user: User) => (
    await axios.post<User>('users', {
        ...user
    })
)

const getUserRoles = (userId: string): string | null => (
    localStorage.getItem(userId)
)


export default {
    doRegistration,
    getUserRoles
}
