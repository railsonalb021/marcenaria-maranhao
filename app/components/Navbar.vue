<script setup lang="ts"></script>

<template>
    <nav class="bg-white drop-shadow-md">
        <div class="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4">
            <div>
                <Slideover />
            </div>
            
            <div class="flex items-center space-x-3">
                <UTooltip text="Página do Instagram">
                    <NuxtLink target="_blank" to="https://www.instagram.com/rai.marcenariamaranhao/" class="text-black cursor-pointer block">
                        <Icon name="mdi:instagram" class="text-2xl sm:text-3xl hover:text-gray-600 transition-colors" />
                    </NuxtLink>
                </UTooltip>
                
                <UTooltip text="Contato do WhatsApp">
                    <NuxtLink target="_blank" to="https://wa.me/5521995890706" class="text-black cursor-pointer block">
                        <Icon name="mdi:whatsapp" class="text-2xl sm:text-3xl hover:text-gray-600 transition-colors" />
                    </NuxtLink>
                </UTooltip>
            </div>
        </div>
    </nav>
</template>