<template>
  <div></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import api from 'callers/rest-client';
import dialog from 'utilities/dialog';

const cate = ref(null);
onMounted(async () => {
  cate.value = await api.get('category');
  await dialog.showConfirm('TT', cate.value);
});
</script>