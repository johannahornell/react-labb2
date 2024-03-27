import PropTypes from 'prop-types'
import { FaRegSquareCheck, FaRegSquare, FaTrash } from 'react-icons/fa6'
import {
    StyledTodoItem,
    StyledTodoText,
    StyledToggleTodo
} from './styles/TodoItem.styled'

const TodoItem = ({ onToggle, onDelete, todo }) => {
    return (
        <StyledTodoItem>
            <div>
                <StyledToggleTodo onClick={() => onToggle(todo.id)}>
                    {todo.completed ? <FaRegSquareCheck /> : <FaRegSquare />}
                </StyledToggleTodo>
                <StyledTodoText $completed={todo.completed}>
                    {todo.text}
                </StyledTodoText>
            </div>
            <FaTrash
                style={{ cursor: 'pointer', color: '#4b4b4b' }}
                onClick={() => onDelete(todo.id)}
            />
        </StyledTodoItem>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object,
    onToggle: PropTypes.func,
    onDelete: PropTypes.func
}

export default TodoItem
