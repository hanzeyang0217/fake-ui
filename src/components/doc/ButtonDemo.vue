<template>
  <div>
    Button 的文档
    <Button @click="click">hello</Button>
    <Button>helloButton</Button>
    <Button theme="button">helloButton</Button>
    <Button theme="link">helloLinkButton</Button>
    <Button theme="text">helloTextButton</Button>
  </div>
</template>

<script lang="ts">
  import Button from '../../lib/Button.vue';

  export default {
    name: 'ButtonDemo',
    components: {Button},
    setup() {
      const click = () => {
        console.log('hi');
      };
      return {click}
    }
  };
</script>

<style lang="scss" scoped>

</style>