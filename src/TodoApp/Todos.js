import React from 'react';

import Todo from './Todo';
import style from './Todos.module.css';
export default function Todos(props) {
// const removeId = (id) =>{
//   props.onRemoveId(id);
// }
  return (
    <section className= {style.todos}>
    {props.todos.map((todo) => {return <Todo todo={todo.todo} key={todo.id} id = {todo.id} onRemoveId = {props.onRemoveId}/>}) }
    </section>
  ); 
}