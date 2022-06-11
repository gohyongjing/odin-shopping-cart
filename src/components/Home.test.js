import React from 'react';
import { render } from "@testing-library/react";
import Home from './Home';

describe("Home component", () => {
    it("renders", () => {
        const { asFragment } = render(<Home />);
        expect(asFragment()).toMatchSnapshot();
    });

    it
});
