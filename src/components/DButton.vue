<script setup lang="ts">
import DLink from './DLink.vue'

defineProps<{
  to?: string
  icon?: string
}>()
</script>

<template>
  <Component
    :is="to ? DLink : 'botton'"
    :to="to"
    v-bind="$attrs"
    class="d-button d-button-base active:d-button-active focus-visible:d-focus-base d-transition hover:d-button-hover d-disabled:d-disabled"
  >
    <slot name="icon">
      <DIcon v-if="icon" :icon="icon" class="d-button-icon" />
    </slot>
    <slot />
  </Component>
</template>
