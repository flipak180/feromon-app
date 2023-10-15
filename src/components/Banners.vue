<script setup>
import {onMounted, ref} from "vue";
import {BASE_URL} from "@/plugins/api.js";
import {useRoute} from "vue-router";

const banners = ref([]);
const route = useRoute();

onMounted(() => {
    fetch(`${BASE_URL}/api/banners?place=${route.params.place}`)
        .then(r => r.json())
        .then(r => banners.value = r);
})

const handleClick = (banner) => {
    if (banner.link) {
        window.open(banner.link, '_blank').focus();
    }
}
</script>

<template>
<div class="banners">
    <div class="banners__item" v-for="banner in banners" :style="{ backgroundImage: `url(${BASE_URL + banner.image})` }" @click="handleClick(banner)"></div>
</div>
</template>

<style scoped lang="scss">
.banners {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    overflow-x: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    &__item {
        flex: 0 0 100px;
        height: 100px;
        border-radius: 10px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
}
</style>
