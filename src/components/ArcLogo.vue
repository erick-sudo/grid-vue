<template>
    <div ref="canvasContainer" class="grid items-start grid-cols-2 w-max" :class="logoClasses"></div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, defineProps } from 'vue';

interface Point {
    x: number;
    y: number;
}

class Arc {
    constructor(
        private origin: Point,
        private radius: number,
        private startAngle: number,
        private endAngle: number,
        private counterClockwise: boolean
    ) { }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.arc(
            this.origin.x,
            this.origin.y,
            this.radius,
            this.startAngle,
            this.endAngle,
            this.counterClockwise
        );
    }

    setRadius(radius: number) {
        this.radius = radius;
    }
}

class QArc {
    origin!: Point;
    firstArc!: Arc;
    lastArc!: Arc;
    canvasRef: HTMLCanvasElement;

    constructor(
        private radius: number,
        private quadrant: 1 | 2 | 3 | 4,
        private fillStyle?: string
    ) {
        if (fillStyle) {
            this.fillStyle = fillStyle;
        }

        this.resetArcs(radius, quadrant);

        const canvas = document.createElement('canvas');
        canvas.width = radius;
        canvas.height = radius;

        this.canvasRef = canvas;
    }

    resetArcs(radius: number, quadrant: number) {
        this.firstArc = new Arc(
            quadrant === 1
                ? { x: 0, y: radius }
                : quadrant === 2
                    ? { x: radius, y: radius }
                    : quadrant === 3
                        ? { x: radius, y: 0 }
                        : { x: 0, y: 0 },
            radius,
            quadrant === 1
                ? -0.5 * Math.PI
                : quadrant === 2
                    ? Math.PI
                    : quadrant === 3
                        ? 0.5 * Math.PI
                        : 0,
            quadrant === 1
                ? 0
                : quadrant === 2
                    ? 1.5 * Math.PI
                    : quadrant === 3
                        ? Math.PI
                        : 0.5 * Math.PI,
            false
        );
        this.lastArc = new Arc(
            quadrant === 1
                ? { x: 0, y: radius }
                : quadrant === 2
                    ? { x: radius, y: radius }
                    : quadrant === 3
                        ? { x: radius, y: 0 }
                        : { x: 0, y: 0 },
            radius / 2,
            quadrant === 1
                ? 0
                : quadrant === 2
                    ? -0.5 * Math.PI
                    : quadrant === 3
                        ? Math.PI
                        : 0.5 * Math.PI,
            quadrant === 1
                ? 1.5 * Math.PI
                : quadrant === 2
                    ? Math.PI
                    : quadrant === 3
                        ? 0.5 * Math.PI
                        : 0,
            true
        );
    }

    resetRadius(newRadius: number) {
        this.radius = newRadius;
        this.resetArcs(newRadius, this.quadrant);
        this.canvasRef.width = this.radius;
        this.canvasRef.height = this.radius;
    }

    draw() {
        const ctx = this.canvasRef.getContext('2d');
        if (ctx && this.fillStyle) {
            ctx.fillStyle = this.fillStyle;
        }
        if (ctx) {
            ctx.beginPath();
            this.firstArc.draw(ctx);
            this.lastArc.draw(ctx);
            ctx.fill();
        }
    }
}

const props = defineProps<{
    size: number;
    logoClasses: string;
}>();

const canvasContainer = ref<HTMLElement | null>(null);
const arcs: Array<QArc> = [];

// Initialize arcs and append canvases
onMounted(() => {
    [2, 2, 4, 4].forEach((q, i) => {
        const arc = new QArc(
            props.size,
            q === 2 ? 2 : 4,
            i % 3 === 0 ? 'rgb(132, 204, 22)' : 'rgb(253, 224, 71)'
        );
        arcs.push(arc);
        arc.draw();
        canvasContainer.value?.appendChild(arc.canvasRef);
    });

    // Add classes to the container
    if (props.logoClasses?.length > 0) {
        props.logoClasses.split(/\s+/).forEach((c) => {
            canvasContainer.value?.classList.add(c);
        });
    }
});

// Redraw arcs when size changes
watch(() => props.size, (newSize) => {
    arcs.forEach((arc) => {
        arc.resetRadius(newSize);
        arc.draw();
    });
}, {
    deep: true,
    immediate: true
});
</script>

<style scoped lang="css">
/* Add any component-specific styles here */
</style>