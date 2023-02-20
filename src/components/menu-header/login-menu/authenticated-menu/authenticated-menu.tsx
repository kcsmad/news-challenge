import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0, User } from "@auth0/auth0-react";
import { Icon, Menu } from "semantic-ui-react";

type AuthenticatedMenuProps = {
    user: User | undefined,
    currentPage: string
}

const AuthenticatedMenu = ({ user, currentPage }: AuthenticatedMenuProps) => {
    const { logout } = useAuth0()
    const navigate = useNavigate();

    return (
        <>
            <Menu.Item name="User">
                <Icon name="smile outline" />
                Hello, {user?.name}
            </Menu.Item>
            <Menu.Item
                name="My Articles"
                active={currentPage === 'my-articles'}
                onClick={() => navigate('my-articles')}
            >
                <Icon name="edit" />
                My Articles
            </Menu.Item>
            <Menu.Item
                name="Approval"
                active={currentPage === 'articles-approval'}
                onClick={() => navigate('articles-approval')}
            >
                <Icon name="paper plane outline" />
                Approval
            </Menu.Item>
            <Menu.Item
                name="Bookmarks"
                active={currentPage === 'my-bookmarks'}
                onClick={() => navigate('my-bookmarks')}
            >
                <Icon name="bookmark" />
                My Bookmarks
            </Menu.Item>
            <Menu.Item
                name="Account"
                active={currentPage === 'my-account'}
                onClick={() => navigate('my-account')}
            >
                <Icon name="user" />
                My Account
            </Menu.Item>
            <Menu.Item
                name="Logout"
                onClick={() => logout()}
            >
                <Icon name="log out" />
                Leave
            </Menu.Item>
        </>
    )
}

export default AuthenticatedMenu;
