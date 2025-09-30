<script setup lang="ts">
const items = [
  '/armariodecozinha2.jpeg',
  '/armariodecozinha3.jpeg',
]
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    loop
    wheel-gestures
    :items="items"
    :ui="{ item: 'basis-1/2' }"
  >
    <img :src="item" width="400" class="rounded-lg mb-20">
    <img :src="item" width="400" height="234" class="rounded-lg">
  </UCarousel>
</template>

