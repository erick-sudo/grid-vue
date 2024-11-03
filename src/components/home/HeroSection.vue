<template>
    <div class="container mx-auto px-2">
        <div class="flex flex-col gap-4 md:flex-row">
            <div class="flex flex-col gap-6 items-start pl-8 py-8">
                <h1 class="text-4xl md:text-5xl font-extrabold title-text-shadow text-gray-200">
                    <span>GRID</span>-<span>ONLINE</span>
                </h1>
                <h2 class="text-3xl sm:text-4xl grid font-semibold">
                    <span class="text-yellow-500">Empowering Brands</span>
                    <span class="">to Thrive in the Digital Age</span>
                </h2>
                <p class="text-lg sm:text-xl max-w-lg">
                    We leverage the power of data, creativity, and innovation to help brands connect, engage, and grow.
                    Let
                    us
                    take
                    your brand to new heights with digital strategies built for the future.
                </p>

                <v-btn rounded="xl" variant="elevated" color="rgb(250, 204, 21)"
                    class="text-lg shadow-lg hover:shadow-xl">
                    Get Started
                </v-btn>

                <SocialLinks link-class="social-media-links border" class="flex gap-2" />
            </div>
            <div class="flex-grow flex items-center justify-center">
                <v-carousel show-arrows="hover" cycle hide-delimiter-background>
                    <v-carousel-item v-for="({ title, image }, i) in slides" :key="i">
                        <v-sheet color="transparent" height="85%" width="85%" :style="{ margin: '0 auto' }">
                            <div
                                class="flex h-full justify-center items-center rounded-xl overflow-hidden text-yellow-300">
                                <img class="h-[85%] w-[85%] object-contain" :src="image" :alt="title" />
                            </div>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </div>
        </div>

        <v-sparkline :gradient="['#eab308', '#ffd200', '#1feaea']" :line-width="3" :model-value="heartbeats"
            :smooth="true" stroke-linecap="round" auto-draw></v-sparkline>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SocialLinks from './SocialLinks.vue';

const slides = [
    { image: "/svg/undraw_all_the_data_re.svg", title: "" },
    { image: "/svg/undraw_data_re.svg", title: "" },
    { image: "/svg/undraw_data_points.svg", title: "" },
    { image: "/svg/undraw_data_processing.svg", title: "" },
    { image: "/svg/undraw_data_trends_re.svg", title: "" }
]

const heartbeats = ref<number[]>([])


onMounted(() => {
    heartbeats.value = new Array(20).fill(0).map(() => (Math.random() * 100) % 10)
})

</script>
<style lang="css">
.title-text-shadow {
    text-shadow: 4px 6px 2px rgba(0, 0, 0, .5);
}

.social-media-links {
    @apply h-10 w-10 flex items-center justify-center rounded-full cursor-pointer shadow hover:shadow-md hover:shadow-black/50 hover:scale-105 hover:bg-black hover:text-white duration-300
}
</style>