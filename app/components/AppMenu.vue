<script setup>
const items = ref([
  {
    label: "前後端資料格式",
    id: "guide",
    icon: "i-lucide-book-open",
    to: "/guide",
  },
  {
    label: "Components",
    id: "Components",
    icon: "i-lucide-book-open",
    to: "/components",
  },
]);
</script>

<template>
  <UNavigationMenu
    arrow
    content-orientation="vertical"
    :items="items"
    class="w-full justify-start"
  />
</template>
