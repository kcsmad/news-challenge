import { useEffect, useState } from "react";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import { Image, Menu } from "semantic-ui-react";

import { LoginMenu } from "./login-menu";

const MenuHeader = () => {
    const [currentPage, setCurrentPage] = useState("");
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const path = pathname.split('/')[1];
        setCurrentPage(path);
    }, [])

    useEffect(() => {
        const path = pathname.split('/')[1];
        if (path !== currentPage) {
            setCurrentPage(path);
        }
    }, [pathname, currentPage])

    return (
        <Menu pointing secondary>
            <Menu.Item
                active={currentPage === ""}
                onClick={() => navigate('/')}
            >
                <Image src={`${process.env.PUBLIC_URL}/images/swordnews_logo.svg`} />
                News
            </Menu.Item>

            <Menu.Menu position="right">
                <LoginMenu currentPage={currentPage} />
            </Menu.Menu>
        </Menu>
    )
}

export default MenuHeader;
