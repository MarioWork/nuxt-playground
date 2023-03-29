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

      const params = useRoute().params;

      if (isNaN(params.id))
        throw createError({
          statusCode: 404,
          message: 'Id needs to be a number',
        });

      const getUser = async () => {
        const {
          data: user,
          pending,
          error,
        } = useLazyFetch(() => `/users/${params.id}`, {
          baseURL: config.baseURL,
          key: params.id,
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
