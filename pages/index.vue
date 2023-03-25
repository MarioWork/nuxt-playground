<template>
  <main>
    <article>
      <h1>Users</h1>
      <section>
        <button @click="previousPage">Previous</button>
        <button @click="nextPage">Next</button>
      </section>
      <ul>
        <li v-for="{ id, first_name } in users" :key="id">
          {{ id }} - {{ first_name }}
        </li>
      </ul>
    </article>
  </main>
</template>

<script setup>
const config = useRuntimeConfig();

const page = ref(1);
const lastPage = ref(1);
const users = ref([]);

const getUsers = async (page) => {
  const { data } = await useFetch(() => `/users?page=${page}`, {
    baseURL: config.public.baseURL,
  });
  users.value = data.value.data;
  lastPage.value = data.value.total_pages;
};

await getUsers(page.value);

const nextPage = async () => {
  page.value + 1 > lastPage.value ? undefined : page.value++;
  await getUsers(page.value);
};

const previousPage = async () => {
  page.value - 1 <= 0 ? undefined : page.value--;
  await getUsers(page.value);
};
</script>

<style scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 3em;
}

main {
  display: flex;
  justify-content: center;
  margin-top: 5em;
}

article {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 2em 1em;
  background-color: rgb(199, 199, 199);
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

section {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1em;
}

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

ul {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5em;
}

li {
  background-color: grey;
  list-style-type: none;
  width: 200px;
  padding: 0.5em 2em;
  border-radius: 25px;
  color: white;
  transition-duration: 0.2s;
}

li:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  opacity: 0.7;
}
</style>
