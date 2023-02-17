import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AnonymousMenu } from "./anonymous-menu";
import { AuthenticatedMenu } from "./authenticated-menu";

const LoginMenu =  () => {
    const { user, isAuthenticated, getIdTokenClaims } = useAuth0();

    useEffect(() => {
        getIdTokenClaims().then(resp => console.log(resp))
        console.log(user)
    }, [])

    return isAuthenticated ? <AuthenticatedMenu user={user} /> : <AnonymousMenu />;
}

export default LoginMenu;
