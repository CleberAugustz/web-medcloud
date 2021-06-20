import React, { useCallback } from "react";
import home_image from "../../assets/image/home-image.png";
import Button from "../../components/button";
import Input from "../../components/input";
import { useHistory } from "react-router-dom";

import {
    Container,
    Imagehome,
    ContainerAccess,
    ContainerButtons,
} from "./styles";

const SignIn: React.FC = () => {
    const history = useHistory();

    const handleAccess = useCallback(() => {
        try {
            history.push("/dashboard");
        } catch (error) {}
    }, []);

    return (
        <Container>
            <Imagehome src={home_image} />
            <ContainerAccess>
                <h1>MedCloud</h1>
                <Input
                    type="number"
                    name="CPF"
                    placeholder="CPF"
                    maxLength={10}
                />
                <ContainerButtons>
                    <Button name="Cadastrar" />
                    <Button name="Acessar" onClick={handleAccess} />
                </ContainerButtons>
            </ContainerAccess>
        </Container>
    );
};

export default SignIn;
