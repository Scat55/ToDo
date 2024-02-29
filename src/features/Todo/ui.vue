<script setup lang="ts">
import { useStore } from 'vuex';

interface TodosItem {
  title: string;
  completed: boolean;
}

interface TodoProps {
  todo: TodosItem;
}
const props = defineProps<TodoProps>();
const { todo } = props;

const store = useStore();

function showModalForEditing() {
  store.dispatch('setSelectedTodo', props.todo);
  store.dispatch('changeEditingForm'); // Открываем модальное окно для редактирования
}

function deleteItem() {
  store.dispatch('deleteTodo', todo);
}
</script>

<template>
  <div class="todos">
    <div class="todo" @click="showModalForEditing">
      <span class="todo__title">{{ todo.title }}</span>
      <img @click.stop="deleteItem()" src="@/app/assets/images/deleteIcon.svg" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.todo {
  padding: 0 10px;
  color: white;
  width: 230px;
  height: 70px;
  background: #353535;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
</style>
