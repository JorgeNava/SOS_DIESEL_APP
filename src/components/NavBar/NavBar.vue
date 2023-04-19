<template>
  <img :src="imageUrl" alt="logosos image" class="img_logosos"> 
  <div class="container"> 
    <router-link to="/productos" class="button-top">Productos</router-link>
    <router-link to="/" class="button">Quienes Somos</router-link>
    <router-link to="/contactos" class="button-bottom" href="#">Contacto</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
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
  .img_logosos{
    position: absolute; /* Para que la imagen se posicione en una ubicación específica de la página */
    top: 0; /* Para fijar la imagen en la parte superior de la página */
    left: 0; /* Para fijar la imagen en la esquina superior izquierda de la página */
    max-width: 100px; /* Para asegurarse de que la imagen no exceda un ancho máximo */
    height: auto; /* Para que la imagen mantenga su relación de aspecto al redimensionarse */
    max-width: 1000px; /* Para agrandar la imagen */
    padding-top: 5%; /* Para agregar un margen entre la imagen y el limite superior de la pantalla*/
    padding-left: 3%; /* Para agregar un margen entre la imagen y el limite izquierdo de la pantalla*/
  }
 
  /* Estilo para el botón */
  .button {
    width: 950px;
    font-weight: bold;
    font-size: 100px;
    position: absolute;
    top: 1000px;
    left: 190px;
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: white;
    color: rgb(235, 11, 11);
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Estilo para el botón superior */
  .button-top {
    width: 950px;
    font-weight: bold;
    font-size: 100px;
    position: absolute;
    top: 800px;
    left: 190px;
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: white;
    color: rgb(235, 11, 11);
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  /* Estilo para el botón inferior */
.button-bottom {
  width: 950px;
  font-weight: bold;
  font-size: 100px;
  position: absolute;
  top: 1200px;
  left: 190px;
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: white;
  color: rgb(235, 11, 11);
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Estilo para cuando el mouse pasa sobre el botón */
.button:hover {
    background-color: rgb(186, 48, 48);
    color: white;
  }

  /* Estilo para el margen rojo */
  .button:hover {
    border-color: white;
  }

  /* Estilo para cuando el mouse pasa sobre el botón */
  .button-top:hover {
    background-color: rgb(186, 48, 48);
    color: white;
  }

  /* Estilo para el margen rojo */
  .button-top:hover {
    border-color: white;
  }

  /* Estilo para cuando el mouse pasa sobre el botón */
  .button-bottom:hover {
    background-color: rgb(186, 48, 48);
    color: white;
  }

  /* Estilo para el margen rojo */
  .button-bottom:hover {
    border-color: white;
  }
</style>