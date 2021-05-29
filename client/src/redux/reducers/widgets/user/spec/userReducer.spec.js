import { fetchFulfilledUserInfo } from "../../../../actions/user";
import { user } from "../index";

describe("user reducer", () => {
    it("записывает данные при получении юзера", () => {
        const mockUser = {
            id: "123",
            first_name: "test_first_name",
            second_name: "test_last_name",
            display_name: "test_display_name",
            login: "test_login",
            avatar: "test_avatar",
            email: "test_email",
            phone: "test_phone",
        };

        const initialState = {};
        const action = fetchFulfilledUserInfo(mockUser);

        expect(user(initialState, action)).toStrictEqual({
            ...mockUser,
            loading: false,
            isAuth: true,
        });
    });
});
