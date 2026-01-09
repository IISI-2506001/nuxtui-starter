<template>
  <UInput v-bind="$attrs" :type="inputType">
    <template v-if="isPassword" #trailing>
      <UButton
        variant="ghost"
        size="xs"
        :icon="eyeIcon"
        tabindex="-1"
        @mousedown.prevent
        @click="toggleShow"
      />
    </template>
  </UInput>
</template>

<script setup>
const attrs = useAttrs();

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
});

const show = ref(false);

const isPassword = computed(() => props.type === "password");

const inputType = computed(() =>
  isPassword.value ? (show.value ? "text" : "password") : props.type
);

const eyeIcon = computed(() =>
  show.value ? "i-lucide-eye-off" : "i-lucide-eye"
);

const toggleShow = () => {
  if (attrs.disabled) return;
  show.value = !show.value;
};
</script>
