import styled from 'styled-components'

export const StyledAppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 80px 15px 0 15px;
`

export const StyledTodoContent = styled.div`
    background: ${({ theme }) => theme.colors.content};
    width: 100%;
    max-width: 400px;
    padding: 30px;
    border-radius: 10px;
`
