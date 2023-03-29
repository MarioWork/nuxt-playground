<template>
  <div id="main">
    <NuxtLink :to="`/user/${user.id}`">
      <div id="card">
        <img
          :src="`${user.avatar}`"
          alt="Profile Picture"
          loading="lazy"
        >
        <h1>{{ user.first_name }}</h1>
        <h3>{{ user.last_name }}</h3>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  user: { type: Object, required: true },
});

const { user } = toRefs(props);

</script>

<style scoped>
#main {
  width: 80%;
  padding: 0.5em;
  display: flex;
  background-color: #f2e5e5;
  border-radius: 25px;
  cursor: pointer;
}

#card {
  display: flex;
}

a {
  color: black;
  text-decoration: none;
}

img {
  border-radius: 50%;
  height: 150px;
  width: 150px;
  object-fit: cover;
}
</style>
