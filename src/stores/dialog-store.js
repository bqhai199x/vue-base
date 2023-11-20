import { defineStore } from 'pinia';

export const useDialogStore = defineStore('dialog', {
  state: () => (
    {
      dialog: [],
    }
  ),
  getters: {
    last: (state) => (state.dialog.length > 0 ? state.dialog[state.dialog.length - 1] : null),
  },
  actions: {
    show(data) {
      this.dialog.push(data);
    },

    hide() {
      this.dialog.pop();
    },
  },
});
