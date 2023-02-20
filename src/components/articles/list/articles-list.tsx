import { useNavigate } from "react-router-dom";
import { Button, Icon, List, Segment, Header } from "semantic-ui-react";
import ArticlesListItem from "./item/articles-list-item";
import { Article } from "../../../types";

type ArticlesListProps = {
    articles: Article[]
    redirectCallback?: Function,
}

const ArticlesList = ({ articles, redirectCallback }: ArticlesListProps) => {
    const navigate = useNavigate();

    return (
        <List
            animated
            selection
            divided
            data-testid="articles-list"
            verticalAlign="middle"
        >
            {articles.length > 0
                ? articles.map(article => <ArticlesListItem key={article.id} article={article} redirectCallback={redirectCallback} />)
                : (
                    <Segment
                        placeholder
                        data-testid="articles-list-empty-placeholder"
                    >
                        <Header icon>
                            <Icon name="warning sign" />
                            You don't have articles on draft or published.
                        </Header>
                        <Button primary
                                onClick={() => navigate('/write-article')}
                        >
                            Write your first article
                        </Button>
                    </Segment>
                )
            }
        </List>
    )
}

export default ArticlesList;
