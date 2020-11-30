<template>
  <div>
    <h1>Basic Button</h1>
    <div class="demoBox">
      <Button @click="click">Basic Button</Button>
    </div>
    <article class="markdown-body" v-html="md"/>
    <h1>示例1</h1>
    <div class="demoBox">
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
    <h1>示例4</h1>
    <div>
      <Button disabled>disabled</Button>
      <Button theme="link" disabled>disabled</Button>
      <Button theme="text" disabled>disabled</Button>
    </div>
    <h1>示例5</h1>
    <div>
      <Button loading>loading</Button>
    </div>
  </div>
  <Footer
    left="Switch Component"
    right="Dialog Component"
  />
</template>

<script lang="ts">
  import md from '../../mdDoc/buttonDemoDoc/buttonDemoDoc-basic-button.md';
  import Button from '../../lib/Button.vue';
  import Footer from '../Footer.vue';

  export default {
    name: 'ButtonDemo',
    components: {Button, Footer},
    data() {
      return {md};
    },
    setup() {
      const click = () => {
        console.log('Do something after the button is clicked');
      };
      return {click};
    }
  };
</script>

<style lang="scss" scoped>

</style>