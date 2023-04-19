<template>
  <RouterLink v-slot="slotProps" v-bind="props">
    <slot v-bind="slotProps" />
  </RouterLink>
</template>

<script lang="ts" setup>
  import { RouterLink } from 'vue-router'
  import type { RouterLinkProps } from 'vue-router'

  export interface AppLinkProps extends RouterLinkProps {}

  const props = defineProps<AppLinkProps>()
</script>
