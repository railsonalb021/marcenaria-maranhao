<script setup lang="ts">
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white overflow-hidden">
    <div class="absolute inset-0">
      <img src="/paginaprincipal/fotoprincipal.jpeg" class="w-full h-full object-cover opacity-20" />
    </div>

    <div class="relative z-10 text-center px-4 sm:px-6 md:px-10">
      <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight">
        <span class="block">Marcenaria</span>
        <span class="block text-white">Maranhão</span>
      </h1>

      <p class="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto px-4">
        Móveis planejados que unem design, sofisticação e durabilidade.
      </p>

      <button class="mt-6 sm:mt-8 md:mt-10 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-300 transition-all duration-300 text-sm sm:text-base">
        Solicitar orçamento
      </button>
    </div>
  </section>

  <section class="bg-white py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-32">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-800 leading-tight text-center md:text-left">
        Criamos móveis sob medida que transformam seu ambiente
      </h2>

      <p class="text-base sm:text-lg text-zinc-600 leading-relaxed text-center md:text-left">
        Desenvolvemos armários para quartos, cozinhas e banheiros, além da fabricação
        de portas com acabamento premium, sempre priorizando qualidade, estética e
        funcionalidade.
      </p>
    </div>
  </section>

  <section class="bg-zinc-100 py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-32">
    <div class="max-w-7xl mx-auto">
      <div class="mb-12 sm:mb-16 md:mb-20 text-center md:text-left">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-800">
          Móveis planejados
        </h2>
        <p class="text-zinc-600 mt-2 sm:mt-4 max-w-2xl text-base sm:text-lg mx-auto md:mx-0">
          Cada móvel é pensado para unir funcionalidade, estética e durabilidade.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2">
        <div class="relative group overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl h-[300px] sm:h-[500px] md:h-[580px] lg:h-[620px]">
          <img
            src="/paginaprincipal/fototres.jpeg"
            alt="Cozinha planejada"
            class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
            <NuxtLink to="/armarioscozinha" class="cursor-pointer">
              <h3 class="text-xl sm:text-2xl font-semibold">Armários de Cozinha</h3>
            </NuxtLink>
            <p class="text-xs sm:text-sm text-zinc-200 mt-1 sm:mt-2">
              Design moderno com acabamento premium.
            </p>
          </div>
        </div>

        <div class="relative group overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl row-span-1 md:row-span-2 h-[400px] sm:h-[500px] md:h-[580px] lg:h-[620px]">
          <img
            src="/paginaprincipal/fotoseis.jpeg"
            alt="Armário de quarto"
            class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
            <NuxtLink to="/armariosquarto" class="cursor-pointer">
              <h3 class="text-xl sm:text-2xl font-semibold">Armários de quarto</h3>
            </NuxtLink>
            <p class="text-xs sm:text-sm text-zinc-200 mt-1 sm:mt-2">
              Aproveitamento total do espaço.
            </p>
          </div>
        </div>

        <div class="relative group overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl h-[400px] sm:h-[500px] md:h-[580px] lg:h-[620px]">
          <NuxtLink to="/armarios" class="cursor-pointer">
          <img
            src="/paginaprincipal/fotoquatro.jpeg"
            alt="Banheiro planejado"
            class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            loading="lazy"
          />
          </NuxtLink>
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
              <h3 class="text-xl sm:text-2xl font-semibold">Armário de banheiro</h3>
            <p class="text-xs sm:text-sm text-zinc-200 mt-1 sm:mt-2">
              Funcionalidade com sofisticação.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>