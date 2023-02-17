import { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { UserService } from "../../services";

const HomePage = () => {

    useEffect(() => {
        UserService.testGettingAllUsers().then(resp => console.log(resp));
    }, [])

    return (
        <Container data-testid="main-container">
            Text
        </Container>
    )
}

export default HomePage;
