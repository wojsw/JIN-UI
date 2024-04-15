<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

import SButton from './../button/src/button';
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <s-button type="primary" size="small">small</s-button>
  <s-button type="primary" size="medium">medium</s-button>
  <s-button type="primary" size="large" disabled>large</s-button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
