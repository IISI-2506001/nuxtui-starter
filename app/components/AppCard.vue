<template>
  <UCard :variant="variant" v-bind="cardProps">
    <template #header>
      <slot name="header" />
    </template>

    <slot />

    <template #footer v-if="slots.footer">
      <slot name="footer" />
    </template>
  </UCard>
</template>

<script setup>
const props = defineProps({
  variant: { type: String, default: "solid" },
});
const slots = useSlots();
const attrs = useAttrs();

// 將 id / class / data-* / aria-* 等都透傳給 UCard
const cardProps = computed(() => ({
  ...attrs,
  class: ["u-card", attrs.class || ""], // 預設加上 u-card
}));
</script>
