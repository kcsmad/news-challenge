import { Icon, Menu } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";

const AnonymousMenu = () => {
    const { loginWithPopup } = useAuth0();

    return (
        <>
            <Menu.Item
                name="Sign In"
                onClick={() => console.log("clicked")}
                data-testid={"anonymous-menu-signup"}
            >
                <Icon name="signup"/>
                Sign Up
            </Menu.Item>

            <Menu.Item
                name="Sign In"
                onClick={() => loginWithPopup()}
                data-testid={"anonymous-menu-sign-in"}
            >
                <Icon name="sign-in"/>
                Sign In
            </Menu.Item>
        </>
    )
}

export default AnonymousMenu;
