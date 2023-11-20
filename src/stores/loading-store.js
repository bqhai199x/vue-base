import { defineStore } from 'pinia';
import { Loading, QSpinnerPie } from 'quasar';

export const useLoadingStore = defineStore('loading', {
  state: () => (
    {
      isMultiLoading: false,
    }
  ),
  actions: {
    show() {
      Loading.show({
        spinnerSize: 50,
        spinnerColor: 'primary',
        spinner: QSpinnerPie,
      });
    },

    hide() {
      Loading.hide();
    },

    showMulti() {
      this.isMultiLoading = true;
      this.show();
    },

    hideMulti() {
      this.isMultiLoading = false;
      this.hide();
    },
  },
});
