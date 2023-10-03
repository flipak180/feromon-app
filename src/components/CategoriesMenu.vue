<script setup>

</script>

<template>
    <div class="categories-menu">
        <a href="" class="active">Кальяны</a>
        <a href="">Летнее меню</a>
        <a href="">Завтраки</a>
        <a href="">Бизнес-ланчи</a>
        <a href="">Азиатское меню</a>
        <a href="">Салаты</a>
        <a href="">Закуски</a>
        <a href="">Супы</a>
    </div>
    <div class="subcategories-menu">
        <a href="">Кальяны</a>
        <a href="">Летнее меню</a>
        <a href="" class="active">Завтраки</a>
        <a href="">Бизнес-ланчи</a>
        <a href="">Азиатское меню</a>
        <a href="">Салаты</a>
        <a href="">Закуски</a>
        <a href="">Супы</a>
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

    a {
        color: #000;
        text-decoration: none;
        white-space: nowrap;
        text-transform: uppercase;

        @media (prefers-color-scheme: dark) {
            color: #fff;
        }
    }
}

.categories-menu {
    margin-bottom: 15px;

    a {
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

    a {
        font-size: 12px;

        &:hover,
        &.active {
            color: var(--purple);
        }
    }
}
</style>
