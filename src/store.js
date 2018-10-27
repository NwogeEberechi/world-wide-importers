import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cart: [],
    cartTotal: 0,
    filteredProducts: [],
    allProducts: [],
    productArray: []
  },
  getters: {
    filteredProducts(state) {
      return state.filteredProducts;
    },
    allProducts(state) {
      return state.allProducts;
    },
    productArray(state) {
      return state.productArray;
    },
    cart(state) {
      return state.cart;
    },
    cartTotal(state) {
      let total = 0;
      state.cart.forEach(item => {
        total += item.product.price * item.quantity;
      });
      return total;
    },
    taxRate(state, getters) {
      return (getters.cartTotal * 10) / 100;
    },
    getCartItem: state => cartItem => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].product.name == cartItem.name) {
          return state.cart[i];
        }
      }
      return null;
    }
  },
  mutations: {
    filterProducts(state, payload) {
      state.filteredProducts = payload;
    },
    allProducts(state, payload) {
      state.allProducts = payload;
    },
    productArray(state, payload){
      state.productArray = payload;
    },
    addToCart(state, payload) {
      state.cart.push(payload);
    },
    increaseItemQuantity(state, payload) {
      // payload is a reference to cart, modifying it modifies cart as well
      payload.quantity++;
    },
    decraseItemQuantity(state, payload) {
      payload.quantity--;
    },
    deleteCartItem(state, payload) {
      let index = state.cart.indexOf(payload);
      if (index != -1) {
        state.cart.splice(index, 1);
      }
    }
  },
  actions: {
    addToCart({ commit, getters }, payload) {
      let cartItem = getters.getCartItem(payload.product);
      if (cartItem != null) {
        commit("increaseItemQuantity", cartItem);
        Vue.toasted.global.success(payload);
      } else {
        commit("addToCart", payload);
        Vue.toasted.global.success(payload);
      }
    }
  }
});
