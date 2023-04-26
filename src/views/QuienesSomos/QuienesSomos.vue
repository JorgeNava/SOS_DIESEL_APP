<template>
    <div class="bg">
        <div class="container">
        </div>
    </div>
</template>

<script>
export default {
    name: "QuienesSomos",
    props: {
        msg: String,
        imageUrl5: String
    },
    data() {
    return {
      pantalla2: require('@/assets/pantalla2.png')
    };
  },
}
</script>

<style scoped>

    .container{
    background-image: url("@/assets/pantalla2.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 50em;
    padding: 3em 3em;
    margin-left: 9em;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    top: 50%;
    left: 43%;
    transform: translate(-50%, -50%);
    position: absolute;
    }

    .bg {
    background: linear-gradient(to bottom, #9c3131, #423838);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
</style>