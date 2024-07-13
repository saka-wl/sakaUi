<script lang="ts">
export default {
    name: "Button"
}
</script>

<script setup lang="ts">
const props = defineProps({
    message: {
        type: String,
        default: "按钮"
    },
    type: {
        type: String,
        default: 'primary'
    },
    height: {
        type: Number || String,
        default: 30
    },
    width: {
        type: Number || String,
        default: 130
    },
    borderRadius: {
        type: Number || String,
        default: 5
    },
    fontSize: {
        type: Number || String,
        default: 15
    }
})

const getFinalPx = (val: number | string) => {
    if (typeof val === 'string' && val.includes('px')) {
        return val
    }
    return val + 'px'
}

const finalPx = () => {
    return {
        height: getFinalPx(props.height),
        width: getFinalPx(props.width),
        borderRadius: getFinalPx(props.borderRadius),
        fontSize: getFinalPx(props.fontSize)
    }
}

</script>

<template>
    <div class="box">
        <button class="button" :class="[props.type]" :style="finalPx()">
            <slot>{{ props.message }}</slot>
        </button>
    </div>
</template>

<style scoped>
.button {
    border-radius: 5px;
}

.primary {
    color: rgb(255, 255, 255);
    background-color: rgb(22, 119, 255);
    border-color: rgb(22, 119, 255);
}

.primary:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(64, 150, 255);
    border-color: rgb(64, 150, 255);
}

.normal {
    color: rgb(57, 57, 57);
    background-color: rgb(255, 255, 255);
    border-color: rrgb(217, 217, 217);
}

.normal:hover {
    color: rgb(64, 150, 255);
    background-color: rgb(255, 255, 255);
    border-color: rgb(64, 150, 255);
}
</style>