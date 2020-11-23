import {createApp, h} from 'vue';
import Dialog from './Dialog.vue';

export const openDialog = (options) => {
  const {
    header,
    main,
    ok,
    cancel
  } = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          dlgVisible: true,
          ok,
          cancel,
          'onUpdate:dlgVisible': (newDlgVisible) => {
            if (newDlgVisible === false) {
              app.unmount(div);
              div.remove();
            }
          }
        },
        {
          header,
          main,
        });
    }
  });
  app.mount(div);
};