<template>
  <Vueinstagram :token="accessToken" :count="totalPost">
    <template v-slot="{ posts, errorMsg }">
        <div class="instagram-feed">
          <article v-for="post in posts" :key="post.id" class="post">
            <a :href="post.link" target="_blank" rel="noopener">
              <button class="btn">Se på instagram</button>
              <img :src="post.images.low_resolution.url" alt="instagram" />
            </a>
          </article>
          <pre v-if="errorMsg">{{ errorMsg }}</pre>
        </div>
    </template>
  </Vueinstagram>
</template>

<script>
import Vueinstagram from "vue-instagram-feed";
export default {
  components: {
    Vueinstagram,
  },
  computed: {
      totalPost() {
          if(window.innerWidth >= 769) {
              return 8;
          } else {
              return 2;
          }
      }
  },
  data() {
    return {
      accessToken: "14467845720.bd54f22.f435671052e04a44beba7fba40e78597",
    };
  },
};
</script>

<style lang="scss">

</style>
