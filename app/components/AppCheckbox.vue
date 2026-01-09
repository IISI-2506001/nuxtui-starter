<template>
  <UCheckbox
    v-model="value"
    :disabled="isDisabled"
    :style="{ cursor: isDisabled ? 'not-allowed' : 'pointer' }"
  />
</template>

<script setup>
defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

const value = ref("indeterminate");
</script>
