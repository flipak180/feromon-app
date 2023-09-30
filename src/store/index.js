import {defineStore} from "pinia";

export const useMainStore = defineStore('main', {
    state: () => ({
        favs: [],
        cart: [],
    }),
    persist: {
        enabled: true,
    },
})
