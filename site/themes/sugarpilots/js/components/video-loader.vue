<template>
  <span class="video-placeholder"></span>
  <span v-if="loadVideo" class="video">
      <div class='embed-container'>
         <iframe :src='videoLink' frameborder='0' allowfullscreen></iframe>
       </div>
  </span>
</template>

<script>
export default {
    props: {
        videoLink: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            loadVideo: false
        }
    }

}
</script>

<style>

</style>