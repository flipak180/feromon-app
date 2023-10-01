<script setup>
import {useMainStore} from "@/store/index.js";

const store = useMainStore();
</script>

<template>
    <div class="cart-items" v-if="store.cart.length">
        <div class="cart-item" v-for="cartItem in store.cart" :key="cartItem.id">

        </div>
    </div>
    <div v-else>Здесь пока ничего нет</div>
</template>

<style scoped lang="scss">

</style>
