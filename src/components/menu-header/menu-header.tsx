import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon, Image, Menu, Segment } from "semantic-ui-react";

const MenuHeader = () => {
    const [currentPage, setCurrentPage] = useState("home");

    useEffect(() => {

    }, []);

    return (
        <Menu pointing secondary>
            <Menu.Item
                active={currentPage === "home"}
                onClick={() => console.log("test")}
            >
                <Image
                    as={NavLink}
                    to="/"
                    src={`${process.env.PUBLIC_URL}/images/swordnews_logo.svg`}
                />
                News
            </Menu.Item>
            <Menu.Item
                name="Articles"
                active={currentPage === "articles"}
                onClick={() => console.log("test")}
            />

            <Menu.Menu position="right">
                <Menu.Item
                    name="Sign Up"
                    active={currentPage === "register"}
                    onClick={() => console.log("test")}
                >
                    <Icon name="signup" />
                    Sign Up
                </Menu.Item>
                <Menu.Item
                    name="Sign In"
                    active={currentPage === "login"}
                    onClick={() => console.log("test")}
                >
                    <Icon name="sign-in" />
                    Sign In
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default MenuHeader;
