<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import ProductButton from "../components/ProductButton.vue";
import AddProductButton from "./AddProductButton.vue";

async function fetchProducts() {
    const res = await fetch("http://localhost:1609/api/products");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    console.log(res);
    return res.json();
}

const {
    data: products,
    isPending,
    isError,
    error,
    refetch,
} = useQuery({
    queryKey: ["users"],
    queryFn: fetchProducts,
});

// let productId = 0;
// const products = ref([
//     { id: productId++, name: "Spezi" },
//     { id: productId++, name: "Bier" },
//     { id: productId++, name: "Alkoholfreie Spezi" },
//     { id: productId++, name: "Redbull" },
//     { id: productId++, name: "Durbacher Wein" },
//     { id: productId++, name: "Wasser" },
//     { id: productId++, name: "Seele" },
//     { id: productId++, name: "Brot" },
//     { id: productId++, name: "Merguez" },
//     { id: productId++, name: "Wienerle" },
// ]);
</script>

<template>
    <p v-if="isPending">Loading...</p>
    <p v-else-if="isError">Error: {{ error?.message }}</p>
    <div v-else class="grid">
        <ProductButton
            v-for="product in products"
            :key="product.id"
            :name="product.name"
        ></ProductButton>
        <AddProductButton class="item"></AddProductButton>
    </div>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 10rem);
    gap: 0.5rem;
    width: 100%;
    max-width: 1000px;
}

.item {
    border: 1px solid #000;
    border-radius: 5px;

    height: 12rem;
    width: 10rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
