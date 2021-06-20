import React, { InputHTMLAttributes, useCallback, useState } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const Input: React.FC<InputProps> = ({ placeholder, ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback((e) => {
        setIsFocused(false);

        setIsFilled(!!e.target.value);
    }, []);

    const handleInputChange = useCallback((e) => {
        setIsFilled(!!e.target.value);
    }, []);

    return (
        <Container isFilled={isFilled} isFocused={isFocused}>
            <div className="container">
                <input
                    onFocus={handleInputFocus}
                    onBlur={(e) => handleInputBlur(e)}
                    onChange={(e) => handleInputChange(e)}
                    {...rest}
                />
                <label className="label ">{placeholder}</label>
            </div>
        </Container>
    );
};

export default Input;
