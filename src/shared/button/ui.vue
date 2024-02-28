<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  background-color: transparent;
  font-size: 1.4rem;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, darkblue, darkorchid) border-box;
  border-radius: 0.5rem;
  border: 4px solid transparent;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
