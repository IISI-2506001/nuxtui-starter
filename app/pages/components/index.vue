<template>
  <div class="space-y-6 p-4">
    <div
      v-for="(component, index) in componentList"
      :key="index"
      class="space-y-4"
    >
      <h2 class="text-2xl font-bold">{{ component.title }}</h2>

      <div class="grid grid-cols-4 gap-4">
        <AppCard
          variant="subtle"
          :isCloseFooter="true"
          v-for="(item, itemIndex) in component.items"
        >
          <template #header>
            <div class="flex justify-between items-center">
              <h1 class="font-bold text-xl">{{ item.label }}</h1>
            </div>
          </template>
        </AppCard>
      </div>
    </div>
  </div>
</template>
<script setup>
const componentList = [
  {
    title: "Element",
    items: [
      { label: "表格", to: "/components/table" },
      { label: "標籤", to: "/components/badge" },
      { label: "卡片", to: "/components/card" },
      { label: "代碼區塊", to: "/components/code" },
      { label: "按鈕" },
      { label: "輸入框" },
      { label: "輸入框" },
      { label: "輸入框" },
    ],
  },
];
</script>
