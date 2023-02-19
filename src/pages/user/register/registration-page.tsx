import {ChangeEvent, FormEvent, ReactElement, ReactHTML, useState} from 'react';
import {
    Button,
    Container,
    Dimmer,
    Form,
    Icon,
    Loader,
    Message,
    Segment
} from 'semantic-ui-react';
import { User } from "../../../types";
import {UserService} from "../../../services";

const RegistrationPage = () => {
    const [user, setUser] = useState({} as User);
    const [isLoading, setLoading] = useState(false)
    const [responseObj, setResponseObj] = useState({ code: 0, message: ""})

    const registerUser = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        setLoading(true);

        user.connection = "Username-Password-Authentication"
        user.name = `${user.given_name } ${user.family_name}`

        await UserService.doRegistration(user)
            .then(resp => setUser({ ...user, user_id: resp.data.user_id,  }))
            .catch(resp => setResponseObj({
                    code: resp.response.status,
                    message: resp.response.data.message
            }))

        UserService.getUserRoles(user.user_id)

        // await UserService.doRoleAssignment([user.user_id])
        //     .then(resp => setResponseObj({
        //         code: resp.status,
        //         message: ""
        //     }))
        //     .catch(resp => setResponseObj({
        //         code: resp.response.status,
        //         message: resp.response.data.message
        //     })).finally(() => {
        //         setLoading(false)
        //     });
    }

    const updateUserStat = (event: ChangeEvent<HTMLInputElement>, field: keyof User) => {
        const target = event.currentTarget;

        switch(field) {
            case "email": setUser({ ...user, email: target.value,  }); break;
            case "password": setUser({ ...user, password: target.value,  }); break;
            case "given_name": setUser({ ...user, given_name: target.value,  }); break;
            case "family_name": setUser({ ...user, family_name: target.value,  }); break;
            case "nickname": setUser({ ...user, nickname: target.value,  }); break;
            case "picture": setUser({ ...user, picture: target.value,  }); break;
        }
    }

    const showMessageError = (): ReactElement => {
        if (responseObj.code >= 400) {
            return (
                <Message
                    error
                >
                    <Message.Header>
                        <Icon name="x" />
                        Something went wrong!
                    </Message.Header>
                    {responseObj.message}
                </Message>
            )
        }

        if (responseObj.code > 0 && (responseObj.code === 200 || responseObj.code === 201)) {
            return <Message success>
                <Message.Header>
                    <Icon name="checkmark" />
                    Congratulations!!!
                </Message.Header>
                Welcome to our articles platform.
            </Message>;
        }

        return <></>
    }

    return (
        <Container text>
            <h1>Sign Up now!</h1>
            <Segment>
                <Dimmer active={isLoading}>
                    <Loader />
                </Dimmer>
                {responseObj.code > 0 && showMessageError()}

                <Form onSubmit={registerUser}>
                    <Form.Field>
                        <label aria-label="Email">Email</label>
                        <input
                            required
                            type="email"
                            name="user_email"
                            id="user_email"
                            value={user.email}
                            onChange={(e) => updateUserStat(e, 'email')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label aria-label="Password">Password</label>
                        <input
                            type="password"
                            name="user_password"
                            id="user_password"
                            value={user.password}
                            onChange={(e) => updateUserStat(e, 'password')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label aria-label="Given Name">Given Name</label>
                        <input
                            type="text"
                            name="user_given_name"
                            id="user_given_name"
                            value={user.given_name}
                            onChange={(e) => updateUserStat(e, 'given_name')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label aria-label="Family Name">Family Name</label>
                        <input
                            type="text"
                            name="user_family_name"
                            id="user_family_name"
                            value={user.family_name}
                            onChange={(e) => updateUserStat(e, 'family_name')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label aria-label="Nickname">Nickname</label>
                        <input
                            type="text"
                            name="user_nickname"
                            id="user_nickname"
                            value={user.nickname}
                            onChange={(e) => updateUserStat(e, 'nickname')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label aria-label="Picture Url">Picture Url</label>
                        <input
                            name="user_picture"
                            id="user_picture"
                            value={user.picture}
                            onChange={(e) => updateUserStat(e, 'picture')}
                        />
                    </Form.Field>
                    <Button color="blue" type="submit">Sign Up</Button>
                </Form>
            </Segment>
        </Container>
    )
}

export default RegistrationPage;
