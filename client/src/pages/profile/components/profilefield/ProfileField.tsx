import React, {
    useState,
    useCallback,
    useEffect,
    Fragment,
    createRef,
} from "react";
import classnames from "classnames";
import InputField from "../../../../components/inputField";

type ProfileFieldProps = {
    fieldKey: string;
    value: string;
    name: string;
};

export const ProfileField = ({ fieldKey, value, name }: ProfileFieldProps) => {
    const [isActive, setActiveState] = useState(false);
    const [currentValue, setCurrentValue] = useState(value);
    const inputRef = createRef<HTMLInputElement>();

    useEffect(() => {
        if (inputRef.current) {
            if (isActive) {
                inputRef.current.focus();
            } else {
                setCurrentValue(inputRef.current.value);
            }
        }
    }, [isActive]);

    const onValueClick = useCallback(() => {
        setActiveState(true);
    }, []);

    const onInputBlur = useCallback(() => {
        setActiveState(false);
    }, []);

    const valueClassNames = classnames("profile__field-value", {
        "profile__field-value_hidden": isActive,
    });

    const inputClassNames = classnames("profile__input", {
        profile__input_hidden: !isActive,
    });

    return (
        <Fragment>
            <div className="profile__field">
                <span className="profile__field-key">{fieldKey}</span>
                <span className={valueClassNames} onClick={onValueClick}>
                    {currentValue}
                </span>
                <InputField
                    className={inputClassNames}
                    type="text"
                    name={name}
                    placeholder={fieldKey}
                    initialValue={value}
                    inputRef={inputRef}
                    onBlur={onInputBlur}
                />
            </div>
            <hr className="profile__hr" />
        </Fragment>
    );
};
