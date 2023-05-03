<template>
  <v-carousel cycle hide-delimiters show-arrows="hover" >
    <v-carousel-item class="w-100" v-for="(slide, i) in slides" :key="i" color="gray">
      <v-sheet class="carousel--sheet w-100 h-100">
        <v-card class="d-flex justify-center text-left h-75 carousel--card w-100" elevation="10">
          <div class="w-25 h-100">
            <v-card-item>
              <v-card-subtitle>{{ slide.marca }}</v-card-subtitle>
              <v-card-title>{{slide.code}}</v-card-title>
            </v-card-item>
            <v-card-text class="d-flex flex-column justify-space-between h-50">
              <p style="font-size: 18px;">{{ slide.description }}</p>
              <p class="mt-10">{{ slide.price }}</p>
            </v-card-text>
          </div>
          <div class="product--image--container">
            <img :src="slide.imageUrl" :alt="slide.description"/>
          </div>
          <div class="w-5 h-100 d-flex flex-column justify-content-between ml-3"></div>
        </v-card>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'carouselHome',
  data() {
    return {
      slides: [
        {imageUrl: require('@/assets/img1.png'), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit.', price: '$10', marca: 'ejemploMarca', code: 'Numero de parte: #001'},
        {imageUrl: require('@/assets/img2.png'), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit.', price: '$20', marca: 'ejemploMarca', code: 'Numero de parte: #002'},
        {imageUrl: require('@/assets/img3.png'), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit.', price: '$30', marca: 'ejemploMarca', code: 'Numero de parte: #003'},
        {imageUrl: require('@/assets/img4.png'), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit.', price: '$40', marca: 'ejemploMarca', code: 'Numero de parte: #004'},
        {imageUrl: require('@/assets/img5.png'), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit.', price: '$50', marca: 'ejemploMarca', code: 'Numero de parte: #005'},
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel--sheet{
  display: flex;
  align-items: center;
}

.carousel--card{
  border: 2px solid #E5E5E5;
  background-color: #FAFAFA;
  padding: 1%;
  display: flex;
  align-items: center;
}

.product--image--container{
  width: 14%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 10px #6e1c06;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}

.v-card__text p {
  font-size: 1.2rem;
}

.v-card__subtitle, .v-card__title {
  font-size: 1.3rem;
}
</style>