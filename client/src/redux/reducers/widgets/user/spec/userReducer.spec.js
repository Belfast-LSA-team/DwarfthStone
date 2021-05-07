import { fetchFulfilled } from "../../../../actions/user/userInfo";
import { user } from "../index";

describe("user reducer", () => {
    it("записывает данные при получении юзера", () => {
        const mockUser = {
            id: "123",
            firstName: "test_first_name",
            secondName: "test_last_name",
            displayName: "test_display_name",
            login: "test_login",
            avatar: "test_avatar",
            email: "test_email",
            phone: "test_phone",
        };

        const initialState = {};
        const action = fetchFulfilled(mockUser);

        expect(user(initialState, action)).toStrictEqual({
            ...mockUser,
            loading: false,
            isAuth: true,
        });
    });
});
