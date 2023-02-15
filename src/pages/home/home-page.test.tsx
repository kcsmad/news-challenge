import { render, screen } from "@testing-library/react";
import HomePage from "./home-page";

describe('Home Page', () => {
    it('should renders without errors', () => {
        render(<HomePage />);
        const component = screen.getByTestId("main-container")
        expect(component).toBeTruthy();
    })
})
