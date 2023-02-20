import {
    fireEvent,
    render,
    screen
} from '@testing-library/react';

import ArticlesListItem from "./articles-list-item";
import { Article } from "../../../../types";

const Chance = require('chance');
const chance = new Chance();

const mockArticle: Article = {
    id: chance.string(),
    title: chance.sentence(),
    description: chance.paragraph(),
    category: chance.string(),
    imageUrl: chance.url(),
    content: chance.paragraph({ sentences: 2 }),
    isPendingApproval: true,
    isPublished: false,
    user_id: chance.string()
}

const mockedCallback = jest.fn()
describe('Articles List Item Component', () => {
    it('should render without errors', () => {
        render(<ArticlesListItem article={mockArticle} />)
        const component = screen.getByTestId("article-list-item");
        expect(component).toBeTruthy()
    })

    it('should render orange label if still pending for approval', () => {
        render(<ArticlesListItem article={mockArticle} />)
        const pendingLabel = screen.getByTestId("article-status-pending-approval")
        expect(pendingLabel).toBeTruthy();
    })

    it('should render green label if article is already approved', () => {
        render(<ArticlesListItem article={{...mockArticle, isPublished: true, isPendingApproval: false}} />)
        const approvedLabel = screen.getByTestId("article-status-approved")
        expect(approvedLabel).toBeTruthy();
    })

    describe('Callback Function', () => {
        it('should trigger redirect callback when truthy', () => {
            render(<ArticlesListItem article={mockArticle} redirectCallback={mockedCallback} />)
            const component = screen.getByTestId("article-list-item");
            fireEvent.click(component);
            expect(mockedCallback).toHaveBeenCalled();
        })

        it('shouldn\'t trigger redirect callback when truthy', () => {
            render(<ArticlesListItem article={mockArticle} />)
            const component = screen.getByTestId("article-list-item");
            fireEvent.click(component);
            expect(mockedCallback).not.toHaveBeenCalled();
        })
    })
})
