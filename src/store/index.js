import {defineStore} from "pinia";

export const useMainStore = defineStore('main', {
    state: () => ({
        favs: [],
        cart: [],
        modalProduct: null,
    }),
    persist: {
        enabled: true,
    },
})
