<template>
  <div>
    Button 的文档
    <Button @click="click">hello</Button>
    <h1>示例1</h1>
    <div>
      <Button theme="button">button</Button>
      <Button theme="link">link</Button>
      <Button theme="text">text</Button>
    </div>
    <h1>示例2</h1>
    <div>
      <div>
        <Button size="small">small</Button>
        <Button size="medium">medium</Button>
        <Button size="large">large</Button>
      </div>
      <div>
        <Button theme="link" size="small">small</Button>
        <Button theme="link" size="medium">medium</Button>
        <Button theme="link" size="large">large</Button>
      </div>
      <div>
        <Button theme="text" size="small">small</Button>
        <Button theme="text" size="medium">medium</Button>
        <Button theme="text" size="large">large</Button>
      </div>
    </div>
    <h1>示例3</h1>
    <div>
      <div>
        <Button color="default">default</Button>
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
      </div>
      <div>
        <Button theme="link" color="default">default</Button>
        <Button theme="link" color="primary">primary</Button>
        <Button theme="link" color="secondary">危险链接按钮</Button>
      </div>
      <div>
        <Button theme="text" color="default">default</Button>
        <Button theme="text" color="primary">primary</Button>
        <Button theme="text" color="secondary">secondary</Button>
      </div>
    </div>
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
      return {click};
    }
  };
</script>

<style lang="scss" scoped>

</style>