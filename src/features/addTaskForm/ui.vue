<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
import { Input } from '@/shared/input';
import { Button } from '@/shared/button';

const inputValue = ref<string>('');
const store = useStore();

function test() {
  store.dispatch('addNewTodo', inputValue.value);
  inputValue.value = '';
}
</script>

<template>
  <form class="form" @submit.prevent="test">
    <Input v-model:value="inputValue" />
    <Button type="submit" class="form__btn">Создать</Button>
  </form>
</template>

<style scoped lang="scss">
.form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 390px;
  height: 454px;
  background: white;
  border-radius: 10px;
  transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(190, 190, 190),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);

  &__btn {
    width: 150px;
    font-size: 1rem;
  }
}
</style>
