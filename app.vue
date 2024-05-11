<template>
  <div>
    {{ test }}
    <BaseDialog v-model="test" show-close-button title="Bienvenido" text="Hola como estas">
    </BaseDialog>
    <v-btn @click="test = true">Open</v-btn>
    <div class="rounded-2xl bg-qmc-surface-bright p-8 m-8">
      <v-text-field label="Email"></v-text-field>
    </div>
  </div>
</template>
<script setup lang="ts">
const test = ref(false);
</script>
