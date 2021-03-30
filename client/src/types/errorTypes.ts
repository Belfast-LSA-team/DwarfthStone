export type GeneralErrorProps = {
	message: string | null;
	errorStatus?: string | null;
	errorCode?: string | null;
};
export type FormErrors = Record<string, string>;
