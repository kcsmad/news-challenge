import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Icon, Image, Menu, Segment } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";

const MenuHeader = () => {
    const [currentPage, setCurrentPage] = useState("");
    const { pathname } = useLocation();
    const { user, isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

    useEffect(() => {
        const path = pathname.split('/')[1];
        setCurrentPage(path);
    }, []);

    return (
        <Menu pointing secondary>
            <Menu.Item
                active={currentPage === ""}
            >
                <Image
                    as={NavLink}
                    to="/"
                    src={`${process.env.PUBLIC_URL}/images/swordnews_logo.svg`}
                />
                News
            </Menu.Item>

            <Menu.Menu position="right">
                <Menu.Item
                    name="Sign Up"
                    onClick={() => console.log("test")}
                >
                    <Icon name="signup" />
                    Sign Up
                </Menu.Item>
                <Menu.Item
                    name="Sign In"
                    active={currentPage === "login"}
                    onClick={() => loginWithRedirect()}
                >
                    <Icon name="sign-in" />
                    Sign In
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default MenuHeader;
