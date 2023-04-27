<template>
  <v-carousel cycle height="1200" hide-delimiter-background show-arrows="hover" >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <div class="d-flex fill-height justify-center align-center" >
          <div class="text-h2" >
            <img :src="slide.imageUrl" :alt="slide.description" style="object-fit: contain; max-height: 580px; max-width: 480px;"/>
            <p>{{ slide.description }}</p>
            <p>{{ slide.price }}</p>
            <p>{{ slide.marca }}</p>
            <p>{{ slide.parte }}</p>
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'CarouselComponent',
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        {imageUrl: require('@/assets/img1.png'), description: 'Description 1', price: '$10', marca: 'ejemploMarca', parte: 'Numero de parte: #001'},
        {imageUrl: require('@/assets/img2.png'), description: 'Description 2', price: '$20', marca: 'ejemploMarca', parte: 'Numero de parte: #002'},
        {imageUrl: require('@/assets/img3.png'), description: 'Description 3', price: '$30', marca: 'ejemploMarca', parte: 'Numero de parte: #003'},
        {imageUrl: require('@/assets/img4.png'), description: 'Description 4', price: '$40', marca: 'ejemploMarca', parte: 'Numero de parte: #004'},
        {imageUrl: require('@/assets/img5.png'), description: 'Description 5', price: '$50', marca: 'ejemploMarca', parte: 'Numero de parte: #005'},
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.text-h2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse; /* Revertir el orden de flex-wrap */
}

.text-h2 p {
  margin: 0;
  flex-basis: 50%; /* Ancho del 50% para los párrafos */
  padding-bottom: 5%;
}

.text-h2 img {
  margin-bottom: 8%;
  max-width: 80%; /* Ancho máximo de la imagen */
  margin-left: 81vh; /* Margen izquierdo para separar la imagen del texto */
  order: 2; /* Cambiar el orden de la imagen */
}

.text-h2 .content {
  display: flex;
  flex-direction: column;
}

.text-h2 .content p {
  margin-bottom: 1rem;
}

</style>