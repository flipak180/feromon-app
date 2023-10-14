import {defineStore} from "pinia";
import {BASE_URL} from "@/plugins/api.js";
import {ref} from "vue";

export const useCategoriesStore = defineStore('categories', () => {
    const categories = ref([])

    function getCategories() {
        fetch(`${BASE_URL}/api/categories`)
            .then(r => r.json())
            .then(data => {
                categories.value = data
                console.log('Data is fetched.')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    getCategories()

    return {
        categories,
        getCategories
    }
})
