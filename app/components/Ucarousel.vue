<script setup lang="ts">
const items = [
  '/card1.jpeg',
  '/card2.jpeg',
  '/card3.jpeg',
  '/card4.jpeg',
  '/card5.jpeg',
  '/card6.jpeg',
]
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    loop
    dots
    arrows
    auto-scroll
    :items="items"
    :ui="{item: 'basis-1/4' }"
  >
    <img :src="item" class="rounded-lg">
  </UCarousel>
</template>

