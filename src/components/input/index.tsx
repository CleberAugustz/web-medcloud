import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const Input: React.FC<InputProps> = ({ placeholder, ...rest }) => {
    return (
        <Container>
            <div className="container">
                <input {...rest} />
                <label className="label ">{placeholder}</label>
            </div>
        </Container>
    );
};

export default Input;
