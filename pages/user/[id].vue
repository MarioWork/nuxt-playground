<template>
  <span v-if="pending">loading...</span>
  <main v-else>
    <article>
      <h1>{{ user.data.first_name }}</h1>
      <section></section>
    </article>
  </main>
</template>

<script>
  //No script setup example
  export default {
    async setup() {
      const config = useRuntimeConfig();

      const { id } = useRoute().params;

      if (isNaN(id))
        throw createError({
          statusCode: 404,
          message: 'Id needs to be a number',
        });

      const getUser = async () => {
        const {
          data: user,
          pending,
          error,
        } = useLazyFetch(() => `/users/${id}`, {
          baseURL: config.baseURL,
          key: id,
        });

        if (error.value)
          throw createError({
            statusCode: error.statusCode,
            message: error.message,
          });

        return { pending, user };
      };

      const { pending, user } = await getUser();

      return {
        pending,
        user,
      };
    },
  };
</script>

<style scoped>
  * {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }

  main {
    display: flex;
    justify-content: center;
    margin-top: 5em;
  }

  h1 {
    color: white;
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
</style>
