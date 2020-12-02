```html
<template>
  <Switch v-model:value="value"/>
</template>

<script lang="ts">
  import {ref} from 'vue';
  import Switch from '../../lib/Switch.vue';
 
  export default {
    components: {Switch},
    setup() {
      let value = ref(false);
      return {value};
    }
  };
</script>
```