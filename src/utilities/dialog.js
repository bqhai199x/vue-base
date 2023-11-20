import { useDialogStore } from 'stores/dialog-store';
import { shallowRef } from 'vue';

class DialogManger {
  show = (titleVal, contentVal, configVal) => new Promise((resolve) => {
    const item = {
      title: titleVal,
      content: contentVal,
      config: configVal,
      show: true,
      close: resolve,
    };
    const { show } = useDialogStore();
    show(item);
  });

  showContent = (title, content, config) => {
    const component = shallowRef(content);
    config = {
      showFooter: false,
      isComponent: true,
      ...config,
    };
    return this.show(title, component, config);
  };

  showMessage = (title, content, config) => {
    config = {
      showFooter: true,
      buttons: ['OK'],
      isComponent: false,
      ...config,
    };
    return this.show(title, content, config);
  };

  showConfirm = (title, content, config) => {
    config = {
      showFooter: true,
      buttons: ['OK', 'Cancel'],
      isComponent: false,
      ...config,
    };
    return this.show(title, content, config);
  };

  hide = (value) => {
    const { last, hide } = useDialogStore();
    if (!last) return;
    last.show = false;
    setTimeout(() => {
      last.close(value);
      hide();
    }, 200);
  };
}

export default new DialogManger();
