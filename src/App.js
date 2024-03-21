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

    const fetchTodos = async () => {
        const res = await fetch('http://localhost:5000/todos')
        const data = await res.json()

        return data
    }

    const addTodo = (todo) => {
        const id = Math.floor(Math.random() * 1000) + 1
        const newTodo = { id, ...todo }
        setTodoItems((prevTodoItems) => [...prevTodoItems, newTodo])
    }

    const deleteTodo = (id) => {
        setTodoItems(todoItems.filter((todo) => todo.id !== id))
    }

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
