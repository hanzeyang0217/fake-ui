<template>
  <article class="markdown-body" v-html="md"/>
  <footer class="footerLinkDiv">
    <div>
      ←
      <router-link class="footerLink" to="/doc/install">Installation</router-link>
    </div>
    <div/>
  </footer>
</template>

<script lang="ts">
  import md from '../mdDoc/getStartedDoc.md';

  export default {
    name: 'GetStarted',
    data() {
      return {md};
    }
  };
</script>

<style lang="scss" scoped>

</style>