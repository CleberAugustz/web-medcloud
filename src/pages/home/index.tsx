import React from "react";
import home_image from "../../assets/image/home-image.png";
import Button from "../../components/button";
import Input from "../../components/input";

import {
    Container,
    Imagehome,
    ContainerAccess,
    ContainerButtons,
} from "./styles";

const Home: React.FC = () => {
    return (
        <Container>
            <Imagehome src={home_image} />
            <ContainerAccess>
                <h1>MedCloud</h1>
                <Input name="CPF" maxLength={10} />
                <ContainerButtons>
                    <Button>Acessar</Button>
                    <Button>Cadastrar</Button>
                </ContainerButtons>
            </ContainerAccess>
        </Container>
    );
};

export default Home;
