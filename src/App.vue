<script setup>
import { RouterView } from 'vue-router';
import { useToast } from '@/composables/useToast';
import Toast from '@/components/shared/Toast.vue';

const { toast, toastData } = useToast();
</script>

<template>
  <RouterView />
  <Toast
    ref="toast"
    :toast-data="toastData"
  />
</template>
