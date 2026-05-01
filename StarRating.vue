<script setup lang="ts">
defineProps<{
  filled: number
}>()
</script>

<template>
  <span class="stars" aria-hidden="true">
    <svg
      v-for="index in 5"
      :key="index"
      viewBox="0 0 18 17"
      :class="{ 'is-empty': index > filled }"
      focusable="false"
    >
      <path
        d="M8.99 1.05 11.4 5.9l5.36.78-3.88 3.77.92 5.34-4.8-2.52-4.78 2.52.91-5.34-3.88-3.77 5.36-.78 2.38-4.85Z"
      />
    </svg>
  </span>
</template>
