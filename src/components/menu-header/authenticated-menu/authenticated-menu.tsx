import { useAuth0 } from "@auth0/auth0-react";
import { Icon, Menu } from "semantic-ui-react";

type AuthenticatedMenuProps = {
    currentPage: string
}
const AuthenticatedMenu = ({ currentPage }: AuthenticatedMenuProps) => {
    const { user, isAuthenticated, loginWithRedirect } = useAuth0();

    return (
        <Menu.Item
            name="Sign In"
            active={currentPage === "login"}
            onClick={() => loginWithRedirect()}
        >
            <Icon name="sign-in" />
            Sign In
        </Menu.Item>
    )
}
