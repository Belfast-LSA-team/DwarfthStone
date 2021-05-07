import React from "react";
import { mount } from "enzyme";

import Button from "..";

describe("Button", () => {
    it("рендерится корректно", () => {
        const wrapper = mount(
            <Button
                type="button"
                style="primary"
                stretch={false}
                clickHandler={() => {}}
            >
                Test Button
            </Button>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
