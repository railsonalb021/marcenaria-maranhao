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
      class="bg-white max-w-3xl max-h-96" 
      v-model:open="isOpen" 
      title="Entre em contato">
    <template #body>
      <div class="flex flex-col justify-center items-center space-y-7 mb-10">
        <div class="grid grid-cols-3 gap-x-64 space-y-5 px-10">
          <div class="col-span-3 mb-5 text-center">
            <h1 class="text-2xl text-black font-bold">Dados Pessoais</h1>
          </div>
          <div class="col-span-1">
            <UFormField :ui="{ label: 'text-black' }" label="Nome">
              <UInput :ui="{base: 'text-white bg-white placeholder:text-slate-800'}"  class="w-72" placeholder="Nome" v-model="state.nome" />
            </UFormField>
          </div>
          <div class="col-span-1">
            <UFormField :ui="{ label: 'text-black' }" label="Email">
              <UInput :ui="{base: 'text-white bg-white placeholder:text-slate-800'}"  class="w-72" placeholder="Email" v-model="state.email" />
            </UFormField>
          </div>
            <div class="flex col-span-3 gap-x-3">
              <UFormField :ui="{ label: 'text-black' }" label="Telefone">
                <UInput :ui="{base: 'text-white bg-white placeholder:text-slate-800'}"  class="w-72" placeholder="Telefone" v-model="state.telefone" />
              </UFormField>

              <UFormField :ui="{ label: 'text-black' }" label="Telefone">
                <UInput :ui="{base: 'text-white bg-white placeholder:text-slate-800'}"  class="w-72" placeholder="Telefone" v-model="state.telefone" />
              </UFormField>
            </div>
        </div>
            <div>
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
      </div>
    </template>
  </UModal>
</template>
