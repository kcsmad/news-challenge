import {fireEvent, render, screen} from "@testing-library/react";
import {useAuth0} from "@auth0/auth0-react";
import AnonymousMenu from "./anonymous-menu";
import mocked = jest.mocked;

jest.mock('@auth0/auth0-react');

const mockedUseAuth0 = mocked(useAuth0, true)

describe('Anonymous Login Menu Component', () => {

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

    // describe('Sign In Button Auth0', () => {
    //     it('should call redirect function when button is clicked', () => {
    //         render(<AnonymousMenu />);
    //         const component = screen.getByTestId("anonymous-menu-sign-in");
    //         const spy = jest.spyOn(component, 'loginWithRedirect')
    //         fireEvent.click(component);
    //         expect(spy).toHaveBeenCalled();
    //     })
    // })
})
