import {
    Button,
    Container,
    Form
} from 'semantic-ui-react';

const RegistrationPage = () => {

    return (
       <Container text>
           <h1>Sign Up now!</h1>
           <Form>
               <Form.Field>
                   <label aria-label="Name">Name</label>
                   <input type="text" name="user_name" id="user_name" />
               </Form.Field>
               <Form.Field>
                   <label aria-label="Email">Email</label>
                   <input type="email" name="user_email" id="user_email" />
               </Form.Field>
               <Form.Field>
                   <label aria-label="Picture Url">Picture Url</label>
                   <input name="user_picture" id="user_picture" />
               </Form.Field>
               <Button color="blue" type="submit">Sign Up</Button>
           </Form>
       </Container>
    )
}

export default RegistrationPage;
