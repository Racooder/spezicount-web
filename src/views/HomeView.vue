<script setup lang="ts">
import ProductGrid from "@/components/ProductGrid.vue";
import UserDebt from "@/components/UserDebt.vue";
</script>

<template>
    <div class="home">
        <UserDebt></UserDebt>
        <ProductGrid></ProductGrid>
    </div>
</template>

<style scoped>
.home {
    display: flex;
    flex-flow: column;
    gap: 0.5rem;
    justify-content: center;
}
</style>
