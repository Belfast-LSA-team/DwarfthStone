type ParsedData = Record<string, FormDataEntryValue>;
type ValueErrors = Record<string, string>;
type Fields = Record<string, RegExp>;
type FieldsErrors = Record<string, string>;

type ValidationResult = {
    valid: boolean;
    errors: ValueErrors;
    data: ParsedData | null;
};

const fields: Fields = {
    login: /^[a-zA-Z\d_]{2,12}$/,
    password: /^[a-zA-Z\d]{6,}$/,
    email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phone: /^[8\d]{11}$/,
};

const fieldsErrors: FieldsErrors = {
    login:
        "Логин может содержать латинские буквы и цифры и быть от 2 до 12 символов",
    password:
        "Пароль может содержать латинские буквы и цифры и быть не короче 6 символов",
    repeat_password: "Пароли не совпадают",
    email: "Введите валидный email",
    phone: 'Номер телефона должен быть записан в формате "8XXXXXXXXXX"',
};

export const validator = (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const data: ParsedData = {};
    const result: ValidationResult = {
        valid: true,
        errors: {},
        data: null,
    };

    for (const [key, value] of Array.from(formData.entries())) {
        if (!fields[key] || value instanceof File) {
            data[key] = value;
            continue;
        }

        if (!fields[key].test(value)) {
            result.errors[`${key}_error`] = fieldsErrors[key];
            result.valid = false;
        }

        data[key] = value;
    }

    result.data = data;
    return result;
};
