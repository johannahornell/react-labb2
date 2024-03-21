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

    let text

    if (todoItems.length === 0) {
        text = "You don't have anthing to do, add something below!"
    } else if (thingsLeftTodo.length > 0) {
        text = thingsLeftTodo.length + ' more to go!'
    } else {
        text = 'All done!'
    }

    return (
        <header className="todo-header">
            <h1>Things To Do</h1>
            <p>{text}</p>
        </header>
    )
}

Header.propTypes = {
    todoItems: PropTypes.array
}

export default Header