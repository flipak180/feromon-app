<template>
    <ion-page>
        <ion-content class="ion-padding">
            <h1>Избранное</h1>
            <ProductsList :is-favs="true" />
            <ProductModal />
        </ion-content>
    </ion-page>
</template>

<script setup>
import {IonContent, IonPage} from '@ionic/vue';
import ProductsList from "@/components/ProductsList.vue";
import ProductModal from "@/components/ProductModal.vue";
</script>
