import { List, Label } from 'semantic-ui-react';
import { Article } from "../../../../types";

type ArticlesListItemProps = {
    article: Article,
}

const ArticlesListItem = ({ article }: ArticlesListItemProps) => (
    <List.Item>
        <List.Content as='a'>{article.title}</List.Content>
        <List.Content floated="right">
            {article.isPendingApproval ? (
                <Label color="orange">
                    Pending Approval
                </Label>
            ) : (
                <Label color="green">
                    Published
                </Label>
            )}
        </List.Content>
    </List.Item>
)

export default ArticlesListItem;
