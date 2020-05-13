<template>
  <div class="animation" ref="animationContainer"></div>
</template>

<script>
import lottie from 'lottie-web';
export default {
    name: 'Animation',
    props: {
        animation: {
            type: String,
            required: true
        }
    },
    mounted() {
        this.initializeAnimation()
    },
    methods: {
        initializeAnimation () {
            lottie.loadAnimation({
                container: this.$refs.animationContainer, // the dom element
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: this.animation,
                rendererSettings: {
                    scaleMode: 'noScale',
                    clearCanvas: false,
                    progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
                    hideOnTransparent: true // Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
                }
            });
        }
    }

}
</script>

<style>

</style>