export const itemList = {
  input: "",
  items: [
    {
      item: "Learn about reducers",
      id: 1528812077286,
      completed: false,
      dateComplete: ""
    }
    // {
    //   item: "Organize Garage",
    //   id: 1528817077286,
    //   completed: false
    // },
    // {
    //   item: "Bake Cookies",
    //   id: 1528817084358,
    //   completed: false
    // }
  ]
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        input: "",
        items: [
          ...state.items,
          { item: state.input, id: Date.now(), completed: false }
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
    case "CHECK_TODO":
      const newState = state.items.map(item => {
        if (String(item.id) === String(action.payload.id)) {
          return {
            item: item.item,
            id: item.id,
            completed: !item.completed,
            dateComplete: item.completed ? "" : Date.now()
          };
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
