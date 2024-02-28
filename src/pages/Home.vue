<script setup lang="ts">
import { Button } from '@/shared/button';
</script>

<template>
  <main>
    <div class="main">
      <h1 class="main__title">TODOS</h1>
      <div class="main__button"><Button>К списку дел</Button></div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 100vh;

  &__title {
    color: darkorchid;
    font-weight: 900;
  }

  &__button {
    width: 200px;
  }
}
</style>
