<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="tab1" href="/tabs/menu">
                    <ion-icon aria-hidden="true" :icon="list"/>
                    <ion-label>Меню</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="tab2" href="/tabs/favs">
                    <ion-icon aria-hidden="true" :icon="heart"/>
                    <ion-label>Избранное</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="tab3" href="/tabs/cart">
                    <ion-icon aria-hidden="true" :icon="cart"/>
                    <ion-label>Корзина</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script setup>
import {IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from '@ionic/vue';
import {cart, heart, list} from 'ionicons/icons';
</script>

<style lang="scss">
ion-tab-button {
    --color: var(--black);
    --color-selected: var(--ion-color-primary);

    @media (prefers-color-scheme: dark) {
        --color: var(--ion-color-primary-contrast);
    }
}
</style>
