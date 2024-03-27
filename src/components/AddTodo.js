import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { StyledAddTodo } from './styles/AddTodo.styled'

const AddTodo = ({ onAdd }) => {
    const [text, setText] = useState('')
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Add a todo first')
            return
        }

        onAdd({ text, completed: false })

        setText('')
    }

    return (
        <StyledAddTodo onSubmit={onSubmit}>
            <label htmlFor="todo">Add new todo</label>
            <div>
                <input
                    type="text"
                    id="todo"
                    placeholder="Write todo here"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    ref={inputRef}
                />
                <input type="submit" value="Add" />
            </div>
        </StyledAddTodo>
    )
}

AddTodo.propTypes = {
    onAdd: PropTypes.func
}

export default AddTodo
