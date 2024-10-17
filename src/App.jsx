import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToInput from './components/ToInput'
import TodoList from './components/TodoList'

function App() {

  const [todos,setTodos]=useState(["Go to gym",
    "Solve 300 questions",
    "Create atleast 5 projects",
    "learn to communicate"])

    const [todoValue,setTodoValue]=useState("")

    function presistData(newlist) {
      localStorage.setItem('todos',JSON.stringify({todos:newlist}))
    }

    function handleAddToDo(newTodo)
    {
      const newTodoList=[...todos,newTodo]
      presistData(newTodoList)
      setTodos(newTodoList)
    }

    function handleDeleteTodo(index)
    {
      const newTodoList=todos.filter((todo,todoIndex)=>{
        return todoIndex != index
      })
      presistData(newTodoList)
      setTodos(newTodoList)

    }

    function handleEditTodo(index)
    {
     const valueToBeDeleted=todos[index]
     setTodoValue(valueToBeDeleted)
     handleDeleteTodo(index)
    }

    useEffect(()=>{
      if(!localStorage)
        return
      let localTodos=localStorage.getItem('todos')
      if(!localTodos)
        return 
      localTodos=JSON.parse(localTodos).todos
      setTodos(localTodos)
    },[])

  return (

    <>
    <ToInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddToDo={handleAddToDo}/>      
    <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>

    </>
  )
}

export default App
