<template>
  <v-dialog
    v-model="isDialogOpen"
    scrollable
    persistent
    :fullscreen="props.fullscreen"
    :width="fullscreen ? '100%' : width"
  >
    <v-defaults-provider
      :defaults="{ VBtn: { disabled: isActionsLoadingOrDisabled } }"
    >
      <v-card elevation="0">
        <div
          :class="{
            'p-6': !props.fullscreen,
            'p-2': props.fullscreen
          }"
          class="flex flex-col gap-4"
        >
          <div v-if="!fullscreen" class="flex items-center gap-2">
            <slot name="title">
              <h3 class="on-surface-text headline-small flex-grow">
                {{ title }}
              </h3>
            </slot>
            <v-btn
              v-if="showCloseButton"
              @click="closeDialog"
              color=""
              variant="text"
              icon
              class="rounded-3xl"
            >
              <Icon size="24px" name="i-material-symbols:close"></Icon>
            </v-btn>
          </div>
          <div v-else class="flex items-center">
            <v-btn
              v-if="showCloseButton || fullscreen"
              @click="closeDialog"
              color=""
              variant="text"
              icon
              class="rounded-3xl"
            >
              <Icon size="24px" name="i-material-symbols:close"></Icon>
            </v-btn>
            <slot name="title">
              <h3 class="on-surface-text title-large flex-grow">
                {{ title }}
              </h3>
            </slot>
            <div
              v-if="$slots['fullscreen-primary-action']"
              class="flex justify-end gap-2"
            >
              <slot name="fullscreen-primary-action"></slot>
            </div>
          </div>
          <slot name="text">
            <p v-if="props.text" class="on-surface-variant-text body-medium">
              {{ text }}
            </p>
          </slot>
        </div>
        <div v-if="props.showDividers" class="bg-qmc-outline-variant w-full h-[1px]" />
        <div
          class="overflow-scroll"
          :class="{
            'max-h-[480px]': !props.fullscreen,
            'flex-grow': props.fullscreen
          }"
        >
          <slot name="card-text"></slot>
        </div>
        <div v-if="props.showDividers" class="bg-qmc-outline-variant w-full h-[1px]" />
        <div
          v-if="$slots['primary-action'] || $slots['secondary-action']"
          class="flex justify-end gap-2 p-6"
        >
          <slot name="secondary-action"></slot>
          <slot name="primary-action"></slot>
        </div>
        <div v-if="$slots.buttons" class="flex justify-end gap-2 p-6">
          <slot name="buttons"></slot>
        </div>
      </v-card>
    </v-defaults-provider>
  </v-dialog>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: Boolean,
  title: String,
  text: String,
  width: { type: String, default: '480' },
  showCloseButton: { type: Boolean, default: false },
  isActionsLoadingOrDisabled: { type: Boolean, default: false },
  fullscreen: { type: Boolean, default: false },
  showDividers: { type: Boolean, default: false }
})
const emit = defineEmits(['update:modelValue', 'onClose'])

const isDialogOpen = computed({
  get: () => props.modelValue,
  set: (value) => {
    if (!value) {
      emit('onClose')
    }
    emit('update:modelValue', value)
  }
})

const closeDialog = () => {
  isDialogOpen.value = false
}
</script>
