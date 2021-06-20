import styled from "styled-components";

export const Container = styled.div`
    background: #e6876e;
    border-radius: 5px;
    padding: 0 10px;
    width: 100%;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;

    & + & {
        margin-left: 10px;
    }

    p {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
    }

    &:hover {
        filter: brightness(90%);
    }
`;
