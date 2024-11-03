<template>
    <div>
        <a :href="href" :title="title" v-for="{ title, icon, href } of links" :class="linkClass">
            <FontAwesomeIcon :icon="icon" />
        </a>
    </div>
</template>

<script setup lang="ts">
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps<{ linkClass?: string }>()

const links = [
    { title: "LinkedIn", icon: faLinkedinIn, href: "" },
    { title: "Facebook", icon: faFacebookF, href: "" },
    { title: "X", icon: faXTwitter, href: "" },
    { title: "Instagram", icon: faInstagram, href: "" },
]
</script>

<style lang="css" scoped></style>