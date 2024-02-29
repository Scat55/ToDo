<script setup lang="ts">
interface Props {
  placeholder?: string;
  value?: string;
}

const props = defineProps<Props>();
const { placeholder, value } = props;
</script>

<template>
  <div class="mainInput">
    <label for="task">Название задачи</label>
    <input class="input" type="text" name="task" :placeholder="placeholder" :value="value" />
  </div>
</template>

<style scoped lang="scss">
.mainInput {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.input {
  width: 100%;
  max-width: 220px;
  height: 45px;
  padding: 12px;
  border-radius: 12px;
  border: 1.5px solid lightgrey;
  outline: none;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 0px 20px -18px;

  &:hover {
    border: 2px solid lightgrey;
    box-shadow: 0px 0px 20px -17px;
  }
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    border: 2px solid grey;
  }
}
</style>
