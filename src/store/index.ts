import { createStore, Commit } from 'vuex';

interface TodoItem {
  title: string;
  completed: boolean;
}

interface State {
  todos: TodoItem[];
  isActive: boolean;
}

export default createStore<State>({
  state: {
    todos: [],
    isActive: false,
  },
  mutations: {
    // Добаляем новый todo_item
    new_todo(state: State, todoItem: string) {
      state.todos.push({
        title: todoItem,
        completed: false,
      });
      sessionStorage.setItem('todos', JSON.stringify(state.todos));
    },
    change_status(state: State) {
      state.isActive = true;
    },
  },
  actions: {
    changeStatusForm({ commit }: Commit) {
      commit('change_status');
    },
    addNewTodo({ commit }: Commit, todoItem: string) {
      commit('new_todo', todoItem);
    },
  },
});
