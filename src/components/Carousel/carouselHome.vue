<template>
  <v-carousel  cycle height="580" :parallax-depth="0.5" class="custom-carousel">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" :parallax="parallax" class="custom-carousel-item">
      <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="transparent">
            <img :src="item.src" class="custom-carousel-item-image">
            <v-card-subtitle class="text-center">{{ item.marca }}</v-card-subtitle>
            <v-card-title>
              <h2 class="text-center">{{ item.description }}</h2>
            </v-card-title>
            <v-card-text class="text-center">{{ item.code }}</v-card-text>
            <v-card-actions class="custom-carousel-item-actions">
              <h3>{{ item.price }}</h3>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    parallax: true,
    items: [
      {
        src: require('@/assets/img1.png'),
        description: 'Lorem ipsum dolor sit amet. ',
        price: '$10',
        marca: 'ejemploMarca',
        code: 'Numero de parte: #001'
      },
      {
        src: require('@/assets/img2.png'),
        description: 'Lorem ipsum dolor sit amet.',
        price: '$20',
        marca: 'ejemploMarca',
        code: 'Numero de parte: #002'
      },
      {
        src: require('@/assets/img6.png'),
        description: 'Lorem ipsum dolor sit amet.',
        price: '$30',
        marca: 'ejemploMarca',
        code: 'Numero de parte: #003'
      },
      {
        src: require('@/assets/img4.png'),
        description: 'Lorem ipsum dolor sit amet.',
        price: '$40',
        marca: 'ejemploMarca',
        code: 'Numero de parte: #004'
      },
      {
        src: require('@/assets/img5.png'),
        description: 'Lorem ipsum dolor sit amet.',
        price: '$50',
        marca: 'ejemploMarca',
        code: 'Numero de parte: #005'
      }
    ]
  })
}
</script>

<style scoped>
.custom-carousel-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 20px;
  text-align: center;
}

.custom-carousel-item-image {
  max-height: 300px;
  max-width: 100%;
  object-fit: contain;
  margin-bottom: 20px;
}

.custom-carousel-item .text-center {
  text-align: center;
  white-space: normal ;
}

.custom-carousel {
  border-radius: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background-color: #666666;
  background-image: linear-gradient(180deg, rgba(102,102,102,1) 0%, rgba(255,255,255,0) 100%), url('@/assets/fondoCarousel.png');
}

.custom-carousel-item-actions {
  position: absolute;
  bottom: 10px;
  left: 10px; /* cambia este valor para ajustar la posición del botón izquierdo */
  right: 10px; /* cambia este valor para ajustar la posición del botón derecho */
}
</style>