<template>
  <div class="toolbar" v-if="ToolBarVisible">
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
      short: {
        type: String,
        default: ''
      },
      full: {
        type: String,
        default: ''
      },
      ToolBarVisible: {
        type: Boolean,
        default: true
      }
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

<style lang="scss">
  @import "../assets/style/vueStyle.css";
  .toolbar {
    display: flex;
    justify-content: flex-end;
    margin-top: 8px;
    margin-bottom: 8px;
    @media (min-width: 600px) {
      justify-content: end;
    }

    > span {
      margin: 8px;
      cursor: pointer;
    }
  }
</style>