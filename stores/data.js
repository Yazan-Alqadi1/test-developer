import { defineStore } from "pinia";

export const useDataStore = defineStore("dataWebsite", {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      cart: null,
    };
  },
  getters: {
    getCart() {
      return this.cart;
    },
  },
  actions: {
    updateCart(newCart) {
      this.cart = newCart;
    },
  },
  persist: true,
});
