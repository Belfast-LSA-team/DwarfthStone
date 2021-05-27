import React from "react";
import { mount } from "enzyme";

import Button from "..";

describe("button", () => {
    it("рендерится корректно", () => {
        const wrapper = mount(
            <Button
                type="button"
                style="primary"
                stretch={false}
                clickHandler={jest.fn()}
            >
                Test Button
            </Button>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
