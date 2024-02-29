import { createStore, Commit } from 'vuex';
import { v4 as uuidv4 } from 'uuid';
interface TodoItem {
  id: number;
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
        id: uuidv4(),
        title: todoItem,
        completed: false,
      });
      sessionStorage.setItem('todos', JSON.stringify(state.todos));
    },
    change_status(state: State) {
      state.isActive = true;
    },

    // Удалеям todo_item по индексу
    delete_todo(state: State, todoItem: TodoItem) {
      let index = state.todos.indexOf(todoItem);
      state.todos.splice(index, 1);
    },
  },
  actions: {
    // Изменения статуса показа формы
    changeStatusForm({ commit }: Commit) {
      commit('change_status');
    },
    // Добавление нового элемента todo
    addNewTodo({ commit }: Commit, todoItem: string) {
      commit('new_todo', todoItem);
    },
    //Удаление Todo
    deleteTodo({ commit }: Commit, todoItem: TodoItem) {
      commit('delete_todo', todoItem);
    },
    // Редактирование элемента
  },
});
