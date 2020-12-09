```html
<template>
  <Switch v-model:value="value"/>
</template>

<script lang="ts">
  import { Switch } from "fake-ui";
  import "fake-ui/dist/lib/fake-ui.css";
  import { ref } from "vue";
 
  export default {
    components: {Switch},
    setup() {
      //init value
      let value = ref(false);
      return {value};
    }
  };
</script>
```