<template>
  <div :class="['categories-nav-mobile', { open: menuOpen }]">
    <div class="top" @click="menuOpen = !menuOpen">
      <span class="arrow-icon" data-feather="chevron-up"></span>
      <h6>Sortiment</h6>
    </div>
    <ul class="content">
      <li v-for="(category, index) in categories" :key="category.id">
        <a :href="`#${toSlug(category.title)}`"
          @click="menuOpen = !menuOpen">{{ category.title.replace("slikkepinde", "") }}
          <span>0{{ index + 1 }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    apiUrl: { type: String, required: true }
  },
  data() {
    return {
      categories: [],
      menuOpen: false,
    };
  },mounted() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      axios.get(this.apiUrl + "!/Fetch/collection/categories").then((response) => {
        this.categories = response.data.data;
      });
    },
    toSlug(str) {
      str = str.replace(/^\s+|\s+$/g, ""); // trim
      str = str.toLowerCase();

      // remove accents, swap ñ for n, etc
      let from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;ø";
      let to = "aaaaeeeeiiiioooouuuunc------o";
      for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
      }

      str = str
        .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-+/g, "-"); // collapse dashes

      return str;
    },
  },
};
</script>

<style lang="scss">
</style>
