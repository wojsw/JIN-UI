<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()


</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
