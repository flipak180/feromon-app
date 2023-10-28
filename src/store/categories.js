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
        fetchCategories(place) {
            if (this.categories.length) {
                return;
            }
            return fetch(`${BASE_URL}/api/categories?place=${place}`)
                .then(r => r.json())
                .then(data => {
                    this.categories = data.filter(cat => !cat.parent_id || cat.total_products)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
})
