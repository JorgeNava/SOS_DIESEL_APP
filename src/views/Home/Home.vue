<template>
  <div class="home">
    <HomeProduct msg="SOS DIESEL"/>
  </div>
</template>

<script>
import HomeProduct from "@/components/HomeProduct/HomeProduct.vue"
export default {
    name: "HomeView",
    props: {
        msg: String
    },
    components: { HomeProduct }
}
</script>

<style scoped>
h1 {
  color: #42b983;
  margin: 40px 0 0;
}
</style>
