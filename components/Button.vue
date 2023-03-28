<template>
  <button @click="onClick">
    <slot />
  </button>
</template>

<script setup>
const { onClick } = defineProps({
  onClick: Function,
});
</script>

<style scoped>
button {
  width: 100px;
  padding: 0.5em 1.5em;
  border: none;
  border-radius: 25px;
  background-color: blue;
  color: white;
  cursor: pointer;
  transition-duration: 0.5s;
}

button:hover {
  opacity: 0.5;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
