import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [],
    isActive: false,
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
    change_status(state) {
      state.isActive = true;
    },
  },
  actions: {
    changeStatusForm({ commit }) {
      commit('change_status');
    },
    addNewTodo({ commit }, todoItem) {
      commit('new_todo', todoItem);
    },
  },
});
