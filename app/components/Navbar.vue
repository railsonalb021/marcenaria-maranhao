<script setup lang="ts"></script>

<template>
    <nav class="bg-white p-4">
        <div class="flex justify-between items-center px-10">
            <div>
                <Slideover />
            </div>
            <div>
                <NuxtLink to="/">
                <h1 class="text-2xl cursor-pointer mr-24 text-black">
                Marcenaria Maranhão
                </h1>
                </NuxtLink>
            </div>
            <div class="space-x-2">
                <NuxtLink to="/" class="text-black cursor-pointer">
                    <Icon name="mdi:home-outline" class="text-3xl text-black hover:text-gray-600 cursor-pointer" />
                </NuxtLink>
                <NuxtLink target="_blank" to="https://www.instagram.com/rai.marcenariamaranhao/" class="text-black cursor-pointer">
                    <Icon name="mdi:instagram" class="text-3xl hover:text-gray-600 text-black cursor-pointer" />
                </NuxtLink>
                <NuxtLink target="_blank" to="https://wa.me/5521995890706" class="text-black cursor-pointer">
                    <Icon name="mdi:whatsapp" class="text-3xl hover:text-gray-600 text-black cursor-pointer" />
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>