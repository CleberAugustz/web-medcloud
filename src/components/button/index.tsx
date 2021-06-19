import React from "react";
import { Container } from "./styles";

const Button: React.FC = ({ children }) => {
    return (
        <Container>
            <p>{children}</p>
        </Container>
    );
};

export default Button;
