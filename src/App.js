import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
const itemList=[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state={
      todoListItems:[]
    } 
  }

  handleAdd=(e,input)=>{
    e.preventDefault();
    const newInput={task:input,id:Date.now(),completed:false}
    this.setState({
      todoListItems:[...this.state.todoListItems,newInput]
    });
  }

  checkHandel=e=>{
    // console.log(e.target.checked);
    const newState=this.state.todoListItems.map(item=>{
      if (String(item.id)===String(e.target.id)){
        if (e.target.checked){
          return {task:item.task,id:item.id,completed:true};
        } else {
          return {task:item.task,id:item.id,completed:false};
        }
      }else{
        return item;
      }
    })
    this.setState({todoListItems:newState})
  }

  clearHandel=e=>{
    const newState=this.state.todoListItems.filter(item=>{
      return item.completed===false;
    })
    this.setState({todoListItems:newState})
  }

  componentDidMount=()=>{
    this.setState({todoListItems:itemList});
  }

  componentDidUpdate(){
    // console.log(this.state);
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todoListItems} checkHandel={this.checkHandel}/>
        <TodoForm todos={this.handleAdd} clearHandel={this.clearHandel} />
      </div>
    );
  }
}

export default App;
