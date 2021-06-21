import React, { useCallback, useState } from "react";
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
import api from "../../services/api";

const SignIn: React.FC = () => {
    const history = useHistory();
    const [cpf, setCpf] = useState();

    const handleAccess = useCallback(async () => {
        try {
            if (!cpf) {
                throw new Error("Digite CPF!");
            }

            const { data } = await api.get("/patients", { params: { cpf } });

            if (!data) {
                throw new Error("Não há elementos");
            }

            if (data?.Items) {
                console.log(data.Items[0]);
            }

            console.log(data.Items);

            history.push("/dashboard");
        } catch (error) {
            alert(error.message);
        }
    }, [history, cpf]);

    const handleInput = useCallback((e) => {
        setCpf(e.target.value);
    }, []);

    return (
        <Container>
            <Imagehome src={home_image} />
            <ContainerAccess>
                <h1>MedCloud</h1>
                <Input
                    style={{ width: 300 }}
                    disableExpand={false}
                    type="number"
                    name="CPF"
                    placeholder="CPF"
                    onChange={(e) => handleInput(e)}
                />
                <ContainerButtons>
                    <Button
                        name="Cadastrar"
                        onClick={() => {
                            history.push("/signup");
                        }}
                    />
                    <Button name="Acessar" onClick={handleAccess} />
                </ContainerButtons>
            </ContainerAccess>
        </Container>
    );
};

export default SignIn;
