<template>
  <q-dialog v-for="item in info" :key="item" :model-value="item.show" @hide="cancel" :persistent="item.config.persistent"
    class="tw-bg-secondary tw-w-full">
    <q-card :style="{ width: item.config.width, maxWidth: item.config.maxWidth }" class="bg-white">
      <q-card-section class="tw-text-lg tw-font-bold tw-border-b tw-flex items-center tw-bg-[#edf4f0]">
        <span>{{ item.title }}</span>
      </q-card-section>
      <q-card-section class="tw-min-h-[80px]" :class="{ 'tw-mx-3': item.config.isComponent }">
        <div v-if="item.config.isComponent">
          <component :is="item.content" v-bind="item.config.params"></component>
        </div>
        <div v-else style="white-space: break-spaces;">{{ item.content }}</div>
      </q-card-section>
      <q-card-section class="tw-border-t tw-text-right" v-if="item.config.showFooter">
        <div class="tw-space-x-2">
          <button class="tw-border tw-rounded tw-p-2 tw-min-w-[70px]" v-for="btn in item.config.buttons" :key="btn" @click="btnClick(btn)">
            {{ btn }}
          </button>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useDialogStore } from 'stores/dialog-store';
import dialog from 'utilities/dialog';

const dialogStore = useDialogStore();
const info = dialogStore.dialog;

const cancel = () => {
  dialog.hide();
};

const btnClick = (btn) => {
  dialog.hide(btn);
};
</script>
