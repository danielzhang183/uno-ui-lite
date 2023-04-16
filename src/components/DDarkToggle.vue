<script setup lang="ts">
import { computed } from 'vue'
import { useToggle } from '@vueuse/core'

const mode = useColorMode()
const isDark = computed<boolean>({
  get() {
    return mode.value === 'dark'
  },
  set() {
    // @ts-expect-error need
    mode.preference = isDark.value ? 'light' : 'dark'
  },
})
const toggle = useToggle(isDark)
const context = {
  mode,
  isDark,
  toggle,
}
</script>

<template>
  <ColorScheme tag="span">
    <slot v-bind="context" />
  </ColorScheme>
</template>
