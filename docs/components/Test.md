---
hello: world
---

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<jsw-button>Increment</jsw-button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>