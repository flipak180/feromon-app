<template>
    <ion-page>
        <ion-content class="ion-padding">
            <h1>Корзина</h1>
            <ProductsList />
        </ion-content>
    </ion-page>
</template>

<script setup>
import {IonContent, IonPage} from '@ionic/vue';
import ProductsList from "@/components/ProductsList.vue";
</script>
