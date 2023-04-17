<script setup lang="ts">
// This components requires to run in DevTools to render correctly
import type { Lang } from 'shiki-es'
import { computed } from 'vue'
import { renderCodeHighlight } from '../composables/shiki'

const props = withDefaults(
  defineProps<{
    code: string
    lang?: string
    lines?: boolean
  }>(), {
    lines: true,
  },
)
const rendered = computed(() => renderCodeHighlight(props.code, props.lang as Lang) || { code: props.code, supported: false })
</script>

<template>
  <template v-if="lang && rendered.supported">
    <pre
      class="d-code-block"
      :class="lines ? 'd-code-block-lines' : ''"
      v-html="rendered.code"
    />
  </template>
  <template v-else>
    <pre
      class="d-code-block"
      :class="lines ? 'd-code-block-lines' : ''"
    >
      <pre class="shiki">
        <code>
          <template v-for="line, _idx in code.split('\n')" :key="_idx">
            <span class="line" v-text="line" /><br>
          </template>
        </code>
      </pre>
    </pre>
  </template>
</template>

<style>
.d-code-block-lines .shiki code {
  counter-reset: step;
  counter-increment: step calc(var(--start, 1) - 1);
}

.d-code-block-lines .shiki code .line::before {
  content: counter(step);
  counter-increment: step;
  width: 2rem;
  padding-right: 0.5rem;
  margin-right: 0.5rem;
  display: inline-block;
  text-align: right;
  --at-apply: text-truegray:50;
}
</style>
