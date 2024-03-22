import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import styled from 'styled-components'

const StyledTodoList = styled.div`
    margin-bottom: 30px;
`

export const TodoList = ({ todoItems, onToggle, onDelete }) => {
    return (
        <StyledTodoList>
            {todoItems.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </StyledTodoList>
    )
}

TodoList.propTypes = {
    todoItems: PropTypes.array,
    onToggle: PropTypes.func,
    onDelete: PropTypes.func
}

export default TodoList
