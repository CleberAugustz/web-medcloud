import React, { InputHTMLAttributes, useCallback, useState } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    disableExpand?: boolean;
    error?: string;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    disableExpand = false,

    ...rest
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true && !disableExpand);
    }, [disableExpand]);

    const handleInputBlur = useCallback(
        (e) => {
            setIsFocused(false);
            setIsFilled(!!e.target.value && !disableExpand);
        },
        [disableExpand]
    );

    const handleInputChange = useCallback(
        (e) => {
            setIsFilled(!!e.target.value && !disableExpand);
        },
        [disableExpand]
    );

    return (
        <Container isFilled={isFilled} isFocused={isFocused}>
            <div className="container">
                <input
                    onFocus={handleInputFocus}
                    onBlur={(e) => handleInputBlur(e)}
                    onChange={(e) => handleInputChange(e)}
                    autoComplete="off"
                    {...rest}
                />

                <label className="label">{placeholder}</label>
            </div>
        </Container>
    );
};

export default Input;
