import { useEffect } from "react";
import { useAuth0, User } from "@auth0/auth0-react";
import { Icon, Menu } from "semantic-ui-react";

type AuthenticatedMenuProps = {
    user: User | undefined
}

const AuthenticatedMenu = ({ user }: AuthenticatedMenuProps) => {
    const { logout } = useAuth0()

    useEffect(() => {
        console.log(user)
    }, [])

    return (
        <>
            <Menu.Item
                name="User"
            >
                <Icon name="smile outline" />
                Hello, {user?.name}
            </Menu.Item>
            <Menu.Item
                name="Write an Article"
            >
                <Icon name="edit" />
                Write
            </Menu.Item>
            <Menu.Item
                name="Validation"
            >
                <Icon name="paper plane outline" />
                Approval
            </Menu.Item>
            <Menu.Item
                name="Bookmarks"
            >
                <Icon name="bookmark" />
                My Bookmarks
            </Menu.Item>
            <Menu.Item
                name="Account"
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
