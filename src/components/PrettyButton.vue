<template>
  <button
    class="w-40 h-16 m-7 p-5 text-lg leading-none text-white text-center rounded-[5px] btn-shading-bn"
    :class="
      !props.active
        ? 'bg-mist cursor-not-allowed'
        : 'bg-midnight cursor-pointer'
    "
    :disabled="!props.active"
    @click="emit('click-one')"
  >
    <slot>Add to Cart</slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{ active: boolean }>()

const emit = defineEmits<{
  'click-one': []
}>()
</script>

<style scoped></style>
