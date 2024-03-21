import { useState, useEffect } from 'react'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

const App = () => {
    const [todoItems, setTodoItems] = useState([])

    useEffect(() => {
        const getTodos = async () => {
            const todosFromServer = await fetchTodos()
            setTodoItems(todosFromServer)
        }

        getTodos()
    }, [])

    // Fetch todos from JSON server
    const fetchTodos = async () => {
        const res = await fetch('http://localhost:5000/todos')
        const data = await res.json()

        return data
    }

    // Add a new todo
    const addTodo = (todo) => {
        const id = Math.floor(Math.random() * 1000) + 1
        const newTodo = { id, ...todo }
        setTodoItems((prevTodoItems) => [...prevTodoItems, newTodo])
    }

    // Delete a todo
    const deleteTodo = async (id) => {
        await fetch(`http://localhost:5000/todos/${id}`, {
            method: 'DELETE'
        })

        setTodoItems(todoItems.filter((todo) => todo.id !== id))
    }

    // Change if todo is completed or not
    const toggleCompleted = (id) => {
        setTodoItems(
            todoItems.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    return (
        <div className="app-container">
            <div className="todo-content">
                <Header todoItems={todoItems} />
                <TodoList
                    todoItems={todoItems}
                    onToggle={toggleCompleted}
                    onDelete={deleteTodo}
                />
                <AddTodo onAdd={addTodo} />
            </div>
            <Footer />
        </div>
    )
}

export default App
