<template>
  <div>
    <h1>Users</h1>
    <button @click="nextPage">next</button>
    <ul>
      <li v-for="{ id, first_name } in users" :key="id">
        {{ id }} - {{ first_name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const page = ref(1);
const users = ref([]);

const getUsers = async (page) => {
  const { data } = await useFetch(
    () => `https://reqres.in/api/users?page=${page}`
  );
  return data.value.data;
};

users.value = await getUsers(page.value);

const nextPage = async () => {
  page.value++;
  users.value = await getUsers(page.value);
};
</script>
