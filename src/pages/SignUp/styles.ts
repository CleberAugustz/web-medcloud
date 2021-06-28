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

    width: 300px;
    padding: 10px 20px 80px;

    form {
        width: 100%;
        div {
            background: #fafafc;
            width: 100%;
            div.container {
                background: #fafafc;
                color: #9c98a6;
                input {
                    color: #9c98a6;
                    &:focus {
                        border-color: red;
                    }
                }

                label.label {
                    color: #9c98a6;
                }
            }
        }

        label {
            color: #9c98a6;
        }

        label.obs {
            font-size: 12px;
            color: #9c98a6;
        }

        h2 {
            margin-top: 30px;
            padding-top: 2px;
            border-top: 1px #e6e6f0 solid;
            color: black;
        }

        textarea {
            width: 100%;
            resize: none;
            margin-bottom: 10px;
        }

        select {
            border: 1px #e6e6f0 solid;
            background: #fafafc;
            margin-top: 10px;
            display: flex;
            flex-direction: row;
            align-items: center;
            border-radius: 5px;
            height: 35px;
            color: #9c98a6;
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
                color: #9c98a6;
                font-size: 12px;
                width: 100%;

                font-family: Poppins, sans-serif;
                transition: 2s all;
                padding: 0 5px;
            }
        }
    }
`;
