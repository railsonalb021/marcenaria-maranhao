<script setup lang="ts">
const isOpen = ref(false)

const links = [
  {
    label: 'Faça seu orçamento',
    color: 'neutral',
    variant: 'subtle',
  }
]
</script>

<template>
  <UPageCTA
    title="Venha conhecer a maior marcenaria da zona norte!"
    description="Fazemos móveis planejados, instalações de portas, etc."
    orientation="horizontal"
    color="neutral"
    variant="solid"
    :links="links"
  >
    <img
      src="/3.jpeg"
      width="100"
      height="100"
      alt="Illustration"
      class="w-full rounded-lg"
    />

    <template #links>
      <UButton
        label="Faça seu orçamento"
        color="neutral"
        variant="subtle"
        trailing-icon="i-lucide-arrow-right"
      />
      <UButton
        label="Entre em contato"
        color="neutral"
        variant="subtle"
        trailing-icon="i-lucide-arrow-right"
        @click="isOpen = true"
      />
    </template>
  </UPageCTA>

  <UModal :ui="{title: 'font-sans text-black'}" 
      :close="{
      color: 'neutral',
      variant: 'subtle',
      class: 'bg-transparent text-black ease-out transition-all duration-300 hover:bg-gray-100'}" 
      class="bg-white" 
      v-model:open="isOpen" 
      title="Entre em contato">
    <template #body>
      <div class="flex flex-col justify-center items-center space-y-7 mb-10">
        <Input id="aaaa" placeholder="Nome" class="text-white" label="Nome" />
        <Input id="aaaa" placeholder="Telefone" class="text-white" label="Telefone" />
        <Input id="aaaa" placeholder="E-mail" class="text-white" label="E-mail" />
      </div>
    </template>
  </UModal>
</template>
