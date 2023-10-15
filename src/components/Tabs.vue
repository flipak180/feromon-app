<script setup>
import {IonBadge, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from '@ionic/vue';
import {cart, heart, list} from 'ionicons/icons';
import {useMainStore} from "@/store/index.js";
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const store = useMainStore();

const totalAmount = computed(() => store.cart.reduce((acc, cartItem) => acc + cartItem.amount, 0));
</script>

<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="tab1" :href="`/${route.params.place}/menu`">
                    <ion-icon aria-hidden="true" :icon="list"/>
                    <ion-label>Меню</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="tab2" :href="`/${route.params.place}/favs`">
                    <ion-badge v-show="store.favs.length">{{ store.favs.length }}</ion-badge>
                    <ion-icon aria-hidden="true" :icon="heart"/>
                    <ion-label>Избранное</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="tab3" :href="`/${route.params.place}/cart`">
                    <ion-badge v-show="totalAmount">{{ totalAmount }}</ion-badge>
                    <ion-icon aria-hidden="true" :icon="cart"/>
                    <ion-label>Корзина</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<style lang="scss">
ion-tab-button {
    --color-selected: var(--ion-color-primary);

    @media (prefers-color-scheme: dark) {
        --color: var(--ion-color-primary-contrast);
    }
}
</style>
