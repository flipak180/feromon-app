import {defineStore} from "pinia";
import {BASE_URL} from "@/plugins/api.js";

export const useCategoriesStore = defineStore("categories", {
    state: () => ({
        categories: [],
        activeCategoryId: 1,
    }),
    getters: {
        getCategories(state){
            return state.categories
        }
    },
    actions: {
        fetchCategories() {
            if (this.categories.length) {
                return;
            }
            return fetch(`${BASE_URL}/api/categories`)
                .then(r => r.json())
                .then(data => {
                    this.categories = data
                    console.log('Data is fetched.')
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
})
