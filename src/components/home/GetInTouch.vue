<template>
    <div class="">
        <div class="container mx-auto px-4 py-12">
            <h3 class="font-bold text-3xl mb-4">Get in touch.</h3>
            <h4 class="font-mono mb-4">Our awesome team cant't wait to hear from you.</h4>
            <div class="grid gap-x-4 gap-y-12 lg:grid-cols-2">
                <!-- Direct contact -->
                <div class="flex flex-col gap-4">
                    <div class="flex gap-4 items-center text-sm">
                        <span class="bg-yellow-200 rounded-full p-2 text-yellow-800">
                            <PhoneIcon class="h-6" />
                        </span>
                        <a href="tel:+254746217838">+254 746 217 838</a>
                    </div>
                    <div class="flex gap-4 items-center text-sm">
                        <span class="bg-yellow-200 rounded-full p-2 text-yellow-800">
                            <EnvelopeIcon class="h-6" />
                        </span>
                        <a href="mailto:info@gridonline.com">info@gridonline.com</a>
                    </div>
                    <div class="flex gap-4 items-center text-sm">
                        <span class="bg-yellow-200 rounded-full p-2 text-yellow-800">
                            <MapPinIcon class="h-6" />
                        </span>
                        <a href="">@Nairobi Garage, Delta Corner Annex, Ring Rd Westlands Ln,
                            Nairobi</a>
                    </div>

                    <div class="flex justify-between bg-yellow-400 p-4 gap-4 md:gap-4 rounded-[50px] my-4">
                        <span class="flex items-center ml-4 gap-2">
                            <FontAwesomeIcon class="h-8" :icon="faHashtag" />
                            <span class="font-bold">Follow</span>
                        </span>
                        <SocialLinks link-class="social-media-link" class="flex gap-2" />
                    </div>
                </div>

                <!-- Send email -->
                <div class="">
                    <div class="">
                        <h2 class="text-2xl font-bold text-gray-800 mb-2">We'd Love to Hear From You</h2>
                        <p class="text-gray-500">Whether you have a question, feedback, or just want to say hello, drop
                            us a message and we&apos;ll get back to you as soon as possible.</p>
                    </div>
                    <div class="grid p-4">
                        <h3>Talk to us:</h3>
                        <v-text-field clearable label="Full name" prepend-icon="fa-user"
                            variant="underlined"></v-text-field>
                        <v-text-field clearable label="Email address" prepend-icon="fa-envelope"
                            variant="underlined"></v-text-field>
                        <v-textarea :rows="3" clearable label="Message here" prepend-icon="fa-message"
                            variant="underlined"></v-textarea>

                        <v-btn color="rgb(250, 204, 21)" variant="elevated" rounded="xl">Send Message</v-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/vue/24/outline';
import SocialLinks from './SocialLinks.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>
<style lang="css">
.social-media-link {
    @apply bg-yellow-300 h-8 w-8 flex items-center justify-center rounded-full cursor-pointer shadow hover:shadow-md hover:shadow-black/50 hover:scale-105 hover:bg-black hover:text-white duration-300
}
</style>