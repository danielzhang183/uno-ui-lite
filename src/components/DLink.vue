<script setup lang="ts">
defineProps<{
  to?: string
  href?: string
  target?: string
}>()
</script>

<template>
  <Component
    :is="href || target ? 'a' : 'a'"
    v-bind="$props"
    class="d-link hover:d-link-hover d-transition d-link-base"
  >
    <slot />
  </Component>
</template>
