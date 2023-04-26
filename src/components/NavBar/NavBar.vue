<template>

  <meta name="viewport" content="width=device-width, user-scalable=no,
  initial-scale=1.0, maximun-scale=1.0, minimun-scale=1.0">
  <img :src="imageUrl" alt="" class="img_logosos">
  <div class="containerPhotos">
    <img :src="imageUrl1" alt="" class="img_Kubotalogo">
    <img :src="imageUrl2" alt="" class="img_sprinterlogo">
    <img :src="imageUrl3" alt="" class="img_yanmarlogo">
  </div>

  <div class="containerButtons">
    <router-link to="/productos" class="button-top">Productos</router-link>
    <router-link to="/quienes-somos" class="button" >Quienes Somos </router-link>
    <router-link to="/contacto" class="button-bottom">Contacto</router-link>
  </div>

  <img :src="imageUrl4" alt="" class="img_delivery">
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

<style>
  .img_logosos{
    position: absolute; 
    top: 0; 
    left: 0; 
    max-width: 19%; 
    height: auto; 
    padding-top: 5%; 
    padding-left: 5%; 
  }

  .img_Kubotalogo{
    position: absolute;
    right: 0;
    top: 0;
    height: auto;
    max-width: 12%;
    padding-top: 8%;
    padding-right: 2%;
  }

  .img_sprinterlogo{
    position: absolute;
    right: 0;
    top: 0;
    max-width: 12%;
    padding-top: 26%;
    padding-right: 2%;
  }

  .img_yanmarlogo{
    position: absolute;
    right: 0;
    top: 0;
    max-width: 12%;
    padding-top: 14%;
    padding-right: 2%;
  }

  .img_delivery{
    position: absolute;
    left: 0;
    top: 0;
    height: auto;
    max-width: 8%;
    padding-top: 36%;
    padding-left: 8%;
  }
 

  .button {
    font-weight: bold;
    font-size: 2.4vw;
    position: absolute;
    top: 18vw;
    left: 4.5vw;
    margin-left: 1vw;
    margin-right: 30vw;
    display: inline-block;
    background-color: white;
    color: rgb(235, 11, 11);
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .button-top {
    width: 19%;
    font-weight: bold;
    font-size: 2.4vw;
    position: absolute;
    top: 14vw;
    left: 5vw;
    display: inline-block;
    background-color: white;
    color: rgb(235, 11, 11);
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .button-bottom {
    width: 15%;
    font-weight: bold;
    font-size: 2.4vw;
    position: absolute;
    top: 17vw;
    left: 5vw;
    display: inline-block;
    margin-top: 5vw;
    padding: 0vw 2vw;
    background-color: white;
    color: rgb(235, 11, 11);
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .buttonDelivery {
    display: inline-block;
    width: 20vw;
    position: absolute;
    left: 0;
    font-weight: bold;
    border: none;
    background-color: transparent;
    margin-top: 0%;
    margin-left: 3%;
    font-size: 2vw;
    cursor: pointer;
    text-decoration: none;
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

  .link { 
    color: rgb(235, 11, 11); 
  }

  @media (max-width: 767px) {
  .container {
    width: 100%;
    padding: 0 10px;
  }
}

  /* Media query para pantallas de hasta 1024px de ancho (tablets y celulares en posición horizontal) */
  @media only screen and (max-width: 1024px) {
    .container {
      width: 90%;
      padding: 0 10px;
    }
    .img_logosos{
    position: absolute; 
    top: 0; 
    left: 0; 
    max-width: 19%; 
    height: auto; 
    padding-top: 35%; 
    padding-left: 5%; 
  }

  .img_Kubotalogo{
    height: auto;
    max-width: 13%;
    padding-top: 40%;
    padding-right: 2%;
  }

  .img_sprinterlogo{
    height: auto;
    max-width: 14%;
    padding-top: 58%;
    padding-right: 2%;
  }

  .img_yanmarlogo{
     height: auto;
     max-width: 13%;
    padding-top: 47%;
    padding-right: 2%;
  }

  .img_delivery{
    height: auto;
    max-width: 8%;
    padding-top: 81%;
    padding-left: 9%;
  }
 

  .button {
    margin-top: 13.5em;
  }

  .button-top {
    margin-top: 13em;
  }

  .button-bottom {
    margin-top: 16em;
  }

  .buttonDelivery {
    top: 45em;
    left: 0.5em;
  }

  }

  /* Media queries for screens larger than 992px */
  @media (min-width: 992px) {
    .container {
      width: 80%;
      padding: 0 10px;
    }
  }
</style>
