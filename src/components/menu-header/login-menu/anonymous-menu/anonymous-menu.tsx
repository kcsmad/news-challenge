import { Icon, Menu } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type AnonymousMenuProps = {
    currentPage: string
}

const AnonymousMenu = ({ currentPage }: AnonymousMenuProps) => {
    const { loginWithPopup } = useAuth0();
    const navigate = useNavigate();

    return (
        <>
            <Menu.Item
                name="Sign Up"
                active={currentPage === 'sign-up'}
                onClick={() => navigate('sign-up')}
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
