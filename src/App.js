import { useState } from 'react'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

const App = () => {
    const [todoItems, setTodoItems] = useState([
        {
            id: 1,
            text: 'Fold the laundry',
            completed: false
        },
        {
            id: 2,
            text: 'Answer important email',
            completed: false
        },
        {
            id: 3,
            text: 'Write a grocery list',
            completed: false
        },
        {
            id: 4,
            text: 'Finish up "Laboration 1 i React"',
            completed: true
        }
    ])

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
