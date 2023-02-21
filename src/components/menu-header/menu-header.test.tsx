import { render, screen } from '@testing-library/react';

import MenuHeader from './menu-header';

const mockedUsedLocation = jest.fn().mockImplementation(() => ({
    pathname: 'http://localhost:3000/test/path',
    search: '',
    hash: '',
    state: null,
}))

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useLocation: () => mockedUsedLocation,
    useNavigate: () => mockedUseNavigate,
}))

jest.mock('./login-menu/login-menu');


describe.skip('Menu Header Component', () => {
    it('should render without errors', () => {
        render(<MenuHeader />);
        const component = screen.getByTestId('menu-header');
        expect(component).toBeTruthy();
    })
})
