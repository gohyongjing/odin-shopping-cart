import React from 'react';
import { render } from "@testing-library/react";
import Shop from './Shop';

describe("Shop component", () => {
    it("renders", () => {
        const { asFragment } = render(<Shop />);
        expect(asFragment()).toMatchSnapshot();
    });

    it
});

