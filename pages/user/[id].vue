<template>
  <main>
    <div v-if="pending">LOADING ...</div>
    <div v-else>
      {{ user }}
    </div>
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
