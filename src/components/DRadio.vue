<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    disabled?: boolean
    name?: string
    value?: string
  }>(),
  {
    modelValue: '',
    disabled: false,
  },
)
const emit = defineEmits<{ (...args: any): void }>()
const model = useVModel(props, 'modelValue', emit, { passive: true })
</script>

<template>
  <label
    class="d-radio hover:d-radio-hover inline-flex select-none items-center d-disabled:d-disabled"
    :checked="model === value || null"
    :disabled="disabled || null"
  >
    <input
      v-model="model"
      type="radio"
      class="peer absolute op0"
      :disabled="disabled"
      :name="name"
      :value="value"
      @keypress.enter="model = value!"
    >
    <span class="d-radio-box d-checked:d-radio-box-checked peer-active:d-active-base peer-focus-visible:d-focus-base d-transition">
      <div class="d-radio-inner d-checked:d-radio-inner-checked d-transition" />
    </span>
    <span><slot /></span>
  </label>
</template>
