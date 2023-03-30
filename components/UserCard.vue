<template>
  <article id="main">
    <NuxtLink :to="`/user/${user.id}`">
      <main id="card">
        <img :src="`${user.avatar}`" alt="Profile Picture" loading="lazy" />
        <section>
          <label>First Name</label>
          <h1>{{ user.first_name }}</h1>
          <label>Last Name</label>
          <h2>{{ user.last_name }}</h2>
        </section>
        <i class="material-icons">chevron_right</i>
      </main>
    </NuxtLink>
  </article>
</template>

<script setup>
  const props = defineProps({
    user: { type: Object, required: true },
  });

  const { user } = toRefs(props);
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  #main {
    width: 80%;
    padding: 0.5em;
    display: flex;
    background-color: #f2e5e5;
    border-radius: 25px;
    cursor: pointer;
    transition-duration: 0.5s;
  }

  #main:hover {
    -webkit-box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.65);
    box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.65);
    scale: 1.1;
  }

  #card {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  a {
    color: black;
    text-decoration: none;
    width: 100%;
  }

  img {
    border-radius: 50%;
    height: 150px;
    width: 150px;
    object-fit: cover;
  }

  section {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5em;
  }

  h1 {
    font-size: 2em;
  }

  i {
    margin-left: auto;
    margin-right: 1em;
    color: #ce7777;
    cursor: pointer;
    font-size: 3em;
    transition-duration: 0.2s;
  }

  i:hover {
    opacity: 0.5;
    scale: 1.2;
  }
</style>
