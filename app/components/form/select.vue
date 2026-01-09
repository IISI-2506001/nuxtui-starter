<template>
  <USelectMenu
    v-model="innerValue"
    multiple
    :items="props.options"
    :placeholder="props.placeholder"
    :size="props.size"
    :color="props.color"
    :disabled="props.isDisabled"
    :virtual="props.virtual"
    :virtual-items="props.virtualItems"
    :class="selectClass"
    v-bind="attrsFiltered"
    tags
  />
</template>

<script setup>
import { computed, useAttrs } from "vue";

const props = defineProps({
  modelValue: { type: Array, default: () => [] }, // 存 value
  options: { type: Array, required: true }, // [{ label, value }]
  placeholder: { type: String, default: "請選擇" },
  size: { type: String, default: "md" },
  color: { type: String, default: "primary" },
  isDisabled: Boolean,
  virtual: { type: Boolean, default: false },
  virtualItems: { type: Number, default: 20 },
});

const emit = defineEmits(["update:modelValue"]);
const attrs = useAttrs();

/* v-model wrapper，轉 value ↔ object */
const innerValue = computed({
  get() {
    // 由 value 陣列轉成 options 物件陣列
    return props.options.filter((opt) => props.modelValue.includes(opt.value));
  },
  set(val) {
    // 由選中物件陣列回傳 value 陣列給父層
    const values = val.map((v) => v.value);
    emit("update:modelValue", values);
  },
});

const attrsFiltered = computed(() => {
  const {
    options,
    placeholder,
    size,
    color,
    disabled,
    virtual,
    virtualItems,
    ...rest
  } = attrs;
  return rest;
});

const selectClass = computed(() => [attrs.class || ""]);
</script>
