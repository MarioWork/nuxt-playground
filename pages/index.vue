<template>
  <div>
    <h1>Page 1</h1>
    <NuxtLink to="">Next Page</NuxtLink>
    <ul>
      <li v-for="{ id, name } in people" :key="id">{{ id }} - {{ name }}</li>
    </ul>
  </div>
</template>

<script>
const people = [
  { id: 1, name: "John" },
  { id: 2, name: "Joseph" },
  { id: 3, name: "Lily" },
];

export default {
  data() {
    return {
      people: people,
    };
  },
};
</script>
