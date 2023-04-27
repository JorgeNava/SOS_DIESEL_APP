<template>
  <div class="home">
    <HomeProduct msg="SOS DIESEL" :imageUrl="imageUrls.imagenTractor"/>
    <NavBar msg="SOS DIESEL" :imageUrls="imageUrls"/>
    <div class="mision">
      <h1>Mision y Vision</h1>
      <div class="container">
        <div class="image">
          <img src="@/assets/img_panel_testimonials.jpg" alt="" style="height: 60vh;">
        </div>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit. Integer bibendum erat augue, nec sollicitudin libero semper vitae. Sed ac elit eget nulla finibus hendrerit ac non lectus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit. Integer bibendum erat augue, nec sollicitudin libero semper vitae. Sed ac elit eget nulla finibus hendrerit ac non lectus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit. Integer bibendum erat augue, nec sollicitudin libero semper vitae. Sed ac elit eget nulla finibus hendrerit ac non lectus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit. Integer bibendum erat augue, nec sollicitudin libero semper vitae. Sed ac elit eget nulla finibus hendrerit ac non lectus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit. Integer bibendum erat augue, nec sollicitudin libero semper vitae. Sed ac elit eget nulla finibus hendrerit ac non lectus.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vitae nibh tristique vestibulum. Sed facilisis ipsum nec metus placerat, eget aliquet lectus blandit. Integer bibendum erat augue, nec sollicitudin libero semper vitae. Sed ac elit eget nulla finibus hendrerit ac non lectus.</p>
        </div>
      </div>
    </div>
    <div class="FotosRandom">
      <Carousel :slides="carouselImages" />
      <router-link :to="viewMoreUrl" class="ver-mas">Ver más</router-link>  
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel/Carousel.vue";
import HomeProduct from "@/components/HomeProduct/HomeProduct.vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import IMAGEN_TRACTOR from "@/assets/tractor.png";
import LOGOSOS from "@/assets/logosos.png";
import KUBOTALOGO from "@/assets/kubotalogo.png";
import SPRINTERLOGO from "@/assets/sprinterlogo.png";
import YANMARLOGO from "@/assets/yanmarlogo.png";
import DELIVERY from "@/assets/delivery.png";
import IMG1 from '@/assets/img1.png';
import IMG2 from '@/assets/img2.png';
import IMG3 from '@/assets/img3.png';
import IMG4 from '@/assets/img4.png';
import IMG5 from '@/assets/img5.png';
import IMG6 from '@/assets/img6.png';
import IMG7 from '@/assets/img7.png';
import IMG8 from '@/assets/img8.png';
import IMG9 from '@/assets/img9.png';
import IMG10 from '@/assets/img10.png';
import IMG11 from '@/assets/img11.png';
import IMG12 from '@/assets/img12.png';
import IMG13 from '@/assets/img13.png';
import IMG14 from '@/assets/img14.png';
import IMG15 from '@/assets/img15.png';
import IMG16 from '@/assets/img16.png';
import IMG17 from '@/assets/img17.png';
import IMG18 from '@/assets/img18.png';
import IMG19 from '@/assets/img19.png';
import IMG20 from '@/assets/img20.png';
import IMG21 from '@/assets/img21.png';
import IMG22 from '@/assets/img22.png';
import IMG23 from '@/assets/img23.png';
import IMG24 from '@/assets/img24.png';
import IMG25 from '@/assets/img25.png';
import IMG26 from '@/assets/img26.png';
import IMG27 from '@/assets/img27.png';
import IMG28 from '@/assets/img28.png';
import IMG29 from '@/assets/img29.png';
import IMG30 from '@/assets/img30.png';

export default {
  name: "HomeView",
  props: {
    msg: String
  },
  data() {
    return {
      imageUrls: {
        imagenTractor: IMAGEN_TRACTOR,
        logosos: LOGOSOS,
        Kubotalogo: KUBOTALOGO,
        sprinterlogo: SPRINTERLOGO,
        yanmarlogo: YANMARLOGO,
        delivery: DELIVERY,
        img1: IMG1,
        img2: IMG2,
        img3: IMG3,
        img4: IMG4,
        img5: IMG5,
        img6: IMG6,
        img7: IMG7,
        img8: IMG8,
        img9: IMG9,
        img10: IMG10,
        img11: IMG11,
        img12: IMG12,
        img13: IMG13,
        img14: IMG14,
        img15: IMG15,
        img16: IMG16,
        img17: IMG17,
        img18: IMG18,
        img19: IMG19,
        IMG20: IMG20,
        img21: IMG21,
        img22: IMG22,
        img23: IMG23,
        img24: IMG24,
        img25: IMG25,
        img26: IMG26,
        img27: IMG27,
        img28: IMG28,
        img29: IMG29,
        img30: IMG30
      },
      carouselImages: [],
      viewMoreUrl: "/productos"
    };
  },
  components: { HomeProduct, NavBar, Carousel }
};
</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;
  }

  .FotosRandom {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
  }

  .ver-mas {
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff0d00;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .ver-mas:hover {
  background-color: #1063bc;
  color: #fff;
}

.container {
  display: flex;
  justify-content: center; /* centrar horizontalmente */
  align-items: flex-start; /* alinear arriba */
}

.content {
  margin-top: 15vh;
  max-width: 50%;
  padding-left: 20vh; /* separación del texto con la imagen */
}

.image {
  width: 50%;
  margin-top: 15vh;
  margin-left: 50vh; /* separación de la imagen con el texto */
  box-sizing: border-box;
}

.mision {
  height: 100vh;
  background: whitesmoke;
}

h1 {
  padding-top: 2%;
 
}

.mision {
  height: 100vh;
}

</style>