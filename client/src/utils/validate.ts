import { FormErrors } from '../types/errorTypes';
import { ContactFormData } from '../types/formDataTypes';

const validateEmail = (email: string) => {
	const emailRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
	if (!emailRegex.test(email)) {
		return "Введите валидный email";
	}
	return false;
}
const minLength = (input: string) => {
	const minLengthRegex = /^[a-zA-Z\d]{6,}$/;
	if (!minLengthRegex.test(input)) {
		return "Длина поля должна быть больше 6 символов";
	}
	return false;
}
export const validateContact = (data: ContactFormData) => {
	const errors: FormErrors = {};
	if (!data.name) {
		errors.name = 'Это поле не может быть пустым'
	}
	if (!data.title) {
		errors.title = 'Это поле не может быть пустым'
	}
	if (!data.message) {
		errors.message = 'Это поле не может быть пустым'
	}
	if (!data.email) {
		errors.email = 'Это поле не может быть пустым'
	}

	const validName = minLength(data.name);
	const validTitle = minLength(data.title);
	const validMessage = minLength(data.message);
	const validEmail = validateEmail(data.email);

	if (validName) {
		errors.name = validName
	}
	if (validTitle) {
		errors.title = validTitle
	}
	if (validMessage) {
		errors.message = validMessage
	}
	if (validEmail) {
		errors.email = validEmail
	}

	return errors;
}