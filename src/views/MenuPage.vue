<template>
    <ion-page>
        <ion-content class="ion-padding">
            <Banners />
            <CategoriesMenu />
            <ProductsList />
            <ProductModal />
        </ion-content>
    </ion-page>
</template>

<script setup>
import {IonContent, IonPage} from '@ionic/vue';
import ProductsList from "@/components/ProductsList.vue";
import ProductModal from "@/components/ProductModal.vue";
import CategoriesMenu from "@/components/CategoriesMenu.vue";
import Banners from "@/components/Banners.vue";
</script>
