<template>
  <USwitch
    v-model="value"
    :color="color"
    :size="size"
    :label="label"
    :disabled="isDisabled"
    :class="class"
  />
</template>

<script setup>
defineProps({
  color: { type: String, default: "primary" },
  size: { type: String, default: "md" },
  isDisabled: Boolean,
  class: String,
});
</script>
