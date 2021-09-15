import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --bg-color: #f0f2f5;
        --secondary-txt: #969cb3;
        --primary-txt: #363f5f;
        --card-color: #ffffff;
        --red: #e62e4d;
        --green: #33cc95;
        --header-color: #5429cc;
        --btn-color: #6933ff;

    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        
        background-color: var(--bg-color);
        -webkit-font-smoothing: antialiased;
    }

    html { 
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }
    body, button,input,textarea {
        font-family: 'Poppins',sans-serif;
        font-weight: 400;
    }
    h1,h2,h3,h4,h5,h6,strong {
        font-weight:600;
    }
    button {
        cursor: pointer;
    }

    [disable] {
        opacity: 0.6;
        cursor:not-allowed;
    }
    


    .react-modal-overlay {
        background-color: rgba(0,0,0,0.5);

        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;


        display: flex;
        justify-content: center;
        align-items:center;


        @media (max-width: 414px) {
            
        }
    }
    
    
`;
