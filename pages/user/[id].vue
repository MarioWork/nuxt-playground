<template>
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
      const { data } = await useFetch(() => `/users/${id}`, {
        baseURL: config.baseURL,
      });

      const { data: user } = data.value;

      if (!user)
        throw createError({ statusCode: 404, message: "User not found" });

      return user;
    };

    return {
      user: await getUser(),
    };
  },
};
</script>
