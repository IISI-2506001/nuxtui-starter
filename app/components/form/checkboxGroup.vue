<template>
  <UCheckboxGroup
    v-model="innerValue"
    :items="props.options"
    :disabled="props.isDisabled"
    :name="props.name"
    :class="groupClass"
    v-bind="attrsFiltered"
  />
</template>

<script setup>
import { computed, useAttrs } from "vue";

const props = defineProps({
  modelValue: { type: Array, default: () => [] },
  options: { type: Array, required: true },
  name: String,
  isDisabled: Boolean,
});

const emit = defineEmits(["update:modelValue"]);
const attrs = useAttrs();

const innerValue = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

const attrsFiltered = computed(() => {
  const { options, disabled, name, ...rest } = attrs;
  return rest;
});

const groupClass = computed(() => [attrs.class || ""]);
</script>
