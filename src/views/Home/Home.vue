<template>
  <div class="home">
    <HomeProduct msg="SOS DIESEL" :imageUrl="imagenTractor"/>
    <NavBar msg="SOS DIESEL" :imageUrl="logosos"/>
    <NavBar msg="SOS DIESEL" :imageUrl1="Kubotalogo"/>
    <NavBar msg="SOS DIESEL" :imageUrl2="sprinterlogo"/>
    <NavBar msg="SOS DIESEL" :imageUrl3="yanmarlogo"/>
    <NavBar msg="SOS DIESEL" :imageUrl4="delivery"/>
    <Carousel />
  </div>
</template>

<script>
import Carousel from "@/components/Carousel/Carousel.vue"
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
      logosos: require('@/assets/logosos.png'),
      Kubotalogo: require('@/assets/kubotalogo.png'),
      sprinterlogo: require('@/assets/sprinterlogo.png'),
      yanmarlogo: require('@/assets/yanmarlogo.png'),
      delivery: require('@/assets/delivery.png')
    };
  },
    components: { HomeProduct, NavBar, Carousel }
}
</script>

<style scoped>
h1 {
  color: #42b983;
  margin: 40px 0 0;
}
</style>
