<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue?: any
    placeholder?: string
    icon?: string
    disabled?: boolean
  }>(),
  {
    modelValue: undefined,
    placeholder: '',
    disabled: false,
    icon: '',
  },
)
const emit = defineEmits<{ (...args: any): void }>()
const input = useVModel(props, 'modelValue', emit, { passive: true })
</script>

<template>
  <div
    p="x-2 y-1"
    d-text-input flex items-center border d-border-base rounded focus-within:d-focus-base focus-within:border-context d-bg-base
  >
    <slot name="icon">
      <DIcon v-if="icon" :icon="icon" class="mr-0.4rem text-1.1em op50" />
    </slot>
    <select
      v-model="input"
      :disabled="disabled"
      class="w-full flex-auto d-bg-base !outline-none"
    >
      <option v-if="placeholder" value="" disabled hidden>
        {{ placeholder }}
      </option>
      <slot />
    </select>
  </div>
</template>
