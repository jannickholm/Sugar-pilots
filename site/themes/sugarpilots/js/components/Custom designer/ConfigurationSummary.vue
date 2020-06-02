<template>
  <div class="configuration--summary">
    <div class="inner-content">
      <h1
        :class="{
          'd-flex align-items-center justify-content-between': step === 2,
        }"
      >
        Oversigt
        <span class="helper-label u-cursor-pointer" v-if="step === 2" @click="step = 1"
          >Rediger</span
        >
      </h1>
      <ul class="summary-list">
        <li class="list-item size">
          <p class="title">Størrelse:</p>
          <p class="value" v-if="!selectedSize">{{ notSelectedText }}</p>
          <p class="value" v-else>{{ selectedSize }}</p>
        </li>
        <li class="list-item size">
          <p class="title">Antal:</p>
          <p class="value" v-if="!amount">{{ notSelectedText }}</p>
          <p class="value" v-else>{{ amount }}</p>
        </li>
        <li class="list-item size">
          <p class="title">Farve:</p>
          <p class="value" v-if="!selectedColor">{{ notSelectedText }}</p>
          <p
            class="value color-value"
            :style="`--bg-color: ${selectedColorCode}`"
            v-else
          >
            {{ selectedColor }}
          </p>
        </li>
        <li class="list-item size">
          <p class="title">Smag:</p>
          <p class="value" v-if="!selectedFlavor">{{ notSelectedText }}</p>
          <p class="value" v-else>{{ selectedFlavor }}</p>
        </li>
        <li class="list-item size">
          <p class="title">Tekst:</p>
          <p class="value" v-if="!text">{{ notSelectedText }}</p>
          <p class="value" v-else>{{ text }}</p>
        </li>
        <li class="list-item size">
          <p class="title">Ønsket leveringsdato:</p>
          <p class="value" v-if="!date">{{ notSelectedText }}</p>
          <p class="value" v-else>{{ date }}</p>
        </li>
      </ul>
      <h6 class="text-center mt-5">
        Pris i alt: {{ Number(price) * Number(amount) }} kr.
      </h6>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      notSelectedText: "Ikke valgt",
      step: 1,
    };
  },
  computed: {
    ...mapGetters({
      selectedSize: "configuration/selectedSize",
      amount: "configuration/amount",
      selectedColor: "configuration/selectedColorName",
      selectedColorCode: "configuration/selectedColorCode",
      selectedFlavor: "configuration/selectedFlavor",
      price: "configuration/priceForEach",
      text: "configuration/selectedText",
      date: "configuration/selectedDate",
    }),
  },
  watch: {
    step() {
      this.$eventBus.$emit("change-step", this.step);
    },
  },
  mounted() {
    this.$eventBus.$on("change-step", (step) => {
      this.step = step;
    });
  },
  methods: {},
};
</script>

<style></style>
