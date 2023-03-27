<template>
  <div>{{ id }}</div>
</template>

<script>
//Options API Example
export default {
  mounted() {
    console.log(this.$route.params);
  },
};
</script>
