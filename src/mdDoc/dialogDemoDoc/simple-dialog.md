```html
<template>
  <Button @click="handleClickOpen">Open simple dialog</Button>
  <Dialog
    v-model:dlgVisible="dlgVisible"
    :ok="handleDlgOkClick"
  >
    <template v-slot:header>
      <strong>title</strong>
    </template>
    <template v-slot:main>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>
  </Dialog>
</template>

<script lang="ts">
  import Dialog from '../../lib/Dialog.vue';
  import Button from '../../lib/Button.vue';
  import {ref} from 'vue';

  export default {
    components: {Button, Dialog},
    setup() {
      let dlgVisible = ref(false);
      const handleClickOpen = () => {
        dlgVisible.value = !dlgVisible.value;
      };
      const handleDlgOkClick = () => {
        //if return false the dialog cannot be turned off.
        return false;
      };
      return {handleClickOpen, dlgVisible, handleDlgOkClick};
    }
  }
</script>
```