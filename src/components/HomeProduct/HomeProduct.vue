<template>
    <img :src="imageUrl" alt="tractor image" class="img_tractor">  
</template>

<script>
export default {
  name: 'HomeProduct',
  props: {
    msg: String,
    imageUrl: String 
  },
    /*data() {
        return {
        };
    },*/
}
</script>

<style scoped>
    .img_tractor{
      display: block;
      max-width: 100%;
      height: auto;
      margin: 0 auto;
      width: 2000px;
      padding: 10%;
    }
</style>