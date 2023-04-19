<template>
    <h1>{{ msg }}</h1>
    <img :src="imageUrl" alt="tractor image" class="img_tractor">  
</template>

<script>
import tractor from "@/components/HomeProduct/img/tractor.png"
export default {
  name: 'HomeProduct',
  props: {
    msg: String
  },
    data() {
        return {
        imageUrl: tractor,
        };
    },
}
</script>

<style scoped>

</style>