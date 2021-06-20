import styled, { css } from "styled-components";

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
    margin-top: 10px;
    background: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    height: 35px;
    width: 300px;

    ${(props) =>
        props.isFocused &&
        css`
            & {
                height: 45px;
            }
        `}

    ${(props) =>
        props.isFilled &&
        css`
            & {
                height: 45px;
            }
        `}

    div.container {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        background: white;
        border: 2px solid transparent;
        border-radius: 5px;

        p + & {
            margin-top: 0;
        }

        label.label {
            width: auto;
            position: absolute;
            padding: 0 5px;
            border-radius: 10px;

            color: black;
            background: white;
            font-size: 14px;
            z-index: 49;
            font-family: Poppins, sans-serif;
            transition: 0.5s all;
        }

        ${(props) =>
            props.isFocused &&
            css`
                label.label {
                    /* color: #ff872c; */
                    margin-bottom: 35px;
                    margin-left: 5px;
                    font-size: 10px;
                    z-index: 51;
                }
                & {
                    /* border-color: #ff872c; */
                }
            `}

        ${(props) =>
            props.isFilled &&
            css`
                label.label {
                    /* color: #ff872c; */
                    margin-bottom: 35px;
                    margin-left: 5px;
                    font-size: 10px;
                    z-index: 51;
                }
                & {
                    background: white;
                    /* border-color: #ff872c; */
                }
            `}

        input {
            outline: 2px solid transparent;
            position: relative;
            border: 0;
            z-index: 50;
            background: transparent;
            color: black;
            font-size: 14px;
            width: 100%;

            font-family: Poppins, sans-serif;
            transition: 2s all;
            padding: 0 5px;

            &::placeholder {
                color: transparent;
            }

            &:focus {
                &::placeholder {
                    color: transparent;
                }
            }
        }
    }
`;
