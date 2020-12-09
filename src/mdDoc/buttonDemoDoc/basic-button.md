```html
<template>
  <Button @click="click">Basic Button</Button>
</template>

<script>
  import { Button } from "fake-ui";
  import "fake-ui/dist/lib/fake-ui.css";
 
  export default {
    components: {Button},
    setup() {
      const click = () => {
        console.log('Do something after the button is clicked');
      };
      return {click};
    }
  };
</script>
```