<script setup>
import {IonButton, IonIcon, IonModal} from '@ionic/vue';
import {computed, ref} from 'vue';
import {useMainStore} from "@/store/index.js";
import {closeOutline} from "ionicons/icons";

const productModal = ref();
const store = useMainStore();

const close = () => productModal.value.$el.dismiss();

const onWillDismiss = () => {
    store.modalProduct = null;
};

const isOpen = computed(() => !!store.modalProduct);
</script>

<template>
    <ion-modal ref="productModal" :is-open="isOpen" @willDismiss="onWillDismiss" class="product-modal">
        <ion-button size="small" shape="round" color="dark" class="product-modal__close" @click="close()">
            <ion-icon slot="icon-only" :icon="closeOutline"></ion-icon>
        </ion-button>
    </ion-modal>
</template>

<style scoped lang="scss">

</style>
