<template>
    <div class="">
        <div class="container mx-auto px-2 md:pl-8 gap-4 py-[5em]">
            <div column-width=".masonry-item" v-masonry transition-duration="0.3s" item-selector=".item">

                <div v-masonry-tile class="item masonry-item p-4 hidden md:block">
                    <img class="h-auto w-[85%] object-contain" src="/svg/undraw_personal_information_re.svg" alt="" />
                </div>

                <div class="item masonry-item flex items-center gap-12 py-4">
                    <div>
                        <ArcLogo class="" :size="40" logo-classes="" />

                    </div>
                    <h3 class="text-gray-800 text-3xl md:text-4xl mb-12 font-semibold">
                        Little about <br /><span class="text-yellow-500 flex items-center gap-4">GRID<div
                                class="border-gray-800 border-b-[1px] w-16">
                            </div></span>
                    </h3>
                </div>

                <div v-masonry-tile class="item masonry-item px-4">
                    <div class="p-8 mt-4 bg-gray-50 shadow-md rounded-xl">
                        At <span class="text-black uppercase font-bold">Grid</span>, we believe in
                        data, and its power to guide decisions, spearhead inoovation, and
                        create lasting change.
                    </div>
                </div>

                <div v-masonry-tile class="item masonry-item p-4 min-h-96 hidden md:flex flex-col justify-end">
                    <img class="h-auto w-[85%] object-contain" src="/svg/undraw_success_factors_re.svg" alt="" />
                </div>

                <div v-masonry-tile class="item masonry-item px-4">
                    <div class="p-8 mt-4 bg-gray-50 shadow-md rounded-xl">
                        Our mission is to empower you with the information you need to make
                        informed decisions, optimize strategies, and drive growth in the
                        competitive landscape.
                    </div>
                </div>

                <div v-masonry-tile class="item masonry-item px-4">
                    <div class="p-8 mt-4 bg-gray-50 shadow-md rounded-xl">
                        With a passion for analytics and a commitment to excellence, our team
                        combines cutting-edge technology and industry expertise to deliver
                        tailored solutions.
                    </div>
                </div>
            </div>

            <!-- <div class="flex-grow">
                <div class="flex p-4 flex-col mx-auto">
                    <div class="grid gap-8 text-lg">
                        <p class="max-w-lg p-8 mt-4 bg-gray-50 shadow-md rounded-xl">
                            At <span class="text-black uppercase font-bold">Grid</span>, we believe in
                            data, and its power to guide decisions, spearhead inoovation, and
                            create lasting change.
                        </p>
                        <p class="max-w-lg p-8 bg-gray-50 shadow-md rounded-xl">
                            Our mission is to empower you with the information you need to make
                            informed decisions, optimize strategies, and drive growth in the
                            competitive landscape.
                        </p>
                        <p class="max-w-lg p-8 bg-gray-50 shadow-md rounded-xl">
                            With a passion for analytics and a commitment to excellence, our team
                            combines cutting-edge technology and industry expertise to deliver
                            tailored solutions.
                        </p>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script setup lang="ts">
import ArcLogo from '../ArcLogo.vue';

</script>
<style lang="css" scoped>
.masonry-item {
    @apply w-full md:w-1/2 lg:w-1/3
}
</style>