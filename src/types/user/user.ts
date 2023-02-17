export default interface User {
    user_id: string,
    email: string,
    given_name: string,
    family_name: string,
    name: string,
    nickname: string,
    password?: string,
    picture: string,
    roles: string[],
    connection?: string,
}
