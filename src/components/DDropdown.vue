<script setup lang="ts">
const props = defineProps<{ modelValue?: boolean }>()
const emit = defineEmits<{ (...args: any): void }>()

const enabled = useVModel(props, 'modelValue', emit, { passive: true })
const el = ref<HTMLDivElement>()
</script>

<template>
  <div ref="el" class="relative">
    <slot name="trigger">
      <DButton @click="enabled = !enabled" />
    </slot>

    <div
      class="absolute z-10 border d-border-base rounded shadow d-transition d-bg-base"
      :class="[enabled ? 'op-100' : 'op0 pointer-events-none -translate-y-1']"
    >
      <slot />
    </div>
  </div>
</template>
