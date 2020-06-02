<template>
  <div class="wrapper configuration">
    <ConfigurationOptions 
    :sizes="options.sizes" 
    :amounts="options.predefined_amounts" 
    :colors="options.colors" 
    :flavors="options.flavors"
    :min-order="options.min_order" />
    <ConfigurationSummary />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import axios from 'axios';
export default {
  name: "Configuration",
  data() {
    return {
      options: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    start() {
      this.setCurrentStep(2);
    },
    fetchData() {
      axios.get('/!/Fetch/page/design-din-egen-slikkepind').then((response) => {
        this.options = response.data.data;
      })
    }
  },
};
</script>

<style></style>
