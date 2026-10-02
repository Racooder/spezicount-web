<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

function menu() {
    console.log("open menu");
}
</script>

<template>
    <div class="item" @click="console.log('add')">
        <span>+</span>
    </div>
</template>

<style scoped>
span {
    text-align: center;
}
</style>
