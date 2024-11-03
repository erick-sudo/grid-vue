<template>
    <div class="py-12">
        <div class="container mx-auto px-2 md:pl-8">
            <div class="flex items-center gap-2 mb-8">
                <h3 class="text-gray-800 font-semibold text-3xl md:text-4xl">Why Choose GRID?</h3>
                <div class="border-gray-800 border-b-[1px] w-16"></div>
            </div>

            <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                <div class="bg-gray-50 border-[1px] hover:shadow-lg hover:scale-105 duration-300 rounded-xl flex flex-col gap-3" v-for="({ title, desc, image }, index) of values"
                    :key="index">
                    <div class="p-3 h-48">
                        <img class="w-[90%] h-full rounded-xl object-contain" :src="image" />
                    </div>
                    <div class="px-6 pb-6">
                        <h3 class="text-xl text-gray-700 font-bold">{{ title }}</h3>
                        <div class="mt-2">{{ desc }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const values = [
    {
        "title": "Customer Satisfaction",
        "desc": "This is the Bedrock of our establishment.We are poised to always maximall satisfy our customers.",
        "image": "/svg/undraw_customer_survey_re.svg"
    },
    {
        "title": "Loyalty",
        "desc": "We do not compromise quality and trust. We make sure we keep up with our customers' need.",
        "image": "/svg/undraw_game_day.svg"
    },
    {
        "title": "Quality",
        "desc": "We provide only industry standard product and services to our clients, partnes, and customers.",
        "image": "/svg/undraw_for_review.svg"
    },
    {
        "title": "Feedback",
        "desc": "We consider feedback as the most important tool for improvement and take every detail into consideration.",
        "image": "/svg/undraw_design_feedback_re.svg"
    }
]
</script>
<style lang="css" scoped></style>