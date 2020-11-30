```markdown
<template>
  <Button @click="click">Basic Button</Button>
</template>

<script lang="ts">
  import Button from '../../lib/Button.vue';
 
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