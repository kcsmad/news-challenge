import { fireEvent, render, screen } from "@testing-library/react";
import {useAuth0} from "@auth0/auth0-react";
import AnonymousMenu from "./anonymous-menu";
import mocked = jest.mocked;

const mockedUseAuth0 = mocked(useAuth0, true)

const mockedUser = {
    email: "luffy@test.com",
    email_verified: true,
    sub: "auth0|12345678901234",
};

describe('Anonymous Login Menu Component', () => {
    beforeEach(() => {
        mockedUseAuth0.mockReturnValue({
            isAuthenticated: true,
            user: mockedUser,
            logout: jest.fn(),
            loginWithRedirect: jest.fn(),
            loginWithPopup: jest.fn(),
            getAccessTokenWithPopup: jest.fn(),
            getAccessTokenSilently: jest.fn(),
            getIdTokenClaims: jest.fn(),
            isLoading: false,
            handleRedirectCallback: jest.fn(),
        })
    })

    it('should render without errors', () => {
        render(<AnonymousMenu currentPage="" />);
        const component =  screen.getByTestId("anonymous-menu-signup")
        expect(component).toBeTruthy();
    })

    it('should render anonymous menu sign-in', () => {
        render(<AnonymousMenu currentPage="" />);
        const component =  screen.getByTestId("anonymous-menu-sign-in")
        expect(component).toBeTruthy();
    })

    describe('Sign In Button Auth0', () => {
        it('should call redirect function when button is clicked', () => {
            render(<AnonymousMenu currentPage="" />);
            const component = screen.getByTestId("anonymous-menu-sign-in");
            fireEvent.click(component);
            expect(mockedUseAuth0.mockName('loginWithPopup')).toHaveBeenCalled();
        })
    })
})
