<script setup>
import {useMainStore} from "@/store/index.js";
import {computed} from "vue";

const store = useMainStore();
let sum = computed(() => store.cart.reduce((acc, cartItem) => acc + (cartItem.price * cartItem.amount), 0));
</script>

<template>
    <div class="cart-summary" v-show="sum">
        <div class="cart-summary__text">Итого</div>
        <div class="cart-summary__total">{{ sum.toLocaleString() }} ₽</div>
        <div class="cart-summary__bottom">
            <input type="text" class="cart-summary__input" placeholder="Номер столика">
            <button class="cart-summary__submit">Сделать заказ</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.cart-summary {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 10px 15px 25px;
    background: var(--grey-light);
    text-align: center;
    border-radius: 30px 30px 0 0;

    @media (prefers-color-scheme: dark) {
        background: var(--black-light);
    }

    &__text {
        font-size: 14px;
        margin-bottom: 10px;
    }

    &__total {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    &__bottom {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }

    &__input {
        border-radius: 10px;
        border: 1px solid var(--purple);
        background: transparent;
        height: 45px;
        padding: 5px;
        text-align: center;
    }

    &__submit {
        background: var(--purple);
        border: none;
        margin: 0;
        padding: 0;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        height: 45px;
        border-radius: 10px;
    }
}
</style>
