import axios from 'axios';
import { User } from '../../types';

axios.defaults.baseURL = "https://kcsmad.eu.auth0.com/api/v2/"
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_AUTH0_API_TOKEN}`

const doRegistration = async (user: User) => (
    await axios.post<User>('users', {
        ...user
    })
)

const doRoleAssignment = async (usersId: string[]) => (
    await axios.post('roles/rol_2m652gE72Gkd0GL1/users', { "users": usersId })
)
const testGettingAllUsers = async (): Promise<User[]> => (
   await axios.get<User[]>('users').then(resp => resp.data)
)

export default {
    doRegistration,
    doRoleAssignment,
    testGettingAllUsers,
}
