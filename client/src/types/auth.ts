export type FormInput = {
    placeholder: string;
    name: string;
    type: string;
};

export type FormErrors = Record<string, string>;

export type RegisterFormData = {
    login: string;
    password: string;
    phone: string;
    email: string;
};

export type LoginFormData = {
    login: string;
    password: string;
};
