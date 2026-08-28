<script setup>
const products = [
  {
    name: 'Dusty Pink Handbag',
    price: 'R350',
    description: 'Delicate and elegant design for everyday styling.',
    image: 'https://via.placeholder.com/420x280',
  },
  {
    name: 'Gold Chain Bracelet',
    price: 'R120',
    description: 'Minimal bracelet with polished finish for a luxe look.',
    image: 'https://via.placeholder.com/420x280',
  },
]
</script>

<template>
  <section class="page">
    <div class="page-container">
      <div class="glass p-10">
        <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 class="title">Shop</h1>
            <p class="subtitle">A small collection of curated pieces inspired by modern style and warm tones.</p>
          </div>
        </div>
      </div>

      <div class="grid gap-6 mt-10 md:grid-cols-2">
        <div v-for="product in products" :key="product.name" class="glass product-card p-8">
          <img :src="product.image" :alt="product.name" class="rounded-3xl w-full object-cover mb-6" />
          <h2 class="text-2xl font-semibold">{{ product.name }}</h2>
          <p class="text-muted mt-3">{{ product.description }}</p>
          <p class="mt-4 text-pink-300 font-semibold text-lg">{{ product.price }}</p>
          <a href="https://wa.me/27711234567" class="inline-flex mt-6 rounded-full bg-pink-500 px-6 py-3 text-white font-semibold hover:bg-pink-600 transition">Order on WhatsApp</a>
        </div>
      </div>
    </div>
  </section>
</template>