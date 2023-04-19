<template>
  <div class="home">
    <HomeProduct msg="SOS DIESEL" :imageUrl="imagenTractor"/>
    <NavBar msg="SOS DIESEL" :imageUrl="logosos"/>
  </div>
</template>

<script>
import HomeProduct from "@/components/HomeProduct/HomeProduct.vue"
import NavBar from "@/components/NavBar/NavBar.vue"
export default {
    name: "HomeView",
    props: {
        msg: String
    },
    data() {
    return {
      imagenTractor: require('@/assets/tractor.png'),
      logosos: require('@/assets/logosos.png')
    };
  },
    components: { HomeProduct, NavBar }
}
</script>

<style scoped>
h1 {
  color: #42b983;
  margin: 40px 0 0;
}
</style>
