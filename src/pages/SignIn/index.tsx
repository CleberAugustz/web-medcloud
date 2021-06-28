import React, { useCallback, useState } from "react";
import home_image from "../../assets/image/home-image.png";
import Button from "../../components/button";
import Input from "../../components/input";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import * as CPF from "cpf-check";
import * as Yup from "yup";
import {
    Container,
    Imagehome,
    ContainerAccess,
    ContainerButtons,
} from "./styles";
import api from "../../services/api";

const SignIn: React.FC = () => {
    const history = useHistory();
    const [cpf, setCpf] = useState("");

    const handleAccess = useCallback(
        async (e) => {
            try {
                const data = { cpf };

                const schema = Yup.object().shape({
                    cpf: Yup.string().required("CPF é obrigatório"),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                const {
                    data: { Items },
                } = await api.get("/patients", { params: { cpf } });

                if (Items[0].type === "patient") {
                    throw new Error("Acesso apenas para médicos!");
                }

                history.push("/dashboard");
            } catch (error) {
                let text = error.response
                    ? error.response.data.message
                    : error.message;

                Swal.fire({
                    icon: "warning",
                    text,
                    position: "top-end",
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                });
            }
        },
        [history, cpf]
    );

    const handleInput = useCallback((e) => {
        const cpfFormatted = CPF.format(e.target.value);
        if (cpfFormatted) {
            setCpf(cpfFormatted);
            e.target.value = cpfFormatted;
        }
    }, []);

    return (
        <Container>
            <Imagehome src={home_image} />
            <ContainerAccess>
                <h1>MedCloud</h1>
                <Input
                    style={{ width: 300 }}
                    disableExpand={false}
                    type="text"
                    name="CPF"
                    placeholder="CPF"
                    onBlur={(e) => {
                        handleInput(e);
                    }}
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
