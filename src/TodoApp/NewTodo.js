import React, { useState } from 'react';

import style from "./NewTodo.module.css"
export default function NewTodo(props) {
    const [todo, setTodo] = useState({title: '', des: ""});
    const {title, des} = todo;
   

    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) =>{
            return {...oldTodo, [name]: event.target.value}
        })
    }

    const  handleSubmit = (event) => {
        event.preventDefault();
        props.onAddNewTodo(todo);
        setTodo({title: "", des: ""})
        
    }
  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
           <label>Title: </label>
           <input type='text' name='title' id='title' value={title} onChange={handleChange}></input>
        </div>
         
         <div className={style["form-field"]}>
           <label>Description: </label>
           <textarea name="des" id= 'des' value={des} onChange={handleChange} ></textarea>
         </div>
         <button type='submit' className={style.btn}>Add Todo</button>
    </form>
  )
}
