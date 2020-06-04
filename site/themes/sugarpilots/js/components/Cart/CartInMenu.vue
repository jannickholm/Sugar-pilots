<template>
  <div
    :class="['cart', { 'products-in-cart': currentCart.length > 0 }]"
    :style="`--product-count: ${currentCart.length}`"
  >
    <span data-feather="shopping-bag"></span>

    <div class="product-count" v-if="currentCart.length > 0">
      <p>{{ currentCart.length }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapGetters({
      currentCart: "cart/currentCart"
    }),
  },
};
</script>

<style lang="scss">
.cart {
  position: relative;
}
.product-count {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: pink;
  border: 2px solid white;

  p {
    text-align: center;
    font-size: 70%;
    font-weight: 900;
  }
}
</style>
