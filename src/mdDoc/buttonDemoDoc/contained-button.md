```html
<template>
  <Button color="default">default</Button>
  <Button color="primary">primary</Button>
  <Button color="secondary">secondary</Button>
  <Button disabled>disabled</Button>
</template>

<script lang="ts">
  import Button from '../../lib/Button.vue';
 
  export default {
    components: {Button},
  };
</script>
```