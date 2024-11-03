<template>
    <div class="pt-8">
        <div class="p-2 container mx-auto">
            <div class="item masonry-item flex items-center gap-2 mb-8">
                <h3 class="text-gray-800 font-semibold text-3xl md:text-4xl">Our Team</h3>
                <div class="border-gray-800 border-b-[1px] w-16"></div>
            </div>

            <swiper-container :breakpoints="{
                0: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3
                }
            }" free :pagination="{
                clickable: true
            }" :center-slides="true" slides-per-view="1" speed="500" loop="true">
                <swiper-slide class="pb-8" v-for="member of team">
                    <div class="flex flex-col items-center">
                        <div class="h-40 w-40 rounded-full overflow-hidden mb-2">
                            <img class="h-full w-full object-cover" :src="member.image" />
                        </div>
                        <h3 class="text-center font-bold text-gray-900 text-lg border-b">
                            {{ member.name }}
                        </h3>
                        <div class="px-4 text-gray-600 text-center flex items-center justify-center font-bold max-w-xs">
                            {{ member.position }}
                        </div>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>

        <div class="py-12 bg-green-900 relative">
            <div class="absolute inset-x-0 inset-y-8 z-10">
                <v-sparkline :gradient="['#eab308', '#ffd200', '#1feaea']" :line-width="0.5" :model-value="heartbeats"
                    :smooth="true" stroke-linecap="round" auto-draw></v-sparkline>
            </div>
            <div class="container mx-auto z-20 relative">
                <div class="flex-grow w-max mx-auto bg-green-950/75 p-4 rounded-xl">
                    <div class="max-w-[18rem] text-gray-200 mx-auto text-center text-lg">Data is the difference between
                        companies that
                        survice and those that
                        actually thrive.</div>
                    <div class="flex justify-center mt-4"><v-btn rounded="xl" variant="elevated"
                            color="rgb(250, 204, 21)" class="">
                            Get Started
                        </v-btn></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const heartbeats = ref<number[]>([])

const team = [
    {
        name: 'Naftal Rainer',
        position: 'Founder',
        image: 'https://cdn.pixabay.com/photo/2018/03/31/21/18/african-american-3279360_640.jpg',
    },
    {
        name: 'Vida Brenda',
        position: 'Director of Partnerships and Development',
        image: 'https://cdn.pixabay.com/photo/2023/08/24/21/48/ai-generated-8211716_640.jpg',
    },
    {
        name: 'Liam Smith',
        position: 'Chief Technology Officer',
        image: 'https://cdn.pixabay.com/photo/2018/03/31/21/18/african-american-3279360_640.jpg',
    },
];

onMounted(() => {
    heartbeats.value = new Array(20).fill(0).map(() => (Math.random() * 100) % 20)
})
</script>
<style lang="css" scoped>
</style>