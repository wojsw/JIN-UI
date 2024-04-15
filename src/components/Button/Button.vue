<template>
  <button :class="['jsw-button', type ? 'jsw-button--' + type : '']">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: "jsw-button"
})
defineProps({
  type: { type: String, default: "default" }
})
</script>
