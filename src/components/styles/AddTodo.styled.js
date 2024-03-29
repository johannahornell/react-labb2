import styled from 'styled-components'

export const StyledAddTodo = styled.form`
    div {
        display: flex;
        border-radius: 6px;
    }

    div:focus-within {
        box-shadow: 0px 0px 4px 2px
            ${({ theme }) => theme.colors.inputBoxShadow};
    }

    label {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        display: block;
        margin-bottom: 10px;
    }

    input[type='text'] {
        background-color: ${({ theme }) => theme.colors.inputBackground};
        color: ${({ theme }) => theme.colors.text};
        width: 100%;
        font-size: 16px;
        padding: 10px 12px;
        border: 1px solid;
        border-color: ${({ theme }) => theme.colors.inputBorder};
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;

        &:focus {
            outline: none;
        }
    }

    input[type='submit'] {
        background-color: ${({ theme }) => theme.colors.buttonBackground};
        color: ${({ theme }) => theme.colors.buttonText};
        border: none;
        border-radius: 6px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        min-width: 100px;
        padding: 10px 12px;
        cursor: pointer;
    }
`
