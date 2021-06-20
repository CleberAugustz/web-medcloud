import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
}

const Button: React.FC<ButtonsProps> = ({ name, children }) => {
    return (
        <Container>
            <p>{name}</p>
        </Container>
    );
};

export default Button;
