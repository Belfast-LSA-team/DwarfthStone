import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import Profile from ".";

import { mockStore } from "../../mock/store";

jest.mock(
    "../../components/modal",
    () =>
        function Modal() {
            return null;
        }
);

describe("profile page", () => {
    it("рендерится корректно", () => {
        const store = mockStore({
            widgets: {
                user: {},
            },
        });

        const wrapper = mount(
            <Provider store={store}>
                <Profile />
            </Provider>
        );

        expect(wrapper.find(".profile__btns-top")).toBeTruthy();
    });
});
