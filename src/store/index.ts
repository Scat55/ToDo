import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    // Добаляем новый todo_item
    new_todo(state, todoItem) {
      state.todos.push({
        title: todoItem,
        completed: false,
      });
      const localState = sessionStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
  actions: {
    addNewTodo({ commit }, todoItem) {
      commit('new_todo', todoItem);
    },
  },
});
