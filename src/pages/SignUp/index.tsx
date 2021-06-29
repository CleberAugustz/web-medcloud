import React from "react";
import { useCallback } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../components/button";
import Input from "../../components/input";
import { Container, HeaderNavigation, Header, ContainerSignUp } from "./styles";
import * as Yup from "yup";
import api from "../../services/api";

const SignUp: React.FC = () => {
    const history = useHistory();

    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            try {
                const formData = new FormData(e.target);

                const data = {
                    name: formData.get("name"),
                    cpf: formData.get("cpf"),
                    email: formData.get("email"),
                    gender: formData.get("gender"),
                    type: formData.get("type"),
                    cep: formData.get("cep"),
                    street: formData.get("street"),
                    number: formData.get("number"),
                    city: formData.get("city"),
                    state: formData.get("state"),
                    weight: formData.get("weight"),
                    height: formData.get("height"),
                    obs: formData.get("obs"),
                };

                const schema = Yup.object().shape({
                    height: Yup.string().required("Altura obrigatório"),
                    weight: Yup.string().required("Peso obrigatório"),
                    state: Yup.string().required("Estado obrigatório"),
                    city: Yup.string().required("Cidade obrigatório"),
                    number: Yup.string().required("Número obrigatório"),
                    cep: Yup.string().required("CEP obrigatório"),
                    type: Yup.string().required("Tipo obrigatório"),
                    gender: Yup.string().required("Sexo obrigatório"),
                    email: Yup.string()
                        .required("E-mail obrigatório")
                        .email("Digite um e-mail válido"),
                    cpf: Yup.string().required("CPF é obrigatório"),
                    name: Yup.string().required("Nome obrigatório"),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                await api.post("patients", data);

                Swal.fire({
                    title: "Cadastro realizado com sucesso!",
                    icon: "success",
                });
                history.push("/");
            } catch (error) {
                if (error instanceof Yup.ValidationError) {
                    error.inner.forEach((err) => {
                        if (err.path) {
                            document.getElementById(err.path)?.focus();
                            Swal.fire({
                                icon: "warning",
                                text: err.message,
                                position: "top-end",
                                toast: true,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    });
                }
                if (error.response) {
                    Swal.fire({
                        icon: "warning",
                        text: error.response.data.message,
                        position: "top-end",
                        toast: true,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            }
        },
        [history]
    );

    return (
        <Container>
            <Header>
                <HeaderNavigation>
                    <FiArrowLeft size={25} onClick={() => history.goBack()} />
                    <h3>MedCloud</h3>
                </HeaderNavigation>

                <h1>Olá! Esta é sua plataforma</h1>
                <h2>Realize seu cadastro</h2>
            </Header>
            <ContainerSignUp>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="externo">
                        <div className="interno">
                            <h2>Seus dados</h2>
                            <Input
                                name="name"
                                placeholder="Nome"
                                type="text"
                                id="name"
                            />
                            <Input
                                name="cpf"
                                placeholder="CPF"
                                type="text"
                                id="cpf"
                            />
                            <Input
                                name="email"
                                placeholder="E-mail"
                                type="email"
                                id="email"
                            />
                            <select name="gender" id="gender">
                                <option value="man">Masculino</option>
                                <option value="woman">Feminino</option>
                            </select>
                            <select name="type" id="type">
                                <option value="patient">Paciente</option>
                                <option value="doctor">Médico</option>
                            </select>
                        </div>
                        <div className="interno">
                            <h2>Endereço</h2>

                            <Input
                                name="cep"
                                placeholder="CEP"
                                type="number"
                                id="cep"
                                onPaste={(e) => {
                                    e.preventDefault();
                                }}
                            />
                            <Input
                                name="street"
                                placeholder="Rua"
                                type="text"
                                id="street"
                            />
                            <Input
                                name="number"
                                placeholder="Número"
                                type="number"
                                id="number"
                                onPaste={(e) => {
                                    e.preventDefault();
                                }}
                            />
                            <Input
                                name="city"
                                placeholder="Cidade"
                                type="text"
                                id="city"
                            />
                            <Input
                                name="state"
                                placeholder="Estado"
                                type="text"
                                id="state"
                            />
                        </div>
                    </div>

                    <div className="info">
                        <h2>Características</h2>
                        <div>
                            <Input
                                name="weight"
                                placeholder="Peso"
                                type="text"
                                id="weight"
                            />
                            <Input
                                name="height"
                                placeholder="Altura"
                                type="text"
                                id="height"
                            />
                        </div>

                        <label className="obs">Observações</label>
                        <textarea name="obs" />
                    </div>

                    <Button name="concluir" type="submit">
                        CONCLUIR
                    </Button>
                </form>
            </ContainerSignUp>
        </Container>
    );
};

export default SignUp;
