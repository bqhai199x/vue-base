import { Notify } from 'quasar';

class ToastUtil {
  success(message) {
    Notify.create({
      type: 'positive',
      message,
      position: 'bottom-right',
    });
  }

  warning(message) {
    Notify.create({
      type: 'warning',
      message,
      position: 'bottom-right',
    });
  }

  error(message) {
    Notify.create({
      type: 'negative',
      message,
      color: 'red',
      position: 'bottom-right',
    });
  }
}

export default new ToastUtil();
