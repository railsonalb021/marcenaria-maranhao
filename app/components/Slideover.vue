<script setup lang="ts">
const isOpen = ref(false)

const route = useRoute()
watch(() => route.fullPath, () => {
  isOpen.value = false
})
</script>

<template>
  <USlideover
    v-model:open="isOpen"
    side="left"
    title="Catalógo de Móveis"
    :ui="{
      content: 'fixed bg-white flex flex-col focus:outline-none',
      title: 'font-sans font-normal text-black'
    }"
    :close="{
      color: 'neutral',
      variant: 'subtle',
      class: 'bg-transparent text-black ease-out transition-all duration-300 hover:bg-gray-100'
    }"
    class="custom-slideover"
  >
    <UButton icon="i-lucide-menu" class="text-xl cursor-pointer" label="Catalógo de Móveis" color="neutral" @click="isOpen = true" />

    <template #body>
        <div class="h-screen rounded-xl">
        <h2 class="pt-5 pl-3 text-2xl pb-2 text-black">Portas</h2>
        <ul class="pl-5 flex text-gray-500 text-xl">
            <li class="pb-2 hover:text-black ease-out transition-all duration-300 cursor-pointer">Portas de veneziana</li>
            <Icon name="i-lucide-chevron-right" class="inline-block ml-2 mt-1" />
        </ul>
        <ul class="pl-5 flex text-gray-500 text-xl">
            <li class="pb-2 hover:text-black ease-out transition-all duration-300 cursor-pointer">Portas de correr</li>
            <Icon name="i-lucide-chevron-right" class="inline-block ml-2 mt-1" />
        </ul>
        <h2 class="pt-5 pl-3 text-2xl pb-2 text-black">Armários</h2>
        <NuxtLink to="/armarioscozinha">
        <ul class="pl-7 flex text-gray-500 text-xl">
            <li class="pb-2 hover:text-black ease-out transition-all duration-300 cursor-pointer">Armários de cozinha</li>
            <Icon name="i-lucide-chevron-right" class="inline-block ml-2 mt-1" />
        </ul>
        </NuxtLink>
        <ul class="pl-7 flex text-gray-500 text-xl">
            <li class="pb-2 hover:text-black ease-out transition-all duration-300 cursor-pointer">Armários de banheiro</li>
            <Icon name="i-lucide-chevron-right" class="inline-block ml-2 mt-1" />
        </ul>
        <ul class="pl-7 flex text-gray-500 text-xl">
            <li class="pb-2 hover:text-black ease-out transition-all duration-300 cursor-pointer">Armários de quarto</li>
            <Icon name="i-lucide-chevron-right" class="inline-block ml-2 mt-1" />
        </ul>
            </div>
      <Placeholder class="h-full" />
    </template>
  </USlideover>
</template>
