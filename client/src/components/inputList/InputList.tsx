import React from "react";
import InputField from "../../components/inputField";
import { FormInput } from "../../types/auth";

export const InputList = (
    values: FormInput[],
    className: string,
    stretch: boolean
) => {
    return values.map((input) => (
        <InputField
            key={input.name}
            className={className}
            type={input.type}
            name={input.name}
            stretch={stretch}
            placeholder={input.placeholder}
        />
    ));
};
