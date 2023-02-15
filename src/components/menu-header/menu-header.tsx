import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Image, Menu } from "semantic-ui-react";
import { LoginMenu } from "./login-menu";

const MenuHeader = () => {
    const [currentPage, setCurrentPage] = useState("");
    const { pathname } = useLocation();

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
                <LoginMenu />
            </Menu.Menu>
        </Menu>
    )
}

export default MenuHeader;
