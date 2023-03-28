<template>
  <div id="main">
    <NuxtLink>
      <div id="card">
        <img :src="`${user.avatar}`" alt="" />
        <h1>{{ user.first_name }}</h1>
        <h1>{{ user.last_name }}</h1>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const { user } = defineProps({
  user: { type: Object, required: true },
});
</script>

<style scoped>
#main {
  width: 100%;
  padding: 0.5em;
  display: flex;
  background-color: #f2e5e5;
  border-radius: 25px;
  padding: 0.5em;
}

#card {
  display: flex;
}

img {
  border-radius: 50%;
}
</style>
