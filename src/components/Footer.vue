<template>
    <v-footer class="">
        <div class="flex items-center justify-center flex-col w-full border-t pt-4 text-gray-500">
            <div>GRID ONLINE | Copyright &copy; {{ new Date().getFullYear() }}</div>
            <div class="flex flex-wrap justify-center gap-4 text-sm">
                <a v-for="(link, index) of links" :key="index">{{ link }}</a>
            </div>
        </div>
    </v-footer>
</template>
<script setup lang="ts">
const links = ["Terms of service", "Privacy policy", "Designed by: Algo software foundation"]
</script>
<style lang="css" scoped></style>