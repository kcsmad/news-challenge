import { useEffect, useState } from "react";
import { Container} from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";

import { ArticlesList } from "../../../components/articles";
import { ArticleService } from "../../../services";
import { Article } from "../../../types";

const MyArticlesPage = () => {
    const [myArticles, setMyArticles] = useState([] as Article[])
    const { user } = useAuth0();

    useEffect(() => {
        setMyArticles(ArticleService.getMyArticles(user?.sub))
    }, [])

    useEffect(() => {
        console.log(myArticles)
    }, [myArticles])

    return (
        <Container text>
           <ArticlesList articles={myArticles} />
        </Container>
    )
}

export default MyArticlesPage;
