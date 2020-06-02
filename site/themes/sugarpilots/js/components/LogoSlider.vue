<template>
  <div class="wrapper narrow text-center logo-slider " data-aos="fade-up" data-aos-duration="1000">
    <h4>{{ title }}</h4>
    <div class="slider position-relative">
    <div class="prev expand-cursor">
      <span data-feather="chevron-left"></span>
    </div>
    <slick ref="slick" :options="slickOptions">
      <slot name="logos" />
    </slick>
    <div class="next expand-cursor">
      <span data-feather="chevron-right"></span>
    </div>
    </div>
  </div>
</template>

<script>
import Slick from "vue-slick";
export default {
  components: { Slick },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    slickOptions() {
      if (window.innerWidth >= 1024) {
        return {
          slidesToShow: 4,
          slidesToScroll: 4,
          autoplay: true,
          cssEase: "ease-in-out",
          nextArrow: ".next",
          prevArrow: ".prev"
        };
      } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        return {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          cssEase: "ease-in-out",
          nextArrow: ".next",
          prevArrow: ".prev"
        };
      } else if (window.innerWidth < 768 && window.innerWidth >= 500) {
        return {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          cssEase: "ease-in-out",
          nextArrow: ".next",
          prevArrow: ".prev"
        };
      } else if (window.innerWidth < 500) {
        return {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          cssEase: "ease-in-out",
          nextArrow: ".next",
          prevArrow: ".prev"
        };
      }
    },
  },
};
</script>

<style scoped>
h4 {
  max-width: 800px;
  margin: auto;
  margin-bottom: 2rem;
}
</style>
