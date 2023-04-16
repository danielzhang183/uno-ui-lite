<script setup lang="ts">
const props = defineProps<{
  to?: string
  icon: string
}>()
</script>

<template>
  <Component
    :is="to ? 'a' : 'button'"
    :to="to"
    v-bind="$attrs"
    class="n-transition n-icon-button"
  >
    <DIcon :icon="props.icon" />
  </Component>
</template>
