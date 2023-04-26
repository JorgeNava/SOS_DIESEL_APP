<template>
    <v-app>
        <v-container fluid>
            <v-carousel hide-delimiters>
                <v-carousel-item v-for="(item, index) in items" :key="index">
                    <v-card class="elevation-3">
                        <v-img :src="item.image" height="200px" aspect-ratio="1">
                            <v-expand-transition>
                                <v-card-title class="white--text pa-3" v-if="item.name">{{ item.name }}</v-card-title>
                            </v-expand-transition>
                        </v-img>
                        <v-card-subtitle v-if="item.description">{{ item.description }}</v-card-subtitle>
                    </v-card>
                </v-carousel-item>
            </v-carousel>
        </v-container>
    </v-app>
</template>
  
<script>
  export default {
    name: "CatalogoProductos",
    data() {
      return {
        items: [
          {
            name: "Item 1",
            image: "https://picsum.photos/200",
            description: "This is a description of Item 1"
          },
          {
            name: "Item 2",
            image: "https://picsum.photos/201",
            description: "This is a description of Item 2"
          },
          {
            name: "Item 3",
            image: "https://picsum.photos/202",
            description: "This is a description of Item 3"
          },
          {
            name: "Item 4",
            image: "https://picsum.photos/203",
            description: "This is a description of Item 4"
          },
          {
            name: "Item 5",
            image: "https://picsum.photos/204",
            description: "This is a description of Item 5"
          }
        ]
      };
    }
  };
</script>
  
<style scoped>
  .v-card {
    border-radius: 0;
    background-color: #fff;
    box-shadow: none;
    border: 1px solid #eee;
    margin-bottom: 20px;
  }
  .v-card__subtitle {
    color: #888;
    font-size: 14px;
    margin-top: 10px;
  }
  .v-card__subtitle::before {
    content: "-";
    margin-right: 10px;
  }
  .v-card__title {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    margin: 0;
  }
  .v-card__img {
    overflow: hidden;
    position: relative;
    background-color: #eee;
  }
  .v-card__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>