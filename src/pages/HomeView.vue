<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
      <div class="flex items-center gap-4 text-sm grow justify-end p-2">
        <RouterLink to="" class="">Home</RouterLink>
        <RouterLink to="" class="">About</RouterLink>
        <RouterLink to="" class="">Services</RouterLink>
        <v-btn color="rgb(250, 204, 21)" variant="outlined" rounded="xl">Contact Us</v-btn>
      </div>
    </v-navigation-drawer>

    <div class="bg-gradient-to-bl from-green-900 to-gray-800 pb-[5rem] text-gray-200">
      <!-- Navigation Bar -->
      <NavigationBar @open-drawer="drawer = true" />

      <!-- Hero section -->
      <HeroSection />
    </div>

    <!-- Little about grid -->
    <LittleAboutGrid />

    <!-- Services -->
    <Services />

    <!-- Core values -->
    <CoreValues />

    <!-- News Letter -->
    <NewsLetter />

    <!-- Out Team -->
    <OurTeam />

    <!-- Getting in touch -->
    <GetInTouch />

    <!-- Footer -->
    <Footer />
    
  </v-app>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import CoreValues from '../components/home/CoreValues.vue';
import GetInTouch from '../components/home/GetInTouch.vue';
import HeroSection from '../components/home/HeroSection.vue';
import LittleAboutGrid from '../components/home/LittleAboutGrid.vue';
import NavigationBar from '../components/home/NavigationBar.vue';
import NewsLetter from '../components/home/NewsLetter.vue';
import Services from '../components/home/Services.vue';
import OurTeam from '../components/home/OurTeam.vue';
import Footer from '../components/Footer.vue';

const drawer = ref(false)

</script>
<style lang="css" scoped></style>