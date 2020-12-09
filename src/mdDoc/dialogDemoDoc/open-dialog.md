```html
<template>
  <Button @click="showDialog">showDialog</Button>
</template>

<script lang="ts">
  import { Dialog, Button, openDialog } from "fake-ui";
  import "fake-ui/dist/lib/fake-ui.css";

  export default {
    components: {Button, Dialog},
    setup() {
      const showDialog = () => {
        openDialog({
          //set header text
          header: "headerTex",
          //set main text
          main: "mainText",
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