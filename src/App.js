import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import ChangeTheme from './components/ChangeTheme'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import GlobalStyles from './components/styles/Global'
import {
    StyledAppContainer,
    StyledTodoContent
} from './components/styles/ContainerStyled'
import { lightTheme } from './components/styles/Theme.styled'

const App = () => {
    const [todoItems, setTodoItems] = useState([])
    const [selectedTheme, setSelectedTheme] = useState(lightTheme)

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

    // Fetch single todo from JSON server
    const fetchTodo = async (id) => {
        const res = await fetch(`http://localhost:5000/todos/${id}`)
        const data = await res.json()

        return data
    }

    // Add a new todo
    const addTodo = async (todo) => {
        const res = await fetch('http://localhost:5000/todos', {
            method: 'POST',
            header: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })

        const data = await res.json()

        setTodoItems((prevTodoItems) => [...prevTodoItems, data])
    }

    // Delete a todo
    const deleteTodo = async (id) => {
        await fetch(`http://localhost:5000/todos/${id}`, {
            method: 'DELETE'
        })

        setTodoItems(todoItems.filter((todo) => todo.id !== id))
    }

    // Change if todo is completed or not
    const toggleCompleted = async (id) => {
        const todoToChange = await fetchTodo(id)
        const updatedTodo = {
            ...todoToChange,
            completed: !todoToChange.completed
        }

        const res = await fetch(`http://localhost:5000/todos/${id}`, {
            method: 'PUT',
            header: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedTodo)
        })

        const data = await res.json()

        setTodoItems(
            todoItems.map((todo) =>
                todo.id === id ? { ...todo, completed: data.completed } : todo
            )
        )
    }

    //Change selected theme
    const handleThemeChange = (theme) => {
        setSelectedTheme(theme)
    }

    return (
        <ThemeProvider theme={selectedTheme}>
            <StyledAppContainer>
                <StyledTodoContent>
                    <GlobalStyles />
                    <ChangeTheme
                        onClick={handleThemeChange}
                        currentTheme={selectedTheme}
                    />
                    <Header todoItems={todoItems} />
                    <TodoList
                        todoItems={todoItems}
                        onToggle={toggleCompleted}
                        onDelete={deleteTodo}
                    />
                    <AddTodo onAdd={addTodo} />
                </StyledTodoContent>
                <Footer />
            </StyledAppContainer>
        </ThemeProvider>
    )
}

export default App
