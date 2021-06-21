import styled from "styled-components";

import { shade } from "polished";

export const Container = styled.button`
    background: #e6876e;
    border-radius: 5px;
    padding: 0 10px;
    width: 100%;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 0;
    justify-content: center;

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
        background: ${shade(0.2, "#e6876e")};
    }
`;
