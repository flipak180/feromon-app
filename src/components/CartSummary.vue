<script setup>
import {useMainStore} from "@/store/index.js";
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import {IonAlert} from '@ionic/vue';

const store = useMainStore();
const route = useRoute();
const sum = computed(() => store.cart.reduce((acc, cartItem) => acc + (cartItem.price * cartItem.amount), 0));
const table = ref();
const showAlert = ref(false);

const alertButtons = ['OK'];

const placeOrder = async () => {
    let text = `
*Новый заказ!* _(${route.params.place})_
%0AСтолик №${table.value || '-'}
%0A----------------------%0A
${store.cart.map(item => item.title + ' ' + item.amount + ' шт.' + ' X ' + (item.price).toLocaleString() + ' ₽' + ' = ' + (item.price * item.amount).toLocaleString() + ' ₽').join('%0A')}
%0A----------------------%0A
Итого: *${sum.value.toLocaleString()} ₽*
    `;
    await fetch(`https://api.telegram.org/bot5478002238:AAFeOnFOAaxyeObjXVXWOzUcH9VpHMvo1S8/sendMessage?chat_id=909486&parse_mode=markdown&text=${text}`);
    store.cart = [];
    showAlert.value = true;
}
</script>

<template>
    <div class="cart-summary" v-show="sum">
        <div class="cart-summary__text">Итого</div>
        <div class="cart-summary__total">{{ sum.toLocaleString() }} ₽</div>
        <div class="cart-summary__bottom">
            <input type="text" class="cart-summary__input" placeholder="Номер столика" v-model="table">
            <button class="cart-summary__submit" @click="placeOrder">Сделать заказ</button>
        </div>

        <ion-alert
            :is-open="showAlert"
            header="Ваш заказ оформлен"
            :buttons="alertButtons"
        ></ion-alert>
    </div>
</template>

<style scoped lang="scss">
.cart-summary {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 10px 15px 25px;
    //background: var(--grey-light);
    background: var(--black-light);
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
