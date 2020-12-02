```html
<template>
  <Button theme="text" color="default">default</Button>
  <Button theme="text" color="primary">primary</Button>
  <Button theme="text" color="secondary">secondary</Button>
  <Button theme="text" disabled>disabled</Button>
</template>

<script lang="ts">
  import Button from '../../lib/Button.vue';
 
  export default {
    components: {Button},
  };
</script>
```