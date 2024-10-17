import React, { useState } from 'react'

export default function ToInput(props) {
    const {handleAddToDo}=props
    const [todoValue,setTodoValue]=useState("")
  return (
    <header>
        <input value={todoValue} onChange={(e)=>
            {
                setTodoValue(e.target.value)
            }}
        type="text" placeholder='Enter todo...' />
        <button onClick={()=>{
            handleAddToDo(todoValue)
            setTodoValue("")
        }}>Add</button>
    </header>
  )
}
