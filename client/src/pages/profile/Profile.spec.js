import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import Profile from "./";

import { mockStore } from "../../mock/store";

jest.mock("../../components/modal", () => ({
    Modal() {
        return null;
    },
}));

describe("profile page", () => {
    let store;
    let wrapper;

    beforeEach(() => {
        store = mockStore({
            widgets: {
                user: {},
            },
        });

        wrapper = mount(
            <Provider store={store}>
                <Profile />
            </Provider>
        );
    });

    it("рендерится корректно", () => {
        expect.assertions(1);
        expect(wrapper.find(".profile__btns-top")).toBeTruthy();
    });
});
