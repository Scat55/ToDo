<script setup lang="ts">
import { Button } from '@/shared/button';

import { useStore } from 'vuex';

const store = useStore();

function changeStatusForm() {
  store.dispatch('changeStatusForm');
}
</script>

<template>
  <div class="header">
    <RouterLink to="/"><h1 class="header__title">TODOS</h1></RouterLink>
    <Button @click="changeStatusForm" class="header__btn"> Создать </Button>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 40px;
  background: #e0e0e0;
  box-shadow:
    21px 21px 42px #bebebe,
    -21px -21px 42px #ffffff;

  &__btn {
    width: 150px;
  }

  &__title {
    color: darkorchid;
    font-weight: 900;
  }
}
</style>
