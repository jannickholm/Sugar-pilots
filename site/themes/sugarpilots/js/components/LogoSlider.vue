<template>
  <div class="wrapper narrow text-center logo-slider">
    <h4>{{ title }}</h4>
    <slick ref="slick" :options="slickOptions">
      <slot name="logos" />
    </slick>
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
        };
      } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
          return {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          cssEase: "ease-in-out",
        };
      } else if (window.innerWidth < 768 && window.innerWidth >= 500) {
          return {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          cssEase: "ease-in-out",
        };
      } else if (window.innerWidth < 500) {
          return {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          cssEase: "ease-in-out",
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
