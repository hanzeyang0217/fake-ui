<template>
  <div class="topnavAndBanner">
    <Topnav/>
    <div class="banner">
      <h1>fake-ui</h1>
      <h3>a Vue UI library</h3>
      <p class="actions">
        <router-link to="doc">GET STARTED</router-link>
        <a class="github" href="https://github.com/hanzeyang0217/fake-ui">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github"></use>
          </svg>
          GITHUB</a>
      </p>
    </div>
    <div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-Vue"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-dengpao"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue';

  export default {
    name: 'Home',
    components: {Topnav},
  };
</script>

<style lang="scss" scoped>
  h1 {

  }

  h1, h2, h3, h4, strong {
    font-weight: lighter;
    margin: 0;
    font-size: 3.2em;
    color: #273849;
  }

  .topnavAndBanner {
    /*background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);*/
  }

  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > .actions {
      display: flex;

      a {
        white-space: nowrap;
        padding: 0.75em 2em;
        border-radius: 2em;
        transition: all 0.15s ease;
        box-sizing: border-box;
        border: 1px solid #4fc08d;
        margin: 1em 0;
        font-size: 1.05em;
        font-weight: 600;
        letter-spacing: 0.1em;
        min-width: 8em;
        text-align: center;
        margin-right: 1%;
        background-color: #fff;
        color: #42b983;
      }

      .github {
        background-color: #f6f6f6;
        color: #4f5959;
        border-color: #f6f6f6;
        position: relative;
        text-indent: 1.4em;
         > svg {
           position: absolute;
           left: 0.4em;
           top: 0.3em;
           width: 36px;
           height: 36px;
         }
      }
    }
  }

  @media screen and (max-width: 900px) {
    h1, h2, h3, h4, strong {
      font-size: 2em;
    }
    .banner {
      > .actions {
        a {
          font-size: 0.9em;
        }
        .github {
          > svg {
            left: 0.4em;
            top: 0.3em;
            width: 32px;
            height: 32px;
          }
        }
      }
    }
  }
</style>