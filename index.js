const { store, addTodo, updateTodo, deleteTodo } = require('./store');

store.subscribe(() => console.log(store.getState()));

console.log('Dastlabki holat:');
console.log(store.getState());

console.log('Add Todo:');
store.dispatch(addTodo(3, 'Lorem'));
store.dispatch(addTodo(4, 'Ipsum'));

console.log('Update Todo:');
store.dispatch(updateTodo(1, 'Updated Initial Task 1'));

console.log('Delete Todo:');
store.dispatch(deleteTodo(2));
