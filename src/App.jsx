import { useState } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

function App() {
    // const todos = [
    //   {input: "Hi Dina! add your first todo!", complete: true},
    //   {input: "Study coding", complete: true},
    //   {input: "learn react.js", complete: false},
    //   {input: "learn leetcode", complete: false},
    // ]

    const [todos, setTodos] = useState([
        {input: "Hi Dina! add your first todo!", complete: true}
    ])

    const [selectedTab, setSelectedTab] = useState('Open')

    function handleAddTodo(newTodo) {
        const newTodoList = [...todos, {input: newTodo, complete: false}]
        setTodos(newTodoList)
    }

    function handleEditTodo() {
        
    }

    function handleDeleteTodo() {
        
    }

    return (
        <>
        <Header todos={todos}/>
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
        <TodoInput handleAddTodo={handleAddTodo}/>
        <TodoList todos={todos}/>
        
        </>
        )
    }

export default App
