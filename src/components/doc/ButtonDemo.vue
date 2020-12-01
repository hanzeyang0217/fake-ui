<template>
  <div>
    <div>
      <h1>Basic Button</h1>
      <div class="demoBox">
        <Button @click="click">Basic Button</Button>
      </div>
      <MarkDown :short="basicButtonMD" :ToolBarVisible="false"/>
    </div>
    <div>
      <h1>Contained Button</h1>
      <div class="demoBox">
        <Button color="default">default</Button>
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button disabled>disabled</Button>
      </div>
      <MarkDown :full="containedButtonMD" :short="containedButtonShortMD"/>
    </div>
    <div>
      <h1>Text Button</h1>
      <div class="demoBox">
        <Button theme="text" color="default">default</Button>
        <Button theme="text" color="primary">primary</Button>
        <Button theme="text" color="secondary">secondary</Button>
        <Button theme="text" disabled>disabled</Button>
      </div>
      <MarkDown :full="textButtonMD" :short="textButtonShortMD"/>
    </div>
    <div>
      <h1>Loading Button</h1>
      <div class="demoBox">
        <Button loading>loading</Button>
      </div>
      <MarkDown :full="loadingButtonMD" :short="loadingButtonShortMD"/>
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
      <MarkDown :full="sizeButtonMD" :short="sizeButtonShortMD"/>
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
  import textButtonShortMD from '../../mdDoc/buttonDemoDoc/text-button-short.md';
  import loadingButtonMD from '../../mdDoc/buttonDemoDoc/loading-button.md';
  import loadingButtonShortMD from '../../mdDoc/buttonDemoDoc/loading-button-short.md';
  import sizeButtonMD from '../../mdDoc/buttonDemoDoc/size-button.md';
  import sizeButtonShortMD from '../../mdDoc/buttonDemoDoc/size-button-short.md';
  import Button from '../../lib/Button.vue';
  import Footer from '../Footer.vue';
  import MarkDown from '../MarkDown.vue';


  export default {
    name: 'ButtonDemo',
    components: {Button, Footer, MarkDown},
    data() {
      return {
        basicButtonMD,
        containedButtonMD,
        containedButtonShortMD,
        textButtonMD,
        textButtonShortMD,
        loadingButtonMD,
        loadingButtonShortMD,
        sizeButtonMD,
        sizeButtonShortMD,
      };
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
  button {
    margin: 4px;
  }
</style>