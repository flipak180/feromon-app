<template>
    <ion-page>
        <ion-content class="ion-padding">
            <h1>Избранное</h1>
            <FavsList />
            <ProductModal />
        </ion-content>
    </ion-page>
</template>

<script setup>
import {IonContent, IonPage} from '@ionic/vue';
import ProductModal from "@/components/ProductModal.vue";
import FavsList from "@/components/FavsList.vue";
</script>
