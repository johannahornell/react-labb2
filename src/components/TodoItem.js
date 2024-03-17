import PropTypes from 'prop-types'
import { FaRegSquareCheck, FaRegSquare, FaTrash } from 'react-icons/fa6'

const TodoItem = ({ onToggle, onDelete, todo }) => {
    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div>
                <span className="toggle-todo" onClick={() => onToggle(todo.id)}>
                    {todo.completed ? <FaRegSquareCheck /> : <FaRegSquare />}
                </span>
                <span className="todo-text">{todo.text}</span>
            </div>
            <FaTrash
                style={{ cursor: 'pointer', color: '#4b4b4b' }}
                onClick={() => onDelete(todo.id)}
            />
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object,
    onToggle: PropTypes.func,
    onDelete: PropTypes.func
}

export default TodoItem
