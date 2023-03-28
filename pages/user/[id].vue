<template>
  <div v-if="pending">LOADING ...</div>
  <div>{{ user }}</div>
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
        message: "Id needs to be a number",
      });

    const getUser = async () => {
      const { data, pending, error } = useLazyFetch(() => `/users/${id}`, {
        baseURL: config.baseURL,
      });

      if (error.value)
        throw createError({
          statusCode: error.statusCode,
          message: error.message,
        });

      const { data: user } = data?.value ?? {};

      return { pending: pending.value, user };
    };

    const { pending, user } = await getUser();

    return {
      pending,
      user,
    };
  },
};
</script>
