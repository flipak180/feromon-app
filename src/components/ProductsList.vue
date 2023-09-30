<script setup>
import ananas from '@/assets/ananas_40.jpg'
import apelsin from '@/assets/apelsin_42.jpg'
import granat from '@/assets/granat_44.jpg'
import grejpfrut from '@/assets/grejpfrut_43.jpg'
import {cartOutline, heartOutline} from "ionicons/icons";
import {IonButton, IonIcon} from '@ionic/vue';

import products from '@/data/products.js'
</script>

<template>
    <div class="products-list">
        <div class="product-item" v-for="product in products" :key="product.id">
            <ion-button size="small" shape="round" color="dark" class="product-item__like">
                <ion-icon slot="icon-only" :icon="heartOutline"></ion-icon>
            </ion-button>
            <div class="product-item__image" :style="{ backgroundImage: `url(${ananas})` }"></div>
            <div class="product-item__info">
                <div class="product-item__title">Кальян по фикс. стоимости</div>
                <div class="product-item__bottom">
                    <div class="product-item__price">1 500 ₽</div>
                    <div class="add-to-cart">
                        <ion-button size="small" class="add-to-cart__button">
                            <ion-icon slot="icon-only" :icon="cartOutline"></ion-icon>
                        </ion-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-item">
            <ion-button size="small" shape="round" color="dark" class="product-item__like">
                <ion-icon slot="icon-only" :icon="heartOutline"></ion-icon>
            </ion-button>
            <div class="product-item__image" :style="{ backgroundImage: `url(${apelsin})` }"></div>
            <div class="product-item__info">
                <div class="product-item__title">Апельсин</div>
                <div class="product-item__bottom">
                    <div class="product-item__price">900 ₽</div>
                    <div class="add-to-cart">
                        <ion-button size="small">
                            <ion-icon slot="icon-only" :icon="cartOutline"></ion-icon>
                        </ion-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-item">
            <ion-button size="small" shape="round" color="dark" class="product-item__like">
                <ion-icon slot="icon-only" :icon="heartOutline"></ion-icon>
            </ion-button>
            <div class="product-item__image" :style="{ backgroundImage: `url(${granat})` }"></div>
            <div class="product-item__info">
                <div class="product-item__title">Какое-то слишком длинное название продукта вот прям очень</div>
                <div class="product-item__bottom">
                    <div class="product-item__price">60 ₽</div>
                    <div class="add-to-cart">
                        <ion-button size="small">
                            <ion-icon slot="icon-only" :icon="cartOutline"></ion-icon>
                        </ion-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-item">
            <ion-button size="small" shape="round" color="dark" class="product-item__like">
                <ion-icon slot="icon-only" :icon="heartOutline"></ion-icon>
            </ion-button>
            <div class="product-item__image" :style="{ backgroundImage: `url(${grejpfrut})` }"></div>
            <div class="product-item__info">
                <div class="product-item__title">А это грейпфрут 🍊</div>
                <div class="product-item__bottom">
                    <div class="product-item__price">10 800 ₽</div>
                    <div class="add-to-cart">
                        <ion-button size="small">
                            <ion-icon slot="icon-only" :icon="cartOutline"></ion-icon>
                        </ion-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.products-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
//.button {
//    width: 24px;
//    height: 24px;
//    border-radius: 50%;
//    background: #fff;
//    color: #000;
//    display: flex;
//    align-items: center;
//    justify-content: center;
//}
.product-item {
    position: relative;
    background-color: var(--black-light);
    border-radius: 10px;

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
        font-size: 10px;
        display: -webkit-box;
        max-width: 200px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        height: 24px;
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
</style>
