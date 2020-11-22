<template>
  <div>
    <p>Switch 的文档</p>
<!--    <Switch :value="value" @update:value="value = $event"/>-->
    <Switch v-model:value="value"/>
  </div>
</template>

<script lang="ts">
  import Switch from '../../lib/Switch.vue';
  import {ref} from 'vue';

  export default {
    name: 'SwitchDemo',
    components: {Switch},
    setup() {
      let value = ref(false);
      return {value};
    }
  };
</script>

<style lang="scss" scoped>

</style>