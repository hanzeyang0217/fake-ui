<template>
  <div class="toolbar">
    <span @click="changeSourceSize">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuoyou"></use>
        </svg>
    </span>
  </div>

  <article v-if="showFullSource" class="markdown-body" v-html="full"/>
  <article v-else class="markdown-body" v-html="short"/>
</template>

<script lang="ts">
  import {ref} from 'vue';

  export default {
    name: 'MarkDown',
    props: {
      short: {},
      full: {},
    },
    setup() {
      const showFullSource = ref(false);
      const changeSourceSize = () => {
        showFullSource.value = !showFullSource.value;
      };
      return {changeSourceSize, showFullSource};
    }
  };
</script>

<style lang="scss" scoped>
  .toolbar {
    display: flex;
    justify-content: flex-end;
    > span {
      margin-bottom: 8px;
    }
  }
</style>