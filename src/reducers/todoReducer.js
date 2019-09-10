// handleAdd = (e, input) => {
//   e.preventDefault();
//   const newInput = { task: input, id: Date.now(), completed: false };
//   this.setState({
//     todoListItems: [...todoState.todoListItems, newInput]
//   });
// };

// checkHandel=e=>{
//   // console.log(e.target.checked);
//   const newState=todoState.todoListItems.map(item=>{
//     if (String(item.id)===String(e.target.id)){
//       if (e.target.checked){
//         return {task:item.task,id:item.id,completed:true};
//       } else {
//         return {task:item.task,id:item.id,completed:false};
//       }
//     }else{
//       return item;
//     }
//   })
//   this.setState({todoListItems:newState})
// }

// clearHandel=e=>{
//   const newState=this.state.todoListItems.filter(item=>{
//     return item.completed===false;
//   })
//   this.setState({todoListItems:newState})
// }
// const handleChange = e => {
//   const name = e.target.name;
//   const value = e.target.value;
//   props.dispatch({ [name]: value });
//   // console.log(e.target.value,this.state);
// };

// const addButton = e => {
//   // props.todos(e, props.todoState.input);
//   // setState({ input: "" });
// };
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        items: [
          ...state.items,
          { task: state.input, id: Date.now(), completed: false }
        ]
      };
    case "CLEAR_TODO":
      const clearState = state.items.filter(item => {
        return item.completed ? "" : item;
      });
      return {
        ...state,
        items: clearState
      };
      return state;
    case "CHECK_TODO":
      const newState = state.items.map(item => {
        if (String(item.id) === String(action.payload.id)) {
          return { task: item.task, id: item.id, completed: !item.completed };
        } else {
          return item;
        }
      });
      return {
        ...state,
        items: newState
      };
    case "UPDATE_INPUT":
      return { ...state, input: action.payload };
    default:
      return state;
  }
};
