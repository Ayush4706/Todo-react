import React, { Children } from 'react'

export default function TodoCard(props) {

    const {children,handleDeleteTodo,index,handleEditTodo}=props
  return (
      <li className='todoItem'>

            {children}

            <div className="actionsContainer">
            <i className="fa-regular fa-pen-to-square"></i>
            <button onClick={()=>
                {handleDeleteTodo(index)}
                }>

            <button onClick={()=>{
                handleEditTodo(index)
            }}>

            <i className="fa-solid fa-trash"></i>
            </button>
            </button>
            </div>

        </li>


  )
}
