<script setup lang="ts">
const cards = ref([
  {
    img: '/armariodecozinha2.jpeg',
  },
  {
    img: '/armariodecozinha2.jpeg',
  },
  {
    img: '/armariodecozinha2.jpeg',
  }
])
</script>

<template>
  <UPageGrid>
    <UPageCard class="w-96"
      v-for="(card, index) in cards"
      :key="index"
    >
      <template #header>
        <img
          :src="card.img"
          alt="Imagem do card"
          class="rounded-lg"
        />
      </template>
    </UPageCard>
  </UPageGrid>
</template>
