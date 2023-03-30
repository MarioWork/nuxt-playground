<template>
  <span v-if="pending">loading...</span>
  <div v-else id="content">
    <article>
      <header>
        <NuxtLink to="/">
          <button>
            <i class="material-icons">chevron_left</i>
          </button>
        </NuxtLink>
      </header>
      <main>
        <img :src="user.data.avatar" alt="Profile Picture" loading="lazy" />
        <h1>{{ user.data.first_name }}</h1>
        <h1>{{ user.data.last_name }}</h1>
        <h2>{{ user.data.email }}</h2>
      </main>
    </article>
  </div>
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
          key: id,
          baseURL: config.baseURL,
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

  #content {
    display: flex;
    justify-content: center;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5em;
    background-color: #2b3a55;
    border-radius: 25px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 1.5em;
    padding-left: 2em;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    padding: 1.5em 3em 3em 3em;
  }

  h1 {
    color: white;
    font-size: 3em;
    text-align: center;
  }

  h2 {
    color: white;
  }

  img {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    object-fit: cover;
  }
</style>
