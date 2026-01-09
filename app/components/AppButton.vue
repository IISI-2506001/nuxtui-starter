<template>
  <UTooltip arrow :delay-duration="0" :text="toolTip">
    <UButton v-bind="buttonProps" :class="buttonClass">
      <slot>{{ label }}</slot>
    </UButton>
  </UTooltip>
</template>

<script setup>
const props = defineProps({
  color: { type: String, default: "primary" },
  variant: { type: String, default: "solid" },
  size: { type: String, default: "md" },
  isLoading: Boolean,
  isDisabled: Boolean,
  toolTip: String,
  label: String,
  icon: String,
  trailingIcon: String,
});

const attrs = useAttrs();

const buttonProps = computed(() => ({
  color: props.color,
  variant: props.variant,
  size: props.size,
  loading: props.isLoading,
  disabled: props.isDisabled,
  icon: props.icon,
  "trailing-icon": props.trailingIcon,
  ...attrs, // class / id / data-* / aria-*
}));

const buttonClass = computed(() => [attrs.class || ""]);
</script>
