<script setup>
import {IonContent, IonPage, useIonRouter} from '@ionic/vue';
import ProductsList from "@/components/ProductsList.vue";
import ProductModal from "@/components/ProductModal.vue";
import CategoriesMenu from "@/components/CategoriesMenu.vue";
import Banners from "@/components/Banners.vue";
import {useRoute} from "vue-router";
import {computed} from "vue";

const ionRouter = useIonRouter();
const route = useRoute();

const allCategories = await fetch(`http://info.feromon-menu.ru/api/categories`).then((r) => r.json());
const categories = allCategories.filter(item => !item.parent_id);
const activeCategory = +route.params.category || categories[0].id;
const subCategories = computed(() => allCategories.filter(item => item.parent_id === activeCategory));
const activeSubCategory = +route.params.subCategory || subCategories.value[0].id;
</script>

<template>
    <ion-page>
        <ion-content class="ion-padding">
            <Banners />
            <CategoriesMenu :allCategories="allCategories" :activeCategory="activeCategory" />
            <Suspense>
                <ProductsList :category="activeCategory" :subCategory="activeSubCategory" />
            </Suspense>
            <ProductModal />
        </ion-content>
    </ion-page>
</template>
