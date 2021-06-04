import { get } from "../..";

type UserServerResult = {
  id: number;
  first_name: string | null;
  last_name: string | null;
  display_name: string | null;
  login: string;
  avatar: string | null;
  email: string;
  phone: string | null;
};

export const resolveUserInfo = () =>
  get<UserServerResult>("api/v2/auth/user").then(
    ({ first_name, last_name, display_name, ...userInfo }) => ({
      firstName: first_name,
      lastName: last_name,
      displayName: display_name,
      ...userInfo,
    })
  );
