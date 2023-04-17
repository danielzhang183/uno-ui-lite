<script setup lang="ts">
// This components requires to run in DevTools to render correctly
import { renderMarkdown } from '../composables/markdown'

defineProps<{
  markdown: string
  tag?: string
}>()
</script>

<template>
  <template v-if="markdown && renderMarkdown">
    <component :is="tag || 'span'" class="n-markdown" v-html="renderMarkdown(markdown)" />
  </template>
  <template v-else>
    <component :is="tag || 'span'" class="n-markdown" v-text="markdown" />
  </template>
</template>
