<template>
  <article class="markdown-body" v-html="md"/>
</template>

<script lang="ts">
  import md from '../mdDoc/introDoc.md';

  export default {
    name: 'Intro',
    data() {
      return {md};
    }
  };
</script>

<style lang="scss" scoped>

</style>