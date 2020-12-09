<template>
  <template v-if="dlgVisible">
    <teleport to="body">
      <div class="FuiDialog-overlay" @click="closeDlg"></div>
      <div class="FuiDialog-wrapper">
        <div class="FuiDialog">
          <header>
            <slot name="header"></slot>
          </header>
          <main>
            <slot name="main"></slot>
          </main>
          <footer>
            <Button theme="text" color="primary" @click="ok">OK</Button>
            <Button theme="text" @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang="ts">
  import Button from './Button.vue';

  export default {
    name: 'Dialog',
    components: {Button},
    props: {
      dlgVisible: {
        type: Boolean,
        default: false
      },
      ok: {
        type: Function,
        default: () => {
          return true;
        }
      },
      cancel: {
        type: Function,
        default: () => {
          return true;
        }
      },
    },
    setup(props, context) {
      const closeDlg = () => {
        context.emit('update:dlgVisible', !props.dlgVisible);
      };
      const ok = () => {
        if (props.ok && props.ok() !== false) {
          closeDlg();
        }
        context.emit('ok',);
      };
      const cancel = () => {
        if (props.cancel && props.cancel() !== false) {
          closeDlg();
        }
        context.emit('cancel',);
      };
      return {closeDlg, cancel, ok};
    }
  };
</script>

<style lang="scss">
  $radius: 4px;
  $border-color: #d9d9d9;
  .FuiDialog {
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 15em;
    max-width: 90%;

    &-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: fade_out(black, 0.5);
      z-index: 10;
    }

    &-wrapper {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 11;
    }

    > header {
      padding: 12px 16px;
      border-bottom: 1px solid $border-color;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
    }

    > main {
      padding: 12px 16px;
    }

    > footer {
      border-top: 1px solid $border-color;
      padding: 12px 16px;
      text-align: right;
    }
  }
</style>