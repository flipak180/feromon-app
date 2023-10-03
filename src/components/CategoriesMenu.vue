<script setup>
const categories = await fetch(`http://info.feromon-menu.ru/api/categories`).then((r) => r.json());
</script>

<template>
    <div class="categories-menu">
        <span v-for="category in categories" :key="category.id">{{ category.title }}</span>
    </div>
    <div class="subcategories-menu">
        <span>Кальяны</span>
        <span>Летнее меню</span>
        <span class="active">Завтраки</span>
        <span>Бизнес-ланчи</span>
        <span>Азиатское меню</span>
        <span>Салаты</span>
        <span>Закуски</span>
        <span>Супы</span>
    </div>
</template>

<style scoped lang="scss">
.categories-menu,
.subcategories-menu {
    display: flex;
    gap: 15px;
    overflow-x: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    span {
        color: #000;
        text-decoration: none;
        white-space: nowrap;
        text-transform: uppercase;
        cursor: pointer;

        @media (prefers-color-scheme: dark) {
            color: #fff;
        }
    }
}

.categories-menu {
    margin-bottom: 15px;

    span {
        font-size: 14px;
        font-weight: bold;

        &:hover:after,
        &.active:after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: var(--purple);
            top: 100%;
            left: 0;
        }
    }
}
.subcategories-menu {
    margin-bottom: 20px;

    span {
        font-size: 12px;

        &:hover,
        &.active {
            color: var(--purple);
        }
    }
}
</style>
