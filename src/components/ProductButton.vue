<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
    name: string;
}>();

const count = ref(0);

function menu() {
    console.log("open menu");
}
</script>

<template>
    <div class="item" @click="count++">
        <div class="item-menu">
            <button @click.stop="count--">-1</button>
            <button @click.stop="menu">
                <i class="fi fi-rr-menu-burger"></i>
            </button>
        </div>
        <span>{{ name }}</span>
        <span>{{ count }}</span>
    </div>
</template>

<style scoped>
.item-menu {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

span {
    text-align: center;
}
</style>
