import {
    fireEvent,
    render,
    screen,
} from '@testing-library/react';

import { Article } from "../../../types";
import ArticlesList from "./articles-list";

const Chance = require('chance');
const chance = new Chance();

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigate,
}))

const mockedArticles: Article[] = [
    {
        id: chance.string(),
        title: chance.sentence(),
        description: chance.paragraph(),
        category: chance.string(),
        imageUrl: chance.url(),
        content: chance.paragraph({ sentences: 2 }),
        isPendingApproval: true,
        isPublished: false,
        user_id: chance.string()
    },
    {
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
]

const mockedCallback = jest.fn()

describe('Articles List Component', () => {
    it('should render without error', () => {
        render(<ArticlesList articles={mockedArticles} />);
        const component = screen.getByTestId('articles-list');
        expect(component).toBeTruthy();
    })

    it('should render without error when articles is empty', () => {
        render(<ArticlesList articles={[]} />);
        const component = screen.getByTestId('articles-list-empty-placeholder')
        expect(component).toBeTruthy();
    })

    it('should trigger navigation when button clicked', () => {
        render(<ArticlesList articles={[]} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockedUsedNavigate).toHaveBeenCalled();
    })
})
