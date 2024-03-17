import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

export const TodoList = ({ todoItems, onToggle, onDelete }) => {
    return (
        <div className="todo-list">
            {todoItems.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

TodoList.propTypes = {
    todoItems: PropTypes.array,
    onToggle: PropTypes.func,
    onDelete: PropTypes.func
}

export default TodoList
