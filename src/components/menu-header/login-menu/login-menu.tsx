import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AnonymousMenu } from "./anonymous-menu";
import { AuthenticatedMenu } from "./authenticated-menu";

type LoginMenuProps = {
    currentPage: string
}

const LoginMenu =  ({ currentPage }: LoginMenuProps) => {
    const { user, isAuthenticated, getIdTokenClaims } = useAuth0();

    useEffect(() => {
        getIdTokenClaims().then(resp => console.log(resp))
    }, [])

    return isAuthenticated
        ? <AuthenticatedMenu user={user} currentPage={currentPage} />
        : <AnonymousMenu currentPage={currentPage} />;
}

export default LoginMenu;
