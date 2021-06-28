import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export const Header = styled.header`
    display: flex;
    align-items: center;
    background: #8257e5;
    flex-direction: column;
    width: 100%;
    height: 180px;

    h1 {
        margin-top: 30px;
    }
`;

export const HeaderNavigation = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    width: 100%;

    svg {
        &:hover {
            transform: scale(1.2);
            transition: all 0.3s;
        }
    }
`;
export const Section = styled.section`
    padding: 40px 0 20px;
`;

export const ContainerFilters = styled.div`
    top: 135px;
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 40%;

    justify-content: space-evenly;

    select {
        margin-top: 10px;
        background: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 5px;
        height: 35px;
        border: 0;
        color: black;
        font-size: 14px;
        width: 100%;

        padding: 0 5px;

        font-family: Poppins, sans-serif;

        option {
            outline: 2px solid transparent;
            position: relative;
            background: transparent;
            color: black;
            font-size: 14px;
            width: 100%;

            font-family: Poppins, sans-serif;
            transition: 2s all;
            padding: 0 5px;
        }
    }

    p {
        color: #d4c2ff;
    }
`;

export const ContainerPatient = styled.div`
    display: flex;
    align-items: center;
    width: 600px;
    max-height: 200px;
    background: #ffffff;
    padding: 10px 20px;
    flex-direction: column;

    & + & {
        margin-top: 10px;
    }

    p {
        color: black;
        font-size: 14px;
    }

    h3 {
        color: black;
        margin-bottom: 10px;
    }

    img {
        width: 100px;
        height: 100px;
    }
`;

export const ContainerInfo = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    justify-items: left;

    svg {
        cursor: pointer;
        &:hover {
            color: red;
        }
    }
`;
