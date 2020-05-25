<template>
  <div class="slider position-relative">
    <div class="prev expand-cursor">
      <span data-feather="chevron-left"></span>
    </div>
    <slick ref="slick" :options="slickOptions">
      <slot name="products" />
    </slick>
    <div class="next expand-cursor">
      <span data-feather="chevron-right"></span>
    </div>
    </div>
</template>

<script>
import axios from "axios";
import Slick from "vue-slick";
export default {
  components: { Slick },
  data() {
    return {
    };
  },
  created() {
  },
  computed: {
    slickOptions() {
      if (window.innerWidth >= 1024) {
        return {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: false,
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
  }
};
</script>

<style></style>
