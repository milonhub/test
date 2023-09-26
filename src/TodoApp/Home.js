import React, { useState } from 'react';
import {v4 as uuidv4} from "uuid";

import style from "./Home.module.css";
import Todos from "./Todos";
import NewTodo from './NewTodo';

export default function Home() {

    const [todos, setTodos] = useState([]);

    const handleNewTodo = (todo) => {
      console.log(todo);
        setTodos((prevTodos) =>{
          return [...prevTodos, { id: uuidv4(), todo}]
         
        })
        
    }
   
    const RemoveId = (id) => {
      setTodos((prevTodos) => {
        
        const filterTodos = prevTodos.filter((todo) => todo.id !== id)
        
        return filterTodos;
      })
    }

  return (
    <div className={style.container}>
        <h1 style={{color:"white"}}> Todo App</h1>

         <NewTodo onAddNewTodo = {handleNewTodo}/>
        <Todos todos = {todos} onRemoveId = {RemoveId}/>
        
      
    </div>
  )
}
