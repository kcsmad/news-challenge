import { Icon, Menu } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";

const AnonymousMenu = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Menu.Item
            name="Sign In"
            onClick={() => loginWithRedirect()}
        >
            <Icon name="sign-in"/>
            Sign In
        </Menu.Item>
    )
}

export default AnonymousMenu;
