import styled from "styled-components";

export const Container = styled.div`
    background: #e6876e;
    border-radius: 5px;
    padding: 6px 12px;

    & + & {
        margin-left: 10px;
    }

    p {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 12px;
        color: #ffffff;
    }
`;
