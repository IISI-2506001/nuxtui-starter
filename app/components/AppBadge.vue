<template>
  <UBadge v-bind="badgeProps" :class="[$attrs.class]">
    <slot />
  </UBadge>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "subtle",
  },
  color: String,
});

const attrs = useAttrs();

const badgeProps = computed(() => ({
  variant: props.variant,
  color: props.color,
  ...attrs,
}));
</script>
