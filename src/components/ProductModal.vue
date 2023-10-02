<script setup>
import {IonButton, IonIcon, IonModal} from '@ionic/vue';
import {computed, ref} from 'vue';
import {useMainStore} from "@/store/index.js";
import {closeOutline} from "ionicons/icons";
import AmountSpinner from "@/components/AmountSpinner.vue";

const productModal = ref();
const store = useMainStore();

const close = () => productModal.value.$el.dismiss();

const onWillDismiss = () => {
    store.modalProduct = null;
};

const isOpen = computed(() => !!store.modalProduct);
const product = computed(() => store.modalProduct);

const addToCart = (product) => {
    store.cart.push({
        ...product,
        amount: 1,
    });
}

const inCart = (productId) => {
    return store.cart.some(item => item.id === productId);
}
</script>

<template>
    <ion-modal ref="productModal" :is-open="isOpen" @willDismiss="onWillDismiss" class="product-modal">
        <ion-content color="dark">
            <div class="product-modal__content">
                <ion-button size="small" shape="round" color="dark" class="product-modal__close" @click="close()">
                    <ion-icon slot="icon-only" :icon="closeOutline"></ion-icon>
                </ion-button>
                <div class="product-modal__image" :style="{ backgroundImage: `url(${product.image})` }"></div>
                <div class="product-modal__info">
                    <div class="product-modal__title">
                        Апельсин
                    </div>
                    <div class="product-modal__text">
                        <p>Прежде всего, новая модель организационной деятельности, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для экономической целесообразности принимаемых решений.</p>
                        <p>Не следует, однако, забывать, что сложившаяся структура организации напрямую зависит от новых предложений. Равным образом, реализация намеченных плановых заданий обеспечивает актуальность системы обучения кадров, соответствующей насущным потребностям.</p>
                        <p>Не следует, однако, забывать, что сложившаяся структура организации напрямую зависит от новых предложений. Равным образом, реализация намеченных плановых заданий обеспечивает актуальность системы обучения кадров, соответствующей насущным потребностям.</p>
                    </div>
                </div>
            </div>
            <div class="product-modal__bottom">
                <div class="product-modal__price">{{ product.price.toLocaleString() }} ₽</div>
                <div class="add-to-cart">
                    <ion-button color="light" class="add-to-cart__button" @click="addToCart(product)" v-if="!inCart(product.id)">
                        В корзину
                    </ion-button>
                    <AmountSpinner :product="product" v-else />
                </div>
            </div>
        </ion-content>
    </ion-modal>
</template>

<style scoped lang="scss">
.product-modal {

    &__content {
        padding: 5px 5px 50px;
        background: #fff;
    }

    &__close {
        position: fixed;
        right: 5px;
        top: 5px;
    }

    &__image {
        height: 380px;
        border-radius: 10px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    &__info {
        padding: 15px 10px;
    }

    &__title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 15px;
    }

    &__bottom {
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        padding: 10px 20px;
        background: var(--purple);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__price {
        font-size: 20px;
        font-weight: bold;
        color: #fff;
    }

    .add-to-cart {

        ion-button {
            text-transform: uppercase;
            font-size: 12px;
            --border-radius: 10px;
            margin: 0;
        }

        .amount-spinner {
            height: 38px;
            color: #fff;
        }
    }
}
</style>
