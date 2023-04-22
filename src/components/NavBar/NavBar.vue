<template>
  <img :src="imageUrl" alt="logosos image" class="img_logosos">
  <div class="containerPhotos">
    <img :src="imageUrl1" alt="Kubotalogo image" class="img_Kubotalogo">
    <img :src="imageUrl2" alt="sprinterlogo image" class="img_sprinterlogo">
    <img :src="imageUrl3" alt="yanmarlogo image" class="img_yanmarlogo">
  </div>
  
  <div class="containerButtons"> 
    <router-link to="/productos" class="button-top">Productos</router-link>
    <router-link to="/quienes somos" class="button">Quienes Somos</router-link>
    <router-link to="/contacto" class="button-bottom">Contacto</router-link>
  </div>
  
  <img :src="imageUrl4" alt="delivery image" class="img_delivery" width="300" height="300">
  <button style="color:red;" class="buttonDelivery">
    <a class="link" :href="'tel:' + '(33) 2255 6677'"  style="text-decoration:none"> Linea Directa (33) 2255 6677 </a>
  </button>
  
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String,
    imageUrl: String,
    imageUrl1: String,
    imageUrl2: String,
    imageUrl3: String,
    imageUrl4: String
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


  .img_Kubotalogo{
    position: absolute;
    right: 0;
    top: 0;
    padding-top: 11%;
    padding-right: 3%;
  }

  .img_sprinterlogo{
    position: absolute;
    right: 0;
    top: 0;
    padding-top: 26%;
    padding-right: 3%;
  }

  .img_yanmarlogo{
    position: absolute;
    right: 0;
    top: 0;
    padding-top: 16%;
    padding-right: 3%;
  }

  .img_delivery{
    position: absolute;
    left: 0;
    top: 0;
    padding-top: 39%;
    padding-left: 8%;
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

  .buttonDelivery {
  display: inline-block;
  width: 700px;
  position: absolute;
  top: 0;
  left: 0;
  font-weight: bold;
  border: none;
  background-color: transparent;
  margin-top: 34%;
  margin-left: 6%;
  font-size: 100px;
  cursor: pointer;
  text-decoration: none;
}

.link { 
  color: #FF0000; 
  }
</style>