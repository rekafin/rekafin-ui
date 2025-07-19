<template>
  <div class="flex items-center justify-start rounded-lg border-2 border-form-border px-4 py-3">
    <img :src="iconSrc" alt="Input icon" class="mr-3 h-5 w-5" />

    <input v-model="model" :type="type" :placeholder="placeholder"
      class="w-full bg-transparent text-sm text-form-text outline-none" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  iconSrc: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
});

const model = defineModel<string>();
</script>
