<template>
  <div class="slider position-relative">
    <div class="prev">
      <span data-feather="chevron-left"></span>
    </div>
    <slick ref="slick" :options="slickOptions">
        <div class="product-slide text-left" v-for="product in products" :key="product.id">
            <img :src="product.product_picture" alt="">
            <h5>{{ product.title }}</h5>
            <h6 class="product-category">{{ product.product_category }}, {{ product.pcs_number }} stk.</h6>
            <div class="price-tag">{{ product.price_tag }} kr.</div>
        </div>
    </slick>
    <div class="next">
      <span data-feather="chevron-right"></span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Slick from "vue-slick";
export default {
  components: { Slick },
  props: {
      currentCategory: {
          type: String,
          required: true
      } 
  },
  data() {
    return {
      loading: true,
      products: []
    };
  },
  created() {
    this.fetchProducts();
  },
  computed: {
    slickOptions() {
      if (window.innerWidth >= 1024) {
        return {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          cssEase: "ease-in-out",
          nextArrow: ".next",
          prevArrow: ".prev",
        };
      } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        return {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          cssEase: "ease-in-out",
          nextArrow: ".next",
          prevArrow: ".prev",
        };
      } else if (window.innerWidth < 768 && window.innerWidth >= 500) {
        return {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          cssEase: "ease-in-out",
          nextArrow: ".next",
          prevArrow: ".prev",
        };
      } else if (window.innerWidth < 500) {
        return {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          cssEase: "ease-in-out",
          nextArrow: ".next",
          prevArrow: ".prev",
        };
      }
    },
  },
  methods: {
    fetchProducts() {
      axios.get("/!/Fetch/collection/product").then((response) => {
        this.products = response.data.data;
      });
    },
  },
};
</script>

<style></style>
