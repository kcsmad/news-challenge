import {useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom";

import {
    Container,
    Divider,
    Image,
    Label,
    Form,
} from "semantic-ui-react";

const MyAccountProfile = () => {
    const { user } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [])

    return (
        <Container text textAlign="center">
            <Image centered src={user?.picture} size='medium' circular />
            <Label color="green">Admin</Label>

            <Divider />

            <Form>
                <Form.Field>
                    <label>Name</label>
                    <input disabled value={user?.name} />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input disabled value={user?.email} />
                </Form.Field>
            </Form>
        </Container>
    )
}

export default MyAccountProfile;
