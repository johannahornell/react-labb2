import styled from 'styled-components'

export const StyledHeader = styled.header`
    margin-bottom: 30px;

    h1 {
        margin-top: 0;
    }

    div {
        border: 1px solid ${({ theme }) => theme.colors.inputBorder};
        border-radius: 10px;
        height: 10px;
        width: 100%;

        span {
            display: block;
            background-color: #67ab88;
            height: 100%;
            border-radius: 10px;
            transition: 0.4s ease-in-out;
        }
    }
`
