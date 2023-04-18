<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
  margin: 40px 0 0;
}
</style>
