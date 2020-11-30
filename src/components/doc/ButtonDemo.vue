<template>
  <div>
    <div>
      <h1>Basic Button</h1>
      <div class="demoBox">
        <Button @click="click">Basic Button</Button>
      </div>
      <article class="markdown-body" v-html="basicButtonMD"/>
    </div>
    <div>
      <h1>Contained Button</h1>
      <div class="demoBox">
        <Button color="default">default</Button>
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button disabled>disabled</Button>
      </div>
      <span @click="changeSourceSize">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuoyou"></use>
        </svg>
      </span>
      <article v-if="showFullSource" class="markdown-body" v-html="containedButtonShortMD"/>
      <article v-else class="markdown-body" v-html="containedButtonMD"/>
    </div>
    <div>
      <h1>Text Button</h1>
      <div class="demoBox">
        <Button theme="text" color="default">default</Button>
        <Button theme="text" color="primary">primary</Button>
        <Button theme="text" color="secondary">secondary</Button>
        <Button theme="text" disabled>disabled</Button>
      </div>
      <article class="markdown-body" v-html="textButtonMD"/>
    </div>
    <div>
      <h1>Loading Button</h1>
      <div class="demoBox">
        <Button loading>loading</Button>
      </div>
      <article class="markdown-body" v-html="loadingButtonMD"/>
    </div>
    <div>
      <h1>Size</h1>
      <div class="demoBox">
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
      </div>
      <article class="markdown-body" v-html="sizeButtonMD"/>
    </div>
  </div>
  <Footer
    left="Switch Component"
    right="Dialog Component"
  />
</template>

<script lang="ts">
  import basicButtonMD from '../../mdDoc/buttonDemoDoc/basic-button.md';
  import containedButtonMD from '../../mdDoc/buttonDemoDoc/contained-button.md';
  import containedButtonShortMD from '../../mdDoc/buttonDemoDoc/contained-button-short.md';
  import textButtonMD from '../../mdDoc/buttonDemoDoc/text-button.md';
  import loadingButtonMD from '../../mdDoc/buttonDemoDoc/loading-button.md';
  import sizeButtonMD from '../../mdDoc/buttonDemoDoc/size-button.md';
  import Button from '../../lib/Button.vue';
  import Footer from '../Footer.vue';
  import {ref} from 'vue';


  export default {
    name: 'ButtonDemo',
    components: {Button, Footer},
    data() {
      return {
        basicButtonMD,
        containedButtonMD,
        containedButtonShortMD,
        textButtonMD,
        loadingButtonMD,
        sizeButtonMD,
      };
    },
    setup() {
      const click = () => {
        console.log('Do something after the button is clicked');
      };
      const showFullSource = ref(false);
      const changeSourceSize = () => {
        showFullSource.value = !showFullSource.value;
        console.log(showFullSource.value);
      };
      return {click, changeSourceSize, showFullSource};
    }
  };
</script>

<style lang="scss" scoped>
  button {
    margin: 4px;
  }
</style>