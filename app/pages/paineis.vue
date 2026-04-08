<script setup lang="ts">
const page = ref(1)
const perPage = 6

const totalImages = 100

const allCards = Array.from({ length: totalImages }, (_, i) => {
  const index = i + 1

  return {
    img: `/paineis/paineis${index}.${index <= 100 ? 'png' : 'jpg'}`
  }
})

const paginatedCards = computed(() => {
  const start = (page.value - 1) * perPage
  return allCards.slice(start, start + perPage)
})
</script>

<template>
  <div class="flex justify-start items-center px-16 pt-10">
    <NuxtLink to="/" class="text-black cursor-pointer absolute">
      <Icon name="mdi:arrow-left" class="text-2xl sm:text-3xl text-black transition-colors" />
    </NuxtLink>
  </div>
  <div class="flex justify-center items-center">
    <h1 class="text-3xl sm:text-4xl text-center pt-24 sm:pt-28 md:pt-32 lg:pt-10 text-black px-4">
      Painéis
    </h1>
  </div>

  <div class="flex justify-center items-center pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6 md:px-8 lg:px-60">
    <UPageGrid class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
      <UPageCard
        variant="soft"
        class="w-full max-w-sm mx-auto bg-transparent hover:shadow-lg transition-shadow duration-300"
        v-for="(card, index) in paginatedCards"
        :key="index"
      >
        <template #header>
          <div class="w-full aspect-square overflow-hidden rounded-lg">
            <img
              :src="card.img"
              :alt="`Paineis ${index + 1}`"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </template>
      </UPageCard>
    </UPageGrid>
  </div>

  <div class="flex justify-center items-center pt-8 sm:pt-10 pb-16 sm:pb-20 px-4">
    <UPagination 
      class="cursor-pointer"
      active-color="neutral"
      :total="100"
      v-model:page="page"
      :page-count="perPage"
      :max="5" 
    />
  </div>
</template>