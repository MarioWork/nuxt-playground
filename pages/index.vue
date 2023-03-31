<template>
  <main>
    <article>
      <h1>Users</h1>
      <section id="actionSection">
        <CustomButton :on-click="previousPage"> Previous </CustomButton>
        <CustomButton :on-click="nextPage"> Next </CustomButton>
      </section>
      <section id="userSection">
        <UserCard v-for="user in users" :key="user.id" :user="user" />
      </section>
    </article>
  </main>
</template>

<script setup>
  //Script setup example
  const config = useRuntimeConfig();
  const page = ref(1);
  const lastPage = ref(1);
  const users = ref([]);

  const getUsers = async (page) => {
    const { data } = await useFetch(() => `/users`, {
      baseURL: config.public.baseURL,
      query: { page },
    });
    users.value = data.value.data;
    lastPage.value = data.value.total_pages;
  };

  await getUsers(page.value);

  const nextPage = async () => {
    page.value + 1 > lastPage.value ? undefined : page.value++;
  };

  const previousPage = async () => {
    page.value - 1 <= 0 ? undefined : page.value--;
  };

  watch(page, async (newPageVal) => {
    await getUsers(newPageVal);
  });
</script>

<style scoped>
  h1 {
    font-size: 3em;
    color: white;
  }

  main {
    display: flex;
    justify-content: center;
    margin-top: 5em;
  }

  article {
    width: 50vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    background-color: #2b3a55;
    border-radius: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding-top: 1em;
    padding-bottom: 1em;
  }

  #actionSection {
    width: 50%;
    display: flex;
    gap: 1em;
  }

  #userSection {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    gap: 1em;
    padding-top: 2em;
    padding-bottom: 2em;
  }
</style>
