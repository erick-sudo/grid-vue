<template>
    <div class="grid items-center" :style="outerWrapperStyles">
        <div :style="innerWrapperStyles">
            <div class="grid grid-cols-2">
                <div :style="sideStyles" class="bg-yellow-300 -skew-y-[45deg]"></div>
                <div :style="sideStyles" class="bg-lime-500 skew-y-[45deg]"></div>
            </div>
            <div class="grid grid-cols-2">
                <div :style="sideStyles" class="bg-lime-500 skew-y-[45deg]"></div>
                <div :style="sideStyles" class="bg-yellow-300 -skew-y-[45deg]"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    size: number
}>()

const outerWrapperStyles = {
    width: `${props.size * 2}px`,
    height: `${props.size * 3}px`
}

const innerWrapperStyles = {
    width: `${props.size * 2}px`
}

const sideStyles = {
    height: `${props.size}px`,
    width: `${props.size}px`
}
</script>

<style scoped lang="css"></style>
