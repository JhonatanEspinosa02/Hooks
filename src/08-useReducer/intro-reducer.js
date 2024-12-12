const initialState = [
  {
    id: 1,
    todo: "Gather things",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Gather another things",
  done: false,
};

const addTodoAction = {
  type: "add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);
console.log({ state: todos });
