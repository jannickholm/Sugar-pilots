export const name = 'cart';

export default {
    namespaced: true,
    state: {
       currentCart: [
       ],
       totalPrice: 0
    },
    mutations: {
        addToCart(state, product) {
            state.currentCart.push(product);
        },
        setTotalPrice(state, totalPrice) {
            state.totalPrice = totalPrice
        }
    },
    getters: {
        currentCart: state => state.currentCart,
        totalPrice: state => state.totalPrice
    }
};
