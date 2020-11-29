<template>
  <article class="markdown-body" v-html="md"/>
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