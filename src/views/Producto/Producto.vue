<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="(item, index) in items"
          :key="index"
          cols="6"
          md="4"
          lg="3"
          class="d-flex"
          >
          <v-img 
            :src="item.image" 
            contain 
            @mouseover="showDescription(index)"
            @mouseleave="hideDescription(index)"
            :style="{ opacity: item.opacity }"
          />
          <div class="description" v-if="item.showDescription">
            <div>{{ item.description }}</div>
          </div>
          </v-col>
      </v-row>
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
          image: require('@/assets/img1.png'),
          description: "This is a description of Item 1. Price: 100$",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 2",
          image: require('@/assets/img2.png'),
          description: "This is a description of Item 2",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 3",
          image: require('@/assets/img3.png'),
          description: "This is a description of Item 3",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 4",
          image: require('@/assets/img4.png'),
          description: "This is a description of Item 4",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 5",
          image: require('@/assets/img5.png'),
          description: "This is a description of Item 5",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 6",
          image: require('@/assets/img6.png'),
          description: "This is a description of Item 6",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 7",
          image: require('@/assets/img7.png'),
          description: "This is a description of Item 7",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 8",
          image: require('@/assets/img8.png'),
          description: "This is a description of Item 8",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 9",
          image: require('@/assets/img9.png'),
          description: "This is a description of Item 9",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 10",
          image: require('@/assets/img10.png'),
          description: "This is a description of Item 10",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 11",
          image: require('@/assets/img11.png'),
          description: "This is a description of Item 11",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 12",
          image: require('@/assets/img12.png'),
          description: "This is a description of Item 12",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 13",
          image: require('@/assets/img13.png'),
          description: "This is a description of Item 13",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 14",
          image: require('@/assets/img14.png'),
          description: "This is a description of Item 14",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 15",
          image: require('@/assets/img15.png'),
          description: "This is a description of Item 15",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 16",
          image: require('@/assets/img16.png'),
          description: "This is a description of Item 16",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 17",
          image: require('@/assets/img17.png'),
          description: "This is a description of Item 17",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 18",
          image: require('@/assets/img18.png'),
          description: "This is a description of Item 18",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 19",
          image: require('@/assets/img19.png'),
          description: "This is a description of Item 19",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 20",
          image: require('@/assets/img20.png'),
          description: "This is a description of Item 20",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 21",
          image: require('@/assets/img21.png'),
          description: "This is a description of Item 21",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 22",
          image: require('@/assets/img22.png'),
          description: "This is a description of Item 22",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 23",
          image: require('@/assets/img23.png'),
          description: "This is a description of Item 23",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 24",
          image: require('@/assets/img24.png'),
          description: "This is a description of Item 24",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 25",
          image: require('@/assets/img25.png'),
          description: "This is a description of Item 25",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 26",
          image: require('@/assets/img26.png'),
          description: "This is a description of Item 26",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 27",
          image: require('@/assets/img27.png'),
          description: "This is a description of Item 27",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 28",
          image: require('@/assets/img28.png'),
          description: "This is a description of Item 28",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 29",
          image: require('@/assets/img29.png'),
          description: "This is a description of Item 29",
          opacity: 1,
          showDescription: false
        },
        {
          name: "Item 30",
          image: require('@/assets/img30.png'),
          description: "This is a description of Item 30",
          opacity: 1,
          showDescription: false
        },
      ]
    };
  },
  methods: {
    showDescription(index) {
      this.items[index].opacity = 0.5;
      this.items[index].showDescription = true;
    },
    hideDescription(index) {
      this.items[index].opacity = 1;
      this.items[index].showDescription = false;
    }
  }
};
</script>

<style scoped>
.v-col {
  padding: 5px;
}

.description {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 20px;
  padding: 10px;
  z-index: 2;
}

.v-image__image {
  z-index: 1;
}
</style>