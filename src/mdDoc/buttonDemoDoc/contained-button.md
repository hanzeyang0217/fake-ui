```html
<template>
  <Button color="default">default</Button>
  <Button color="primary">primary</Button>
  <Button color="secondary">secondary</Button>
  <Button disabled>disabled</Button>
</template>

<script>
  import { Button } from "fake-ui";
  import "fake-ui/dist/lib/fake-ui.css";
 
  export default {
    components: {Button},
  };
</script>
```