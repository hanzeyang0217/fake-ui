```html
<template>
  <Button @click="showDialog">showDialog</Button>
</template>

<script lang="ts">
  import Dialog from '../../lib/Dialog.vue';
  import Button from '../../lib/Button.vue';
  import {openDialog} from '../../lib/openDialog';

  export default {
    components: {Button, Dialog},
    setup() {
      const showDialog = () => {
        openDialog({
          header: 'headerTex',
          main: 'mainText',
          ok() {
            //if return false the dialog cannot be turned off.
            return false;
          },
          cancel() {}
        });
      };
      return {showDialog};
    }
  }
</script>
```