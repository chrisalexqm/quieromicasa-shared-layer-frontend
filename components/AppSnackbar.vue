<!-- SnackbarComponent.vue -->
<template>
  <v-snackbar v-model="localVisible" :timeout="timeout">
    <div class="flex items-center">
      <div class="w-full">
        {{ props.message }}
      </div>
      <div class="flex">
        <template v-if="props.action">
          <div class="h-[24px] translate-y-[-6px]">
            <v-btn variant="text" @click="props.action.onClick">{{
              props.action.text
            }}</v-btn>
          </div>
        </template>
        <template v-if="props.isDismissable">
          <div class="h-[24px] translate-y-[-12px]">
            <v-btn
              @click="closeSnackbar"
              color=""
              variant="text"
              icon
              class="rounded-3xl"
            >
              <Icon size="24px" name="i-material-symbols:close"></Icon>
            </v-btn>
          </div>
        </template>
      </div>
    </div>
  </v-snackbar>
</template>

<script lang="ts" setup>
const props = defineProps<{
  message: string
  modelValue: boolean
  action?: { text: string; onClick: () => void }
  isDismissable: boolean
  timeout: number
}>()
const emit = defineEmits(['update:modelValue'])

const localVisible = ref(props.modelValue)

watch(localVisible, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    emit('update:modelValue', newValue)
  }
})

watch(
  () => props.modelValue,
  (newValue) => {
    if (localVisible.value !== newValue) {
      localVisible.value = newValue
    }
  }
)

const closeSnackbar = () => {
  localVisible.value = false
}
</script>
