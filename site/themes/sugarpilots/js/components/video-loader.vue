<template>
  <div class="video-container">
    <div class="video-placeholder-container" @click="loadVideo = true">
    <div class="video-placeholder-overlay" :style="`background-color: ${overlayColor}`"></div>
      <img
        v-if="!loadVideo"
        :src="placeholderImage"
        class="video-placeholder"
        alt=""
      />
    </div>
    <div v-if="loadVideo" class="video">
      <div class="embed-container">
        <iframe
          :src="`https://www.youtube.com/embed/${getYoutubeId(videoLink)}`"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoLink: {
      type: String,
      required: true,
    },
    overlayColor: {
      type: String,
      required: true,
    },
  },
  computed: {
    placeholderImage() {
      return (
        "https://i.ytimg.com/vi/" +
        this.getYoutubeId(this.videoLink) +
        "/maxresdefault.jpg"
      );
    },
  },
  data() {
    return {
      loadVideo: false,
    };
  },
  methods: {
    getYoutubeId(url) {
      const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      const match = url.match(regExp);
      return match && match[7].length === 11 ? match[7] : false;
    },
  },
};
</script>

<style></style>
