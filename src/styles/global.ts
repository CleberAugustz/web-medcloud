import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: #f0f0f7;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button {
    cursor: point;
  }

  div.modalContainer{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,255,255, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        font-family: Poppins, sans-serif;
        font-size: 18px;
        color: #fff;
    }
    div.modal{
        background-color: #5636d3;
        border-radius: 5px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;

        button {
            border-radius: 2px;
            text-align: center;
            width: 50px;

            background: #ff872c;
            outline: 0;
            border: 0;

            font-family: Poppins, sans-serif;
            font-size: 16px;
            font-weight: 500;

            &:hover {
                background: #ffa057;
            }
                &+button{
                    margin-left: 10px;
                }
            }
    }
   }
`;
