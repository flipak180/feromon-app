import {defineStore} from "pinia";
import {BASE_URL} from "@/plugins/api.js";

const totalChildProducts = (categories, parentId) => {
    return categories.reduce((acc, cat) => acc + (cat.parent_id === parentId ? cat.total_products + totalChildProducts(categories, cat.id) : 0), 0);
}

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
                    //this.categories = data.filter(cat => totalChildProducts(data, cat.id))
                    //console.log(totalChildProducts(this.categories, 1));
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
})
