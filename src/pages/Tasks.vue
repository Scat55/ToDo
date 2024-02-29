<script setup lang="ts">
import Header from '@/widgets/header/index.vue';
import { Form } from '@/features/addTaskForm';
</script>

<template>
  <div>
    <header><Header /></header>
    <main>
      <div class="main__form"><Form /></div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.main__form {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
</style>
