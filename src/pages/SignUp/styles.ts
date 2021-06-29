import styled from "styled-components";

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

export const ContainerSignUp = styled.div`
    display: flex;
    background: #ffffff;
    align-items: center;
    width: 600px;
    padding: 30px;
    top: -30px;
    position: relative;

    border-radius: 10px;
    box-shadow: 1px 1px 1px #e6e6f0;

    form {
        width: 100%;
        background: #fafafc;
        border: 1px #e6e6f0 solid;
        padding: 10px;

        div.interno {
            width: 100%;
            & + div {
                margin-left: 20px;
            }
        }
        div.externo {
            display: flex;
            width: 100%;
        }

        div.info {
            div {
                display: flex;
                width: 100%;
                flex-direction: row;
            }
        }

        label.obs {
            font-size: 12px;
            color: black;
        }

        h2 {
            margin-top: 10px;
            text-align: center;
            color: black;
        }

        textarea {
            width: 100%;
            resize: none;
            margin-bottom: 10px;
        }

        select {
            border: 1px #e6e6f0 solid;
            margin-top: 10px;
            display: flex;
            flex-direction: row;
            align-items: center;
            border-radius: 5px;
            height: 35px;
            color: black;
            font-size: 12px;
            width: 100%;

            padding: 0 5px;

            font-family: Poppins, sans-serif;

            &:focus {
                border-color: #8257e5;
            }

            option {
                outline: 2px solid transparent;
                position: relative;
                background: transparent;
                color: black;
                font-size: 12px;
                width: 100%;

                font-family: Poppins, sans-serif;
                transition: 2s all;
                padding: 0 5px;
            }
        }
    }
`;
