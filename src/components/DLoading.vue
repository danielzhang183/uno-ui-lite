<template>
  <div class="d-loading d-panel-grids">
    <div class="flex flex-col animate-pulse items-center text-lg">
      <div class="i-carbon-circle-dash animate-spin text-4xl op50" />
      <slot>
        Loading...
      </slot>
    </div>
  </div>
</template>
