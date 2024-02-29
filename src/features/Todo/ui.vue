<script setup lang="ts">
interface TodosItem {
  title: string;
  completed: boolean;
}

interface TodoProps {
  todo: TodosItem;
}
const props = defineProps<TodoProps>();
const { todo } = props;
</script>

<template>
  <div class="todos">
    <div class="todo">
      <span class="todo__title">{{ todo.title }}</span>
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
  justify-content: left;
  backdrop-filter: blur(10px);
  transition: 0.5s ease-in-out;
}
</style>
