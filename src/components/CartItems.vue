<script setup>
import {useMainStore} from "@/store/index.js";
import {closeOutline} from "ionicons/icons";
import {IonIcon} from "@ionic/vue";
import AmountSpinner from "@/components/AmountSpinner.vue";

const store = useMainStore();

const removeCartItem = (cartItem) => {
    store.cart = store.cart.filter(item => item.id !== cartItem.id);
}
</script>

<template>
    <div class="cart-items" v-if="store.cart.length">
        <div class="cart-item" v-for="cartItem in store.cart" :key="cartItem.id">
            <button @click="removeCartItem(cartItem)" class="cart-item__remove">
                <ion-icon :icon="closeOutline"></ion-icon>
            </button>
            <div class="cart-item__image" :style="{ backgroundImage: `url(http://info.feromon-menu.ru${cartItem.image})` }"></div>
            <div class="cart-item__info">
                <div class="cart-item__title">{{ cartItem.title }}</div>
                <div class="cart-item__bottom">
                    <AmountSpinner :product="cartItem" />
                    <div class="cart-item__price">{{ (cartItem.price * cartItem.amount).toLocaleString() }} ₽</div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>Здесь пока ничего нет</div>
</template>

<style scoped lang="scss">
.cart-items {

}
.cart-item {
    position: relative;
    background-color: var(--grey-light);
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    @media (prefers-color-scheme: dark) {
        background-color: var(--black-light);
    }

    &__remove {
        position: absolute;
        right: 5px;
        top: 5px;
        background: none;
        font-size: 18px;
    }

    &__image {
        flex: 0 0 60px;
        height: 60px;
        border-radius: 5px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    &__info {
        flex-grow: 1;
        margin-right: 20px;
    }

    &__title {
        font-size: 12px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        height: 30px;
        margin-bottom: 10px;
    }

    &__bottom {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    &__price {
        font-size: 15px;
        font-weight: bold;
    }
}

.amount-spinner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--grey);
    border-radius: 5px;
    font-size: 14px;
    padding: 5px;
    gap: 5px;

    @media (prefers-color-scheme: dark) {
        background: #000;
    }

    button {
        background: none;
        border: none;
        margin: 0;
        padding: 0;
        color: var(--purple);
    }

    span {
        display: flex;
        width: 12px;
        align-items: center;
        justify-content: center;
    }
}
</style>
