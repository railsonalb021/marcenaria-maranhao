<script setup lang="ts">
const toast = useToast()
const isOpen = ref(false)

const links = [
  {
    label: 'Faça seu orçamento',
    color: 'neutral',
    variant: 'subtle',
  }
]

const state = ref<ContactForm>({
  name: '',
  email: '',
  telefone: '',
})

function showtoast(){
  toast.add({
    title: 'Obrigado pelo contato!',
    description: 'Em breve entraremos em contato.',
    icon: 'i-lucide-check-circle',
    color: 'neutral',
  })
}
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
        class="bg-transparent text-black py-2 px-6 hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-300 ease-in-out"
        label="Faça seu orçamento"
        color="neutral"
        variant="subtle"
        trailing-icon="i-lucide-arrow-right"
      />
      <UButton
        class="py-2 px-6 cursor-pointer transition-all duration-300 ease-in-out"
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
            <UFormField label="Nome">
              <UInput :ui="{base: 'text-white bg-white placeholder:text-slate-800 focus:ring-0 focus:outline-none'}"  class="w-96" placeholder="placeholder" v-model="state.nome" />
            </UFormField>
            <UFormField label="Email">
              <UInput :ui="{base: 'text-white bg-white placeholder:text-slate-800 focus:ring-0 focus:outline-none'}"  class="w-96" placeholder="placeholder" v-model="state.email" />
            </UFormField>
            <UFormField label="Telefone">
              <UInput :ui="{base: 'text-white bg-white placeholder:text-slate-800 focus:ring-0 focus:outline-none'}"  class="w-96" placeholder="placeholder" v-model="state.telefone" />
            </UFormField>
            <UButton 
              class="cursor-pointer w-96 flex text-center justify-center"
              type="submit"
              color="neutral"
              variant="subtle"
              trailing-icon="i-lucide-arrow-right"
              @click="showtoast">
              Enviar
            </UButton>
      </div>
    </template>
  </UModal>
</template>
