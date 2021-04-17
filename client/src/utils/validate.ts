import { FormErrors } from '../types/errorTypes';
import { ContactFormData } from '../types/formDataTypes';
import { isEmptyField, minLengthField, emailIsNotValid } from '../data/content';

const validateEmail = (email: string) => {
	const emailRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
	if (!emailRegex.test(email)) {
		return emailIsNotValid;
	}
	return false;
}
const minLength = (input: string) => {
	const minLengthRegex = /^[a-zA-Z\d]{6,}$/;
	if (!minLengthRegex.test(input)) {
		return minLengthField;
	}
	return false;
}
export const validateContact = (data: ContactFormData) => {
	const errors: FormErrors = {};
	if (!data.name) {
		errors.name = isEmptyField
	}
	if (!data.title) {
		errors.title = isEmptyField
	}
	if (!data.message) {
		errors.message = isEmptyField
	}
	if (!data.email) {
		errors.email = isEmptyField
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