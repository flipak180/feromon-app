<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";
import {useIonRouter} from "@ionic/vue";

const ionRouter = useIonRouter();
const route = useRoute();
const props = defineProps(['allCategories', 'activeCategoryId'])

const categories = props.allCategories.filter(item => !item.parent_id);
const activeCategory = props.allCategories.find(item => item.id === props.activeCategoryId);
const subCategories = computed(() => props.allCategories.filter(item => item.parent_id && (item.parent_id === activeCategory.id || item.parent_id === activeCategory.parent_id)));

const onCategorySelect = (category) => {
    ionRouter.navigate({ name: 'category', params: { category: category.id } }, 'none');
}
</script>

<template>
    <div class="categories-menu">
        <span v-for="category in categories" :key="category.id"
              :class="{active: category.id === activeCategory.id || category.id === activeCategory.parent_id}"
              @click="onCategorySelect(category)"
        >
            {{ category.title }}
        </span>
    </div>
    <div class="subcategories-menu">
        <span v-for="subCategory in subCategories" :key="subCategory.id"
              :class="{active: subCategory.id === activeCategory.id}"
              @click="onCategorySelect(subCategory)"
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
        //color: #000;
        color: #fff;
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

        &.active {
            color: var(--purple);
        }
    }
}
</style>
