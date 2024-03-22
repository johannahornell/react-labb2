import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: "Inter", sans-serif;
        font-size: 16px;
        background-color: ${({ theme }) => theme.colors.body};
        color: ${({ theme }) => theme.colors.text};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
    }

`
export default GlobalStyles
