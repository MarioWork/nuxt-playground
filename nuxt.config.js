import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt 3 Playground',
      meta: [
        {
          name: 'description',
          content: 'This project has the objective of helping to learn vue 3 ',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseURL: 'https://reqres.in/api',
    },
  },
});
