<script setup lang="ts">
import Header from '@/widgets/header/index.vue';
import { Form } from '@/features/addTaskForm';
import { Todo } from '@/features/Todo';

import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const isActive = computed(() => store.state.isActive);
const isEmptyTodoList = computed(() => !store.state.todos.length);
</script>

<template>
  <div class="main">
    <header>
      <Header />
    </header>
    <main>
      <div class="todos">
        <p class="main__form" v-if="isEmptyTodoList">У вас нет задач</p>
        <Todo
          class="main__todos"
          v-else
          v-for="todo in store.state.todos"
          :key="todo.id"
          :todo="todo"
        />
      </div>

      <div class="main__form" v-if="isActive"><Form /></div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.main {
  position: relative;
  &__form {
    position: absolute;
    top: 100px;
    left: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }
}

.todos {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  padding: 0 20px;
}
</style>
