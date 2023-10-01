<template>
    <ion-page>
        <ion-content class="ion-padding">
            <h1>Корзина</h1>
            <CartItems />
            <CartSummary />
            <ProductModal />
        </ion-content>
    </ion-page>
</template>

<script setup>
import {IonContent, IonPage} from '@ionic/vue';
import CartItems from "@/components/CartItems.vue";
import CartSummary from "@/components/CartSummary.vue";
import ProductModal from "@/components/ProductModal.vue";
</script>

<style lang="scss">

</style>
