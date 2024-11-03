<template>
    <nav class="p-2">
        <div class="container mx-auto flex items-center">
            <div class="flex items-center gap-2">
                <Logo :size="32" class="" />
                <div class="text-sm grid">
                    <div class="uppercase font-semibold text-gray00 border-gray-400 border-b-[1px] px-2">Grid Online
                    </div>
                    <div class="text-gr-200 px-2">Align your vision</div>
                </div>
            </div>
            <div class="hidden md:flex items-center gap-4 text-sm grow justify-end">
                <RouterLink to="" class="">Home</RouterLink>
                <RouterLink to="" class="">About</RouterLink>
                <RouterLink to="" class="">Services</RouterLink>
                <v-btn color="rgb(250, 204, 21)" variant="outlined" rounded="xl">Contact Us</v-btn>
            </div>

            <div class="md:hidden flex justify-end grow">
                <button @click="requestDrawer" class="shadow bg-green-950/30 p-2 rounded-lg hover:bg-yellow-500/30 hover:text-yellow-500 duration-300">
                    <Bars4Icon class="h-6" />
                </button>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
import Logo from '../Logo.vue';
import { Bars4Icon } from '@heroicons/vue/16/solid';

const emit = defineEmits<{
    (e: 'openDrawer'): void
}>()

const requestDrawer = () => {
    emit("openDrawer")
}

</script>
<style lang="css" scoped></style>