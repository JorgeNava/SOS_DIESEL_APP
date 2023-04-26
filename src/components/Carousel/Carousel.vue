<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover" >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <div class="d-flex fill-height justify-center align-center" >
          <div class="text-h2" >
            <img :src="slide.imageUrl" :alt="slide.description" style="object-fit: contain; max-height: 250px;"/>
            <p>{{ slide.description }}</p>
            <p>{{ slide.price }}</p>
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
        {imageUrl: require('@/assets/img1.png'), description: 'Description 1', price: '$10'},
        {imageUrl: require('@/assets/img2.png'), description: 'Description 2', price: '$20'},
        {imageUrl: require('@/assets/img3.png'), description: 'Description 3', price: '$30'},
        {imageUrl: require('@/assets/img4.png'), description: 'Description 4', price: '$40'},
        {imageUrl: require('@/assets/img5.png'), description: 'Description 5', price: '$50'},
      ],
    }
  }
}
</script>
