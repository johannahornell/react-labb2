import { useState, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import { StyledHeader } from './styles/Header.styled'

//Use reducer to set width of progressbar
const reducer = (progressbar, action) => {
    switch (action.type) {
        case 'set_width':
            return { width: action.payload }
        default:
            throw new Error('Error: Unknown action type ' + action.type)
    }
}

const Header = ({ todoItems }) => {
    const [thingsLeftTodo, setThingsLeftTodo] = useState([])
    const [amountLeftPercentage, setAmountLeftPercentage] = useState(0)
    const [progressbar, dispatch] = useReducer(reducer, {})

    useEffect(() => {
        const filteredTodoItmes = todoItems.filter(
            (todo) => todo.completed === false
        )
        setThingsLeftTodo(filteredTodoItmes)

        const newAmountLeftPercentage =
            100 - (filteredTodoItmes.length / todoItems.length) * 100

        setAmountLeftPercentage(newAmountLeftPercentage)

        dispatch({ type: 'set_width', payload: amountLeftPercentage })
    }, [todoItems, amountLeftPercentage])

    let text

    if (todoItems.length === 0) {
        text = "You don't have anthing to do, add something below!"
    } else if (thingsLeftTodo.length > 0) {
        text = thingsLeftTodo.length + ' more to go!'
    } else {
        text = 'All done!'
    }

    return (
        <StyledHeader>
            <h1>Things To Do</h1>
            <p>{text}</p>
            <div>
                <span style={{ width: progressbar.width + '%' }}></span>
            </div>
        </StyledHeader>
    )
}

Header.propTypes = {
    todoItems: PropTypes.array
}

export default Header
