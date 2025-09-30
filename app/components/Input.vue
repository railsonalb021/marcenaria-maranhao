<script setup lang="ts">
defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  placeholder: { type: String, default: '' },
})

const model = defineModel<string>()

</script>

<template>
    <div>
        <label :for="id" class="block pb-3 text-sm font-medium text-black">
        {{ label }}</label>
        <UInput :ui="{base: 'text-white placeholder:text-white focus:ring-0 focus:outline-none'}"  class="w-60" :id="id" :placeholder="placeholder" v-model="model" />
    </div>
</template>