<template>
    <ion-page>
        <ion-content class="ion-padding">
            <h1>Корзина</h1>
            <CartItems />
        </ion-content>
    </ion-page>
</template>

<script setup>
import {IonContent, IonPage} from '@ionic/vue';
import CartItems from "@/components/CartItems.vue";
</script>
