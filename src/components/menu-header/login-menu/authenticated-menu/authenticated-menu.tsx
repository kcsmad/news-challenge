import { useEffect } from "react";
import { useAuth0, User } from "@auth0/auth0-react";
import { Icon, Menu } from "semantic-ui-react";

type AuthenticatedMenuProps = {
    user: User | undefined
}

const AuthenticatedMenu = ({ user }: AuthenticatedMenuProps) => {

    useEffect(() => {}, [])

    return (
        <Menu.Item
            name="User"
        >
            <Icon name="user" />
            Hello, {user?.name}
        </Menu.Item>
    )
}

export default AuthenticatedMenu;
