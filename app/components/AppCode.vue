<template>
  <div class="w-full">
    <div class="title bg-gray-800 p-2 rounded-t-xl" v-if="title">
      <span class="font-bold">{{ title }}</span>
    </div>
    <div
      class="bg-gray-900 p-2 overflow-auto font-mono text-base"
      :class="[!title ? 'rounded-xl' : 'rounded-b-xl']"
    >
      <div
        v-for="(line, index) in code.split('\n')"
        :key="index"
        class="flex items-start whitespace-pre leading-none py-2"
      >
        <span v-if="line.includes('!!')" class="text-error">
          {{ line.replace("!!", "") }}
        </span>

        <template v-else>
          <span>{{ line.split("//")[0] }}</span>
          <span v-if="line.includes('//')" class="text-primary">
            //{{ line.split("//")[1] }}
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  code: { type: String, default: "" },
  title: { type: String },
});
</script>
