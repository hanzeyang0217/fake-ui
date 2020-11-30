<template>
  <footer class="footerLinkDiv">
    <div>
      <div v-if="left!==''">
        ←
        <router-link class="footerLink" :to="{name:`${left}`}">{{left}}</router-link>
      </div>
    </div>
    <div>
      <div v-if="right!==''">
        <router-link class="footerLink" :to="{name:`${right}`}">{{right}}</router-link>
        →
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
  export default {
    name: 'Footer',
    props: {
      left: {
        type: String,
        default: ''
      },
      right: {
        type: String,
        default: ''
      },
    },
  };
</script>

<style lang="scss" scoped>
  .footerLinkDiv {
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
    margin-bottom: 0.5em;
    padding-top: 1em;
  }

  .footerLink {
    color: #42b983;
  }
</style>