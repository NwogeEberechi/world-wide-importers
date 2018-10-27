<template>
  <div class="home">
    <div id="slide">
      <b-carousel id="carousel1"
        style="text-shadow: 1px 1px 2px #333;"
        controls
        indicators
        background=""
        :interval="4000"
        v-model="slide"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >
        <b-carousel-slide v-for="slide in slideProducts" :key="slide.name">
          <img slot="img" class="d-block"
            :src="slide.imagelink">
            <h1>{{slide.name}}!</h1>
      </b-carousel-slide>
      <!--
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100"
          src="https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babybib.png"
          alt="image slot">
          <h1>Hello world!</h1>
      </b-carousel-slide> -->
      </b-carousel>
    </div>
    <div class="action">
      <router-link to="/products"><a class="btn">Shop now!</a></router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Axios from "axios";
import { mapState } from 'vuex';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: "home",
  data(){
    return {
      // carousel
      slide: 0,
      sliding: null,
      slideProducts: [],
      // fetched data
      data: [],
      items: [],
      products:[],
      subcategories: [],
      category: this.$route.query.category,
    }
  },
  created(){
    Axios.get('https://webmppcapstone.blob.core.windows.net/data/itemsdata.json')
      .then(res => {
        this.data = res.data
        this.$store.commit('allProducts', this.data);
        this.data.forEach((category, index) => {
          this.subcategories.push(category.subcategories);
        });
        this.subcategories.forEach((item) => {
          for (let key in item) {
            this.items.push(item[key]);
          }
        });
        this.items.forEach((item) => {
          for (let key in item.items) {
            this.products.push(item.items[key]);
          }
        });
        this.$store.commit('productArray', this.products);
        this.$store.commit('filterProducts', this.products);
        this.slideProducts = this.products.slice(73, 80)
        })
      .catch(error => console.log(error))
      .then(() => console.log(this.products))

      
  },
  components: {
    Carousel,
    Slide
  },
  computed:{
    ...mapState([
      'cart',
      'cartTotal'
    ])
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
};
</script>

<style scoped>
.action{
  width: 100px;
  margin: 100px auto;
}
.action a{
    color: #eee;
    background-color: #521751;
}
img{
  vertical-align: middle;
  width: 350px;
  height: 350px;
  margin: auto
}
a.carousel-control-prev, a.carousel-control-next {
  background-color: #000;
}
</style>

