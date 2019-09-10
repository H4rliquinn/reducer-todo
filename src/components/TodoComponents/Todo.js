import React from 'react';


function Todo(props){
    console.log("Todo props",props);
    return(
        <div>
           {props.state.map(item=>
             <h1>{item.task}</h1> 
        )}          
        <TodoForm/>
        </div>
    )
}

export default Todo;