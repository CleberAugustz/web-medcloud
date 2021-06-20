import React from "react";
import { FiArrowLeft } from "react-icons/fi";

import { Header, Section, ContainerFilters, ContainerPatient } from "./styles";
const Dashboard: React.FC = () => {
    return (
        <>
            <Header>
                <div>
                    <FiArrowLeft size={20} />
                    <h3>MedCloud</h3>
                </div>

                <h1>Olá! Está sua plataforma</h1>
            </Header>
            <Section>
                <ContainerFilters>
                    <div>
                        <p>Filtar por CPF</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Ordernar por</p>
                        <input type="text" />
                    </div>
                </ContainerFilters>

                <ContainerPatient>
                    <img />
                    <h3>Nome</h3>
                    <p>CPF</p>
                    <p>Email</p>
                </ContainerPatient>
            </Section>
        </>
    );
};

export default Dashboard;
