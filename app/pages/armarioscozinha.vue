<script setup lang="ts">
const page = ref(1)
const perPage = 6

const allCards = [
  { img: '/card1.jpeg' },
  { img: '/armariodecozinha2.jpeg' },
  { img: '/card2.jpeg' },
  { img: '/card3.jpeg' },
  { img: '/card4.jpeg' },
  { img: '/card5.jpeg' },
  { img: '/card6.jpeg' },
  { img: '/card6.jpeg' },
  { img: '/card6.jpeg' },
  { img: '/card6.jpeg' },
  { img: '/card6.jpeg' },
  { img: '/card6.jpeg' },
]

const paginatedCards = computed(() => {
  const start = (page.value - 1) * perPage
  return allCards.slice(start, start + perPage)
})
</script>

<template>
  <div class="flex justify-center items-center">
    <h1 class="text-4xl text-center pt-10 text-black">Armários de Cozinha</h1>
  </div>

  <div class="flex justify-center items-center pt-20 px-40">
    <UPageGrid>
      <UPageCard
        variant="soft"
        class="w-96 bg-transparent"
        v-for="(card, index) in paginatedCards"
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
  </div>

  <div class="flex justify-center items-center pt-10 pb-20">
    <UPagination class="cursor-pointer"
      active-color="neutral"
      :total="20"
      v-model:page="page"
      :items="allCards.length"
      :page-count="perPage"
    />
  </div>
</template>
