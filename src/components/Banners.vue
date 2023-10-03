<script setup>
import ananas from '@/assets/ananas_40.jpg'
import apelsin from '@/assets/apelsin_42.jpg'
import granat from '@/assets/granat_44.jpg'
import grejpfrut from '@/assets/grejpfrut_43.jpg'
</script>

<template>
<div class="banners">
    <div class="banners__item" :style="{ backgroundImage: `url(${ananas})` }"></div>
    <div class="banners__item" :style="{ backgroundImage: `url(${apelsin})` }"></div>
    <div class="banners__item" :style="{ backgroundImage: `url(${granat})` }"></div>
    <div class="banners__item" :style="{ backgroundImage: `url(${grejpfrut})` }"></div>
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
