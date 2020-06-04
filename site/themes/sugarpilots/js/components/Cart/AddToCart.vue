<template>
   <a class="btn " href="#" @click.prevent="addToCart">Tilføj til kurv</a>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
props: {
    productId: { type: String },
    productTitle: { type: String },
    productPrice: { type: Number },
    productCategory: { type: String },
},
computed: {
...mapGetters({
    currentCart: 'cart/currentCart'
})
},
methods: {
    ...mapMutations({
        addProductToCart: 'cart/addToCart'
    }),
    addToCart() {
        const product = {
            productId: this.productId,
            productTitle: this.productTitle,
            productPrice: this.productPrice,
            productCategory: this.productCategory,
            quantity: 1
        }
        this.addProductToCart(product);
    }
}
}
</script>

<style>

</style>