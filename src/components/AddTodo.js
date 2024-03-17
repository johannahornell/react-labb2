import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

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
        <form onSubmit={onSubmit} className="add-todo-form">
            <h3>Add new todo</h3>
            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="Write todo here"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    ref={inputRef}
                />
                <input
                    className="button button-form"
                    type="submit"
                    value="Add"
                />
            </div>
        </form>
    )
}

AddTodo.propTypes = {
    onAdd: PropTypes.func
}

export default AddTodo
