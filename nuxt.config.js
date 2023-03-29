import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  runtimeConfig: {
    app: {
      head: {
        title: 'Nuxt 3 Playground',
        meta: [
          {
            name: 'description',
            content:
              'This project has the objective of helping to learn vue 3 ',
          },
        ],
      },
    },
    public: {
      baseURL: 'https://reqres.in/api',
    },
  },
});
