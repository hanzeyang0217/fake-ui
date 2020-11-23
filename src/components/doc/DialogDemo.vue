<template>
  <div>
    Dialog 的文档
    <h1>示例1</h1>
    <div>
      <Button @click="handleClickOpen">Open dialog</Button>
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
    </div>
    <h1>示例2</h1>
    <Button @click="showDialog">showDialog</Button>
  </div>
</template>

<script lang="ts">
  import Dialog from '../../lib/Dialog.vue';
  import Button from '../../lib/Button.vue';
  import {openDialog} from '../../lib/openDialog';
  import {ref} from 'vue';

  export default {
    name: 'DialogDemo',
    components: {Button, Dialog},
    setup() {
      let dlgVisible = ref(false);
      const handleClickOpen = () => {
        dlgVisible.value = !dlgVisible.value;
      };
      const handleDlgOkClick = () => {
        return false;
      };
      const showDialog = () => {

        openDialog({
          header: 'headerTex',
          main: 'mainText',
          ok() {
            return false
          },
          cancel() {}
        });
      };
      return {handleClickOpen, dlgVisible, handleDlgOkClick, showDialog};
    }
  };
</script>

<style lang="scss" scoped>

</style>