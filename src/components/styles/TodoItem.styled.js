import styled from 'styled-components'

export const StyledTodoItem = styled.div`
    background-color: ${({ theme }) => theme.colors.todoItem};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    padding: 10px;
    margin-bottom: 5px;
`
export const StyledTodoText = styled.span`
    text-decoration: ${({ $completed }) =>
        $completed ? 'line-through' : 'unset'};
    opacity: ${({ $completed }) => ($completed ? '0.6' : '1')};
`

export const StyledToggleTodo = styled.span`
    cursor: pointer;
    vertical-align: middle;
    margin-right: 10px;
`
