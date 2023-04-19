<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <Carousel />
  </div>
</template>

<script>
import Carousel from "@/components/Carousel/Carousel.vue"

export default {
  name: 'HomeView',
  props: {
    msg: String
  },
  components: { Carousel }
}
</script>

<style scoped>
h1 {
  color: #42b983;
  margin: 40px 0 0;
}
</style>
