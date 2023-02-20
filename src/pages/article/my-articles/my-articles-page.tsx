import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container} from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";

import { ArticlesList } from "../../../components/articles";
import { ArticleService } from "../../../services";
import { Article } from "../../../types";

const MyArticlesPage = () => {
    const [myArticles, setMyArticles] = useState([] as Article[])
    const { user } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        setMyArticles(ArticleService.getMyArticles(user?.sub))
    }, [])

    useEffect(() => {
        console.log(myArticles)
    }, [myArticles])

    const redirectCallback = (id: string) => (
        navigate('/my-article/edit', { state: { articleId: id } })
    )

    return (
        <Container text>
           <ArticlesList
               articles={myArticles}
               redirectCallback={(id: string) => redirectCallback(id)}
           />
        </Container>
    )
}

export default MyArticlesPage;
