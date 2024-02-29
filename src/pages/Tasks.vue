<script setup lang="ts">
import Header from '@/widgets/header/index.vue';
import { Form } from '@/features/addTaskForm';

import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const isActive = computed(() => store.state.isActive);
</script>

<template>
  <div>
    <header><Header /></header>
    <main>
      <div class="main__form" v-if="isActive"><Form /></div>
      <p class="main__form" v-else>У вас нет задач</p>
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
