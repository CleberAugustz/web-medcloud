import styled from "styled-components";

export const Container = styled.div`
    background: #8257e5;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Imagehome = styled.img`
    width: 60%;
    height: 100%;
`;

export const ContainerAccess = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;

    h1 {
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 20px;
    }
`;

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    align-self: flex-end;
`;
