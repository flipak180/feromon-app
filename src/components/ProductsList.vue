<script setup>
import {cartOutline, closeOutline, heartOutline} from "ionicons/icons";
import {IonButton, IonIcon} from '@ionic/vue';

import products from '@/data/products.js'
import {useMainStore} from "@/store/index.js";
import {computed} from "vue";
import AmountSpinner from "@/components/AmountSpinner.vue";

const props = defineProps(['isFavs', 'category', 'subCategory'])
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

const inCart = (productId) => {
    return store.cart.some(item => item.id === productId);
}

const allProducts = await fetch(`http://info.feromon-menu.ru/api/products?category=${props.subCategory || props.category}`).then((r) => r.json());
const actualProducts = computed(() => !props.isFavs ? allProducts : products.filter(product => store.favs.includes(product.id)));

const showProductModal = (product) => {
    store.modalProduct = product;
}
</script>

<template>
    <div class="products-list" v-if="actualProducts.length">
        <div class="product-item" v-for="product in actualProducts" :key="product.id">
            <ion-button size="small" shape="round" :color="store.favs.includes(product.id) && !isFavs ? 'primary' : 'dark'" class="product-item__like" @click="toggleLike(product.id)">
                <ion-icon slot="icon-only" :icon="!isFavs ? heartOutline : closeOutline"></ion-icon>
            </ion-button>
            <div class="product-item__image" :style="{ backgroundImage: `url(http://info.feromon-menu.ru${product.image})` }" @click="showProductModal(product)"></div>
            <div class="product-item__info">
                <div class="product-item__title" @click="showProductModal(product)">{{ product.title }}</div>
                <div class="product-item__bottom">
                    <div class="product-item__price">{{ product.price.toLocaleString() }} ₽</div>
                    <div class="add-to-cart">
                        <ion-button size="small" class="add-to-cart__button" @click="addToCart(product)" v-if="!inCart(product.id)">
                            <ion-icon slot="icon-only" :icon="cartOutline"></ion-icon>
                        </ion-button>
                        <AmountSpinner :product="product" v-else />
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

.add-to-cart {
    display: flex;

    &__button {
        height: 28px;
        margin: 0;
    }
}
</style>
