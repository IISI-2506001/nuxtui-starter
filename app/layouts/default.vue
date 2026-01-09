<template>
  <div class="bg h-screen flex flex-col">
    <AppHeader />

    <main class="flex-1 overflow-auto">
      <div class="view-block h-full rounded-[12px] overflow-auto min-h-0">
        <NuxtPage />
      </div>
    </main>
  </div>
</template>

<script setup></script>
