<template>
    <div>
        <div class="container mx-auto px-2 md:pl-8 grid gap-4">
            <div column-width=".masonry-item" v-masonry transition-duration="0.3s" item-selector=".item">
                <div class="item masonry-item flex items-center gap-2">
                    <h3 class="text-gray-800 font-semibold text-3xl md:text-4xl">What we offer</h3>
                    <div class="border-gray-800 border-b-[1px] w-16"></div>
                </div>

                <div v-masonry-tile v-for="(offer, index) of offers" class="item masonry-item" :key="index">
                    <div class="p-8 bg-gray-50 shadow rounded-xl md:ml-6 mt-6">
                        <div class="h-56 mb-4">
                            <img :src="offer.image" alt="Image" class="w-full h-full object-contain" />
                        </div>
                        <div class="flex items-center gap-3">
                            <span
                                class="h-10 w-10 bg-green-800 flex items-center justify-center rounded-full font-extrabold text-gray-200">
                                <FontAwesomeIcon :icon="offer.icon" />
                            </span>
                            <h3 class="text-lg font-semibold text-gray-800">
                                {{ offer.title }}
                            </h3>
                        </div>
                        <div>
                            <div class="p-2 text-lg">{{ offer.description }}</div>
                            <v-btn class="" variant="elevated" color="rgb(22, 101, 52)" rounded="xl">
                                Learn More
                            </v-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { faDatabase, faDigitalTachograph, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const offers =
    [
        {
            "title": "SEO & Analytics",
            "description": "Unlock the full potential of your online presence with tailored SEO strategies and comprehensive analytics. We’ll optimize your dashboards to ensure you’re tracking the right metrics, providing insights that help you make informed decisions. From keyword analysis to performance tracking, we equip you with the data you need to improve visibility and drive traffic to your site.",
            "image": "/svg/undraw_search_re.svg",
            "icon": faNetworkWired
        },
        {
            "title": "Data-Driven Strategies",
            "description": "Propel your business forward with our data-driven strategies. We analyze your current market position and leverage data analytics to identify opportunities for growth. By combining qualitative and quantitative insights, we’ll help you make strategic decisions that align with your business goals and enhance your competitive advantage.",
            "image": "/svg/undraw_financial_data.svg",
            "icon": faDatabase
        },
        {
            "title": "Digital Transformation",
            "description": "Embrace the future of business with our digital transformation services. We’ll help you understand your customers’ preferences and spending habits through advanced analytics and customer insights. By integrating innovative technologies and processes, we ensure that your business adapts to the digital landscape, enhancing customer experiences and driving sustainable growth.",
            "image": "/svg/undraw_digital_currency.svg",
            "icon": faDigitalTachograph
        },
    ];
</script>
<style lang="css" scoped>
.masonry-item {
    @apply w-full md:w-1/2 lg:w-1/3
}
</style>