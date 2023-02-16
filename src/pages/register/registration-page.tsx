import { Button, Checkbox, Form } from 'semantic-ui-react';

const RegistrationPage = () => {

    return (
        <Form action="">
            <Form.Field>
                <label aria-label="Name">Name</label>
                <input type="text" name="user_name" id="user_name" />
            </Form.Field>
            <Form.Field>
                <label aria-label="Email">Email</label>
                <input type="email" name="user_email" id="user_email" />
            </Form.Field>
            <Form.Field>
                <label aria-label="Picture">Picture</label>
                <input name="user_picture" id="user_picture" />
            </Form.Field>
            <Button type="submit">Sign Up</Button>
        </Form>
    )
}

export default RegistrationPage;
