import React, { useCallback, useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import Input from "../../components/input";
import { FiTrash2 } from "react-icons/fi";
import {
    Header,
    Section,
    ContainerFilters,
    ContainerPatient,
    HeaderNavigation,
    Container,
    ContainerInfo,
} from "./styles";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import api from "../../services/api";
import ReactLoading from "react-loading";
import * as CPF from "cpf-check";

interface IPatientAddress {
    cep: string;
    city: string;
    number: string;
    state: string;
    street: string;
}

interface IPatient {
    patientId: number;
    cpf: string;
    type: string;
    email: string;
    name: string;
    obs: string;
    weight: string;
    height: string;
    gender: string;
    address: IPatientAddress;
}

interface PropsDecision {
    decision: string;
    cpf: string;
    text: string;
}

const Dashboard: React.FC = () => {
    const history = useHistory();
    const [patients, setPatients] = useState<IPatient[]>([]);
    const [loading, setLoading] = useState(false);
    const [modalDecision, setModalDecision] = useState<PropsDecision>(
        {} as PropsDecision
    );
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(decision: string, cpf: string, text: string) {
        if (decision === "trash") {
            setModalDecision({ decision, cpf, text });
        }

        setIsOpen(true);
    }

    function closeModal(decision = false) {
        if (decision === true) {
            removeTransaction(modalDecision.cpf);
        }
        setIsOpen(false);
    }

    const getPatient = useCallback(async () => {
        setLoading(true);
        const { data } = await api.get("patients");

        setPatients(data);
        setLoading(false);
    }, []);

    useEffect(() => {
        getPatient();
    }, [getPatient]);

    const removeTransaction = useCallback(
        async (cpf: string) => {
            await api.delete(`/patients/${cpf}`);
            getPatient();
        },
        [getPatient]
    );

    const handleFilter = useCallback(async (e) => {
        const cpfFormatted = CPF.format(e.target.value);
        if (cpfFormatted) {
            e.target.value = cpfFormatted;
            const {
                data: { Items },
            } = await api.get("patients", {
                params: { cpf: cpfFormatted },
            });

            setPatients(Items);
        } else {
            getPatient();
        }
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
                        <p>Pesquisar por CPF</p>
                        <Input
                            disableExpand={true}
                            name="filtro_cpf"
                            type="text"
                            onBlur={(e) => handleFilter(e)}
                        />
                    </div>
                </ContainerFilters>
            </Header>
            <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onRequestClose={() => closeModal()}
                className="modalContainer"
            >
                <div className="modal">
                    <h2>{modalDecision.text}</h2>

                    <div>
                        <button onClick={() => closeModal(true)}>Yes</button>
                        <button
                            onClick={() => {
                                closeModal();
                            }}
                        >
                            No
                        </button>
                    </div>
                </div>
            </Modal>

            {loading ? (
                <ReactLoading color={"#8257e5"} height={"5%"} width={"5%"} />
            ) : (
                <Section>
                    {patients ? (
                        patients.map((patient) => (
                            <ContainerPatient key={patient.patientId}>
                                <h3>{patient.name}</h3>
                                <ContainerInfo>
                                    <div>
                                        <p>CPF: {patient.cpf}</p>
                                        <p>Email: {patient.email}</p>
                                        <p>Sexo: {patient.gender}</p>
                                        <p>Peso: {patient.weight}</p>
                                        <p>Altura: {patient.height}</p>
                                    </div>
                                    <div>
                                        <p>Rua: {patient.address.street}</p>
                                        <p>Número: {patient.address.number}</p>
                                        <p>Cidade: {patient.address.city}</p>
                                        <p>Estado: {patient.address.state}</p>
                                    </div>
                                    <FiTrash2
                                        color="black"
                                        size={25}
                                        onClick={() => {
                                            openModal(
                                                "trash",
                                                patient.cpf,
                                                "Do you would like continue?"
                                            );
                                        }}
                                    />
                                </ContainerInfo>
                            </ContainerPatient>
                        ))
                    ) : (
                        <div>
                            <h1>Nada encontrado</h1>
                        </div>
                    )}
                </Section>
            )}
        </Container>
    );
};

export default Dashboard;
