<template>
  <div>
    <h1>Simple Dialog</h1>
    <div>
      <div class="demoBox">
        <Button @click="handleClickOpen">Open simple dialog</Button>
      </div>
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
      <MarkDown :short="simpleDialogMD" :ToolBarVisible="false"/>
    </div>
    <h1>Show Dialog</h1>
    <div class="demoBox">
      <Button @click="showDialog">showDialog</Button>
    </div>
      <MarkDown :short="openDialogMD" :ToolBarVisible="false"/>
  </div>
  <Footer
    left="Button Component"
  />
</template>

<script lang="ts">
  import simpleDialogMD from '../../mdDoc/dialogDemoDoc/simple-dialog.md';
  import openDialogMD from '../../mdDoc/dialogDemoDoc/open-dialog.md';
  import Dialog from '../../lib/Dialog.vue';
  import Button from '../../lib/Button.vue';
  import {openDialog} from '../../lib/openDialog';
  import {ref} from 'vue';
  import Footer from '../Footer.vue';
  import MarkDown from '../MarkDown.vue';

  export default {
    name: 'DialogDemo',
    components: {Button, Dialog, Footer, MarkDown},
    data() {
      return {
        simpleDialogMD,
        openDialogMD,
      };
    },
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
            return false;
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