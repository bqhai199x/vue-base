<template>
  <dialog-frame />
  <router-view />
</template>

<script setup>
import { RouterView } from 'vue-router';
import DialogFrame from 'components/common/DialogFrame.vue';
</script>