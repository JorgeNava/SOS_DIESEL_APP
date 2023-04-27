<template>
  <div class="bgg">
    <div class="container">
      <div class="bg-logo">
        <router-link to="/">
          <img src="@/assets/logillo.png" alt="Tractor" class="logo-rogo-img" >
        </router-link>
        </div>
      <img src="@/assets/tractor.png" alt="Tractor" class="tractor-img">
      <div class="text-container">
        <h1 class="red-text">¿Quienes</h1>
        <h1 class="white-text">SOMOS?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit. Integer bibendum erat augue, nec sollicitudin libero semper vitae. Sed ac elit eget nulla finibus hendrerit ac non lectus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit. Integer bibendum erat augue, nec sollicitudin libero semper vitae. Sed ac elit eget nulla finibus hendrerit ac non lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit. Integer bibendum erat augue, nec sollicitudin libero semper vitae. Sed ac elit eget nulla finibus hendrerit ac non lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit. Integer bibendum erat augue, nec sollicitudin libero semper vitae. Sed ac elit eget nulla finibus hendrerit ac non lectus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit. Integer bibendum erat augue, nec sollicitudin libero semper vitae. Sed ac elit eget nulla finibus hendrerit ac non lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit. Integer bibendum erat augue, nec sollicitudin libero semper vitae. Sed ac elit eget nulla finibus hendrerit ac non lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit. Integer bibendum erat augue, nec sollicitudin libero semper vitae. Sed ac elit eget nulla finibus hendrerit ac non lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit. Integer bibendum erat augue, nec sollicitudin libero semper vitae. Sed ac elit eget nulla finibus hendrerit ac non lectus.</p>
      </div>
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
      
    };
  },
}
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  padding: 3rem;
  max-width: 10000px;
  height: 101vh;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.img-container{
  max-width: 33.33%;
  margin-right: 6rem;
  width: 80rem;
}
.tractor-img {
  max-width: 100%;
  margin-right: 2rem;
  height: 80%;
  width: 73rem;
}

.text-container {
  display: flex;
  flex-direction: column;
  max-width: 66.67%;
  height: 106vh;
}

.red-text {
  color: #ff0000;
  font-size: 9rem;
  font-weight: bold;
  margin: 0;
}

.white-text {
  color: #fff;
  font-size: 7rem;
  font-weight: bold;
  margin: 0;
}

p {
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 2rem 0;
}

.bgg {
    background: linear-gradient(to bottom, #d90f0fd7, #323131);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: -1;
  }
  .bg-logo {
  position: absolute;
  top: 3vh;
  left: 5vh;
  width: 100px; /* puedes ajustar el ancho según tus necesidades */
  height: 100px; /* puedes ajustar la altura según tus necesidades */
  z-index: 1;
}
</style>