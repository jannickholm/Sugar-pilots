<template>
  <div
    :class="['menu-toggle hide--medium--up', { 'is-active': menuOpen }]"
    @click="toggleMenu"
  ></div>
</template>

<script>
import lottie from "lottie-web";
export default {
  name: "MenuNavigationToggle",
  data() {
    return {
      menuOpen: false,
    };
  },
  mounted() {
    if (this.menuOpen) {
      document
        .querySelector(".content")
        .addEventListener("click", this.toggleMenu);
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      document.querySelector("body").classList.toggle("no-scroll");
    },
  },
};
</script>

<style scoped></style>
