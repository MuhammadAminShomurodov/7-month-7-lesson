const { createStore } = require("redux");

const initialState = {
  todos: [
    { id: 1, task: "Initial Task 1" },
    { id: 2, task: "Initial Task 2" },
  ],
};

const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};

const store = createStore(todoReducer);

const addTodo = (id, task) => ({
  type: ADD_TODO,
  payload: { id, task },
});

const updateTodo = (id, task) => ({
  type: UPDATE_TODO,
  payload: { id, task },
});

const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

module.exports = { store, addTodo, updateTodo, deleteTodo };
