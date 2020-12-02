```html
<template>
  <div>
    <Button theme="text" size="small">small</Button>
    <Button theme="text" size="medium">medium</Button>
    <Button theme="text" size="large">large</Button>
  </div>
  <div>
    <Button color="primary" size="small">small</Button>
    <Button color="primary" size="medium">medium</Button>
    <Button color="primary" size="large">large</Button>
  </div>
</template>

<script lang="ts">
  import Button from '../../lib/Button.vue';
 
  export default {
    components: {Button},
  };
</script>
```