<script setup>
import {addOutline, removeOutline} from "ionicons/icons";
import {IonIcon} from '@ionic/vue';
import {useMainStore} from "@/store/index.js";

const store = useMainStore();
const props = defineProps(['product']);

const inCartAmount = (productId) => {
    return store.cart.find(item => item.id === productId)?.amount || 0;
}

const changeAmount = (productId, add = true) => {
    const cartItem = store.cart.find(item => item.id === productId);
    if (!cartItem) {
        return;
    }

    if (add) {
        cartItem.amount++;
    } else if (cartItem.amount > 1) {
        cartItem.amount--;
    } else {
        store.cart = store.cart.filter(item => item.id !== productId);
    }
}
</script>

<template>
    <div class="amount-spinner">
        <button @click="changeAmount(product.id, false)">
            <ion-icon :icon="removeOutline"></ion-icon>
        </button>
        <span>{{ inCartAmount(product.id) }}</span>
        <button @click="changeAmount(product.id)">
            <ion-icon :icon="addOutline"></ion-icon>
        </button>
    </div>
</template>

<style scoped lang="scss">
.amount-spinner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    //background: var(--grey);
    background: #000;
    border-radius: 5px;
    font-size: 14px;
    padding: 5px;
    gap: 5px;
    height: 28px;

    @media (prefers-color-scheme: dark) {
        background: #000;
    }

    button {
        background: none;
        border: none;
        margin: 0;
        padding: 0;
        color: var(--purple);
        display: flex;
        align-items: center;
    }

    span {
        display: flex;
        width: 12px;
        align-items: center;
        justify-content: center;
    }
}
</style>
