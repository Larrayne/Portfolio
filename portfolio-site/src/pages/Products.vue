<script setup>
const products = [
  {
    name: "Dusty Pink Handbag",
    price: "R350",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Gold Chain Bracelet",
    price: "R120",
    image: "https://via.placeholder.com/150"
  }
]
</script>

<template>
  <section class="p-10">
    <h3 class="text-2xl font-bold mb-6">Shop 💕</h3>

    <div class="grid grid-cols-2 gap-6">
      <div v-for="product in products" :key="product.name" class="bg-white p-4 rounded-xl shadow">

        <img :src="product.image" class="rounded-lg mb-3" />

        <h4 class="font-semibold">{{ product.name }}</h4>
        <p class="text-pink-500 font-bold">{{ product.price }}</p>

        <a 
          href="https://wa.me/27711234567"
          class="block mt-3 bg-pink-500 text-white text-center py-2 rounded"
        >
          Order on WhatsApp
        </a>

      </div>
    </div>
  </section>
</template>