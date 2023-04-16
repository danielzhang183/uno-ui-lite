<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue?: boolean
    disabled?: boolean
  }>(),
  {
    modelValue: true,
    disabled: false,
  },
)
const emit = defineEmits<{ (...args: any): void }>()
const checked = useVModel(props, 'modelValue', emit, { passive: true })
</script>

<template>
  <label
    class="d-switch d-switch-base d-disabled:d-disabled"
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
    <div class="d-switch-slider d-checked:d-switch-slider-checked peer-active:d-active-base peer-focus-visible:d-focus-base d-transition">
      <div class="d-checked:d-switch-thumb-checked d-switch-thumb d-transition" />
    </div>
    <slot />
  </label>
</template>
