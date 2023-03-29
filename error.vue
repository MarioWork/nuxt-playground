<template>
  <div>
    <h1>
      {{ error.statusCode }}
    </h1>
    <h4>{{ error.message }}</h4>
  </div>
</template>

<script setup>
defineProps({
  error: Error
});
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
