<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    modelValue?: boolean
    disabled?: boolean
  }>(),
  {
    modelValue: false,
    disabled: false,
  },
)
const emit = defineEmits<{ (...args: any): void }>()
const checked = useVModel(props, 'modelValue', emit, { passive: true })
</script>

<template>
  <label
    class="hover:d-checkbox-hover d-checkbox select-none items-center d-disabled:d-disabled"
    :checked="checked || null"
    :disabled="disabled || null"
  >
    <input
      v-model="checked"
      type="checkbox"
      class="peer absolute op0"
      :disabled="disabled"
      @keypress.enter="checked = !checked"
    >
    <span
      class="d-checkbox-box d-checked:d-checkbox-box-checked peer-active:d-active-base peer-focus-visible:d-focus-base d-transition"
    >
      <DIcon
        class="d-checkbox-icon scale-0 transform op0 d-transition d-checked:scale-100 d-checked:op100"
      />
    </span>
    <span :class="checked ? '' : 'op50'" class="n-transition"><slot /></span>
  </label>
</template>
