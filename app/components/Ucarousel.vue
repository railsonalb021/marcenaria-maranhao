<script setup lang="ts">
const items = [
  '/card2.jpeg',
  '/card3.jpeg',
  '/card4.jpeg',
  '/card5.jpeg',
]
</script>

<template>
  <div class="px-40">
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
  </div>
</template>

