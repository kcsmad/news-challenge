import { List, Label } from 'semantic-ui-react';
import { Article } from "../../../../types";

type ArticlesListItemProps = {
    article: Article,
    redirectCallback?: Function,
}

const ArticlesListItem = ({ article, redirectCallback }: ArticlesListItemProps) => (
    <List.Item
        data-testid="article-list-item"
        onClick={() => { if (redirectCallback) redirectCallback(article.id); }}
    >
        <List.Content as='a'>
            {article.title}
        </List.Content>
        <List.Content floated="right">
            {article.isPendingApproval && !article.isPublished ? (
                <Label data-testid="article-status-pending-approval" color="orange">
                    Pending Approval
                </Label>
            ) : (
                <Label data-testid="article-status-approved" color="green">
                    Published
                </Label>
            )}
        </List.Content>
    </List.Item>
)

export default ArticlesListItem;
