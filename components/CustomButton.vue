<template>
  <button @click="onClick">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  onClick: {
    type: Function,
    default: () => {}
  },
});

const { onClick } = toRefs(props);
</script>

<style scoped>
button {
  width: 250px;
  height: 45px;
  padding: 0.5em 1.5em;
  border: none;
  border-radius: 25px;
  font-size: 1em;
  font-weight: bold;
  background-color: #ce7777;
  color: white;
  cursor: pointer;
  transition-duration: 0.5s;
}

button:hover {
  opacity: 0.5;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
