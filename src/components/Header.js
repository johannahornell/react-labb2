import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Header = ({ todoItems }) => {
    const [thingsLeftTodo, setThingsLeftTodo] = useState([])

    useEffect(() => {
        const filteredTodoItmes = todoItems.filter(
            (todo) => todo.completed === false
        )
        setThingsLeftTodo(filteredTodoItmes)
    }, [todoItems])

    return (
        <header className="todo-header">
            <h1>Things To Do</h1>
            <p>
                {thingsLeftTodo.length > 0
                    ? `${thingsLeftTodo.length} more to go!`
                    : 'All done!'}
            </p>
        </header>
    )
}

Header.propTypes = {
    todoItems: PropTypes.array
}

export default Header
