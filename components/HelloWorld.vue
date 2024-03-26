<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <div>
    <h1 class="bg-[#ff0000]">Hello World!</h1>
    <pre>{{ myLayer }}</pre>
  </div>
</template>
