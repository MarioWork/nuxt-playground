import { ref, watch } from 'vue';

export async function useUsers() {
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

  const nextPage = async () => {
    page.value + 1 > lastPage.value ? undefined : page.value++;
  };

  const previousPage = async () => {
    page.value - 1 <= 0 ? undefined : page.value--;
  };

  watch(page, async (newPageVal) => {
    await getUsers(newPageVal);
  });

  await getUsers(page.value);

  return {
    users,
    nextPage,
    previousPage,
  };
}
