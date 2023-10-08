<template>
    <ion-page>
        <ion-content class="ion-padding">
            <h1>Системные действия</h1>
            <div>
                <ion-button size="small" @click="clearStorage">Очистить LocalStorage</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import {IonButton, IonContent, IonPage} from '@ionic/vue';
import {useMainStore} from "@/store/index.js";

const store = useMainStore();

const clearStorage = () => {
    store.cart = [];
    store.favs = [];
    store.modalProduct = null;
}
</script>

<style lang="scss">

</style>
