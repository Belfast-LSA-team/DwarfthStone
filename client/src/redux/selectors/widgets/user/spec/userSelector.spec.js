import { getUserInfo } from "../index";
import { mockStore } from "../../../../../mock/store";

describe("селектор getUserInfo", () => {
    it("получает данные юзера", () => {
        const store = {
            widgets: {
                user: {
                    loading: false,
                    isAuth: false,
                    id: "123",
                    firstName: "test_first_name",
                    secondName: "test_last_name",
                    displayName: "test_display_name",
                    login: "test_login",
                    avatar: "test_avatar",
                    email: "test_email",
                    phone: "test_phone",
                },
            },
        };

        expect(getUserInfo(store)).toStrictEqual({
            loading: false,
            isAuth: false,
            id: "123",
            firstName: "test_first_name",
            secondName: "test_last_name",
            displayName: "test_display_name",
            login: "test_login",
            avatar: "test_avatar",
            email: "test_email",
            phone: "test_phone",
        });
    })
})