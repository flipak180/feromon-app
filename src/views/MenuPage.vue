<script setup>
import {IonContent, IonPage} from '@ionic/vue';
import ProductsList from "@/components/ProductsList.vue";
import ProductModal from "@/components/ProductModal.vue";
import CategoriesMenu from "@/components/CategoriesMenu.vue";
import Banners from "@/components/Banners.vue";
import {useRoute} from "vue-router";
import {useCategoriesStore} from "@/store/categories.js";
import {computed} from "vue";

const route = useRoute();
const categoriesStore = useCategoriesStore();

const categories = computed(() => {
    return categoriesStore.categories;
});
const activeCategoryId = computed(() => {
    return +route.params.categoryId || categories[0].id;
});
</script>

<template>
    <ion-page>
        <ion-content class="ion-padding">
            <Banners />
            <CategoriesMenu :allCategories="categories" :activeCategoryId="activeCategoryId" />
            <Suspense>
                <ProductsList :categoryId="activeCategoryId" />
            </Suspense>
            <ProductModal />
        </ion-content>
    </ion-page>
</template>
