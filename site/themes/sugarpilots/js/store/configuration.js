export const name = 'configuration';

export default {
    namespaced: true,
    state: {
       selectedSize: null,
       amount: null,
       selectedColorName: null,
       selectedColorCode: null,
       priceForEach: null,
       selectedFlavor: null,
       selectedParty: null,
       selectedText: null,
       selectedDate: null
    },
    mutations: {
        setSelectedSize(state, size) {
            state.selectedSize = size;
        },
        setPriceForEach(state, price) {
            state.priceForEach = price
        },
        setAmount(state, amount) {
            state.amount = amount
        },
        setColorName(state, color) {
            state.selectedColorName = color
        },
        setColorCode(state, color) {
            state.selectedColorCode = color
        },
        setFlavor(state, flavor) {
            state.selectedFlavor = flavor;
        },
        setSelectedText(state, text) {
            state.selectedText = text;
        },
        setDate(state, date) {
            state.selectedDate = date;
        }
    },
    getters: {
         selectedSize: state => state.selectedSize,
         priceForEach: state => state.priceForEach,
         amount: state => state.amount,
         selectedColorName: state => state.selectedColorName,
         selectedColorCode: state => state.selectedColorCode,
         selectedFlavor: state => state.selectedFlavor,
         selectedText: state => state.selectedText,
         selectedDate: state => state.selectedDate
    }
};
