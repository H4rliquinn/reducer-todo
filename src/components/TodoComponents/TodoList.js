import React from 'react';
import './Todo.css';

const TodoList= (props) => {

    return (
        props.todos.map(item=>{

            return(
                <div className="todoItem" key={item.id}>
                    <input type="checkbox" id={item.id} onChange={props.checkHandel} checked={props.completed} />
                    <h1>{item.task}</h1> 
                </div>
            ) 
        })   
    )
}
 
export default TodoList