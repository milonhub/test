import React from 'react';

import style from "./Todo.module.css";
export default function Todo(props) {
  const {title, des} =props.todo;
  const {id} =props;



  const handleClick = () =>{
    props.onRemoveId(id);
  }
  
  return (
    <div className={style.todo}>
        <article>
        <h1>{title}</h1>
        <p>{des}</p>
        </article>
        <div>
            <button className= {style.btn} onClick={handleClick}>
             <i className='fa fa-trash fa-2x'></i>
            </button>
        </div>
    </div>
  )
}
