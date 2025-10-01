<script setup lang="ts">
</script>

<template>
  <div class="relative">
    <div
      class="absolute inset-0 bg-center bg-cover opacity-40"
      style="background-image: url('/3.jpeg');"
    ></div>
    <div class="relative flex flex-col justify-center items-center px-40 pt-28">
      <PageCTA />
    </div>
    <div class="relative flex flex-col justify-center items-center pt-20 pb-40 px-60">
    </div>
  </div>
  <div class="flex flex-col justify-center items-center mt-20 mb-20">
        <h2 class="text-4xl text-black font-bold text-center mb-10">
          Nossos Trabalhos
        </h2>
        <p class="text-center text-black mb-10">
          Confira alguns dos nossos projetos recentes e inspire-se para o seu próximo projeto de marcenaria.
        </p>
        <div class="flex justify-center items-center pb-40">
          <Ucarousel />
         </div>
      </div>
</template>
