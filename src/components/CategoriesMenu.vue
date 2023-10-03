<script setup>
import {computed, ref} from "vue";

const allCategories = await fetch(`http://info.feromon-menu.ru/api/categories`).then((r) => r.json());
const categories = allCategories.filter(item => !item.parent_id);
const activeCategory = ref(categories[0]);
const subCategories = computed(() => allCategories.filter(item => item.parent_id === activeCategory.value.id));
const activeSubCategory = ref(subCategories.value[0]);

const onCategorySelect = (category) => {
    activeCategory.value = category;
}

const onSubCategorySelect = (subCategory) => {
    activeSubCategory.value = subCategory;
}
</script>

<template>
    <div class="categories-menu">
        <span v-for="category in categories" :key="category.id"
              :class="{active: category.id === activeCategory.id}"
              @click="onCategorySelect(category)"
        >
            {{ category.title }}
        </span>
    </div>
    <div class="subcategories-menu">
        <span v-for="subCategory in subCategories" :key="subCategory.id"
              :class="{active: subCategory.id === activeSubCategory.id}"
              @click="onSubCategorySelect(subCategory)"
        >
            {{ subCategory.title }}
        </span>
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
