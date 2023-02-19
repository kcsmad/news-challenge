import {
    ChangeEvent,
    useEffect,
    useState
} from "react";

import {
    Button,
    Container,
    Dimmer,
    Form,
    Loader,
    Segment,
    TextArea
} from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
import uuid from "react-uuid";

import { Article } from "../../../types";
import { ArticleService } from "../../../services";


const WriteArticlePage = () => {
    const { user } = useAuth0();
    const [article, setArticle] = useState({} as Article)
    const [isLoading, setLoading] = useState(false);

    const updateUserStat = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
        field: keyof Article) => {
        const target = event.currentTarget;


        switch(field) {
            case "title": setArticle({ ...article, title: target.value,  }); break;
            case "content": setArticle({ ...article, content: target.value,  }); break;
            case "description": setArticle({ ...article, description: target.value,  }); break;
            case "imageUrl": setArticle({ ...article, imageUrl: target.value,  }); break;
        }
    }

    const submitArticle = () => {
        article.id = uuid();
        article.isPublished = false;
        article.isPendingApproval = true;

        const myArticles = ArticleService.getMyArticles(user?.sub)
        myArticles.push(article);
        ArticleService.createArticle(user?.sub, myArticles)
    }

    return (
        <Container text>
            <Segment>
                <Dimmer active={isLoading}>
                    <Loader />
                </Dimmer>
                {/*{responseObj.code > 0 && showMessageError()}*/}

                <Form onSubmit={submitArticle}>
                    <Form.Field>
                        <label aria-label="Article Title">Title</label>
                        <input
                            required
                            type="text"
                            name="article_title"
                            id="article_title"
                            value={article.title}
                            onChange={(e) => updateUserStat(e, 'title')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label aria-label="Article Description">Description</label>
                        <input
                            required
                            type="text"
                            name="article_description"
                            id="article_description"
                            value={article.description}
                            onChange={(e) => updateUserStat(e, 'description')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label aria-label="Article category">Category</label>
                        <select
                            required
                            name="article_category"
                            id="article_category"
                            value={article.category}
                            onChange={(e) => updateUserStat(e, 'category')}
                        >
                            <option value=""></option>
                            <option value="engineering">Engineering</option>
                            <option value="ui-ux">UI/UX</option>
                            <option value="devops">DevOps</option>
                        </select>
                    </Form.Field>
                    <Form.Field>
                        <label aria-label="Picture Url">Picture Url</label>
                        <input
                            name="user_picture"
                            id="user_picture"
                            value={article.imageUrl}
                            onChange={(e) => updateUserStat(e, 'imageUrl')}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label aria-label="Nickname">Content</label>
                        <TextArea
                            type="text"
                            name="user_nickname"
                            id="user_nickname"
                            value={article.content}
                            onChange={(e) => updateUserStat(e, 'content')}
                        />
                    </Form.Field>
                    <Button color="blue" type="submit">Send Draft</Button>
                </Form>
            </Segment>
        </Container>
    )
}

export default WriteArticlePage
