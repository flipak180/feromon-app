<script setup>
import {IonContent, IonPage} from '@ionic/vue';
import ProductsList from "@/components/ProductsList.vue";
import ProductModal from "@/components/ProductModal.vue";
import CategoriesMenu from "@/components/CategoriesMenu.vue";
import Banners from "@/components/Banners.vue";
import {useRoute} from "vue-router";
import {BASE_URL} from "@/plugins/api.js";

const route = useRoute();

const allCategories = await fetch(`${BASE_URL}/api/categories`).then((r) => r.json());
const categories = allCategories.filter(item => !item.parent_id);
const activeCategoryId = +route.params.category || categories[0].id;
</script>

<template>
    <ion-page>
        <ion-content class="ion-padding">
            <Banners />
            <CategoriesMenu :allCategories="allCategories" :activeCategoryId="activeCategoryId" />
            <Suspense>
                <ProductsList :categoryId="activeCategoryId" />
            </Suspense>
            <ProductModal />
        </ion-content>
    </ion-page>
</template>
