import styled from "styled-components";

export const Container = styled.div`
    margin-top: 10px;
    background: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    height: 30px;

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

        input {
            outline: 2px solid transparent;
            width: 300px;
            position: relative;
            border: 0;
            z-index: 50;
            background: transparent;
            color: black;
            font-size: 14px;
            font-family: Poppins, sans-serif;
            transition: 2s all;

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
