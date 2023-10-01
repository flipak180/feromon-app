<script setup>
import {addOutline, cartOutline, closeOutline, heartOutline, removeOutline} from "ionicons/icons";
import {IonButton, IonIcon} from '@ionic/vue';

import products from '@/data/products.js'
import {useMainStore} from "@/store/index.js";
import {computed} from "vue";

const props = defineProps(['isFavs'])
const store = useMainStore();

const toggleLike = (productId) => {
    store.favs.includes(productId)
        ? store.favs.splice(store.favs.indexOf(productId), 1)
        : store.favs.push(productId);
}

const addToCart = (product) => {
    store.cart.push({
        ...product,
        amount: 1,
    });
}

const inCartAmount = (productId) => {
    return store.cart.find(item => item.id === productId)?.amount || 0;
}

const actualProducts = computed(() => !props.isFavs ? products : products.filter(product => store.favs.includes(product.id)));
</script>

<template>
    <div class="products-list" v-if="actualProducts.length">
        <div class="product-item" v-for="product in actualProducts" :key="product.id">
            <ion-button size="small" shape="round" :color="store.favs.includes(product.id) && !isFavs ? 'primary' : 'dark'" class="product-item__like" @click="toggleLike(product.id)">
                <ion-icon slot="icon-only" :icon="!isFavs ? heartOutline : closeOutline"></ion-icon>
            </ion-button>
            <div class="product-item__image" :style="{ backgroundImage: `url(${product.image})` }"></div>
            <div class="product-item__info">
                <div class="product-item__title">{{ product.title }}</div>
                <div class="product-item__bottom">
                    <div class="product-item__price">{{ product.price }}</div>
                    <div class="add-to-cart">
                        <ion-button size="small" class="add-to-cart__button" @click="addToCart(product)" v-if="!inCartAmount(product.id)">
                            <ion-icon slot="icon-only" :icon="cartOutline"></ion-icon>
                        </ion-button>
                        <div class="amount-spinner" v-else>
                            <button>
                                <ion-icon :icon="removeOutline"></ion-icon>
                            </button>
                            <span>{{ inCartAmount(product.id) }}</span>
                            <button>
                                <ion-icon :icon="addOutline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>Здесь пока ничего нет</div>
</template>

<style scoped lang="scss">
.products-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
.product-item {
    position: relative;
    background-color: var(--grey-light);
    border-radius: 10px;

    @media (prefers-color-scheme: dark) {
        background-color: var(--black-light);
    }

    &__like {
        position: absolute;
        right: 5px;
        top: 5px;
    }

    &__image {
        height: 200px;
        border-radius: 10px 10px 0 0;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    &__info {
        padding: 10px;
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
        justify-content: space-between;
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
