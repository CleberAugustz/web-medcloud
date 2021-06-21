import React, { useCallback } from "react";
import { FiArrowLeft } from "react-icons/fi";
import Input from "../../components/input";
import person from "../../assets/image/person.png";

import {
    Header,
    Section,
    ContainerFilters,
    ContainerPatient,
    HeaderNavigation,
    Container,
} from "./styles";
import { useHistory } from "react-router-dom";

const patients = [1, 2, 3, 4];

const Dashboard: React.FC = () => {
    const history = useHistory();
    const handleSelected = useCallback((e) => {
        console.log(e.target.value);
    }, []);

    return (
        <Container>
            <Header>
                <HeaderNavigation>
                    <FiArrowLeft size={25} onClick={() => history.push("/")} />
                    <h3>MedCloud</h3>
                </HeaderNavigation>

                <h1>Olá! Esta é sua plataforma</h1>

                <ContainerFilters>
                    <div>
                        <p>Filtrar por CPF</p>
                        <Input
                            disableExpand={true}
                            name="filtro_cpf"
                            type="text"
                        />
                    </div>
                    <div>
                        <p>Ordenação</p>
                        <select
                            name="order"
                            id="order"
                            onChange={(e) => handleSelected(e)}
                        >
                            <option value="name">Nome</option>
                            <option value="createdAt">Data de cadastro</option>
                            <option value="cpf">CPF</option>
                        </select>
                    </div>
                </ContainerFilters>
            </Header>
            <Section>
                {patients.map((patient) => (
                    <ContainerPatient>
                        <img src={person} />
                        <div>
                            <h3>Cleber Augusto Dias Da Silva</h3>
                            <p>CPF: 423632993878</p>
                            <p>Email: cleber.augustz@hotmail.com</p>
                        </div>
                    </ContainerPatient>
                ))}
            </Section>
        </Container>
    );
};

export default Dashboard;
