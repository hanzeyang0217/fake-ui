<template>
  <div class="topnavAndBanner">
    <Topnav/>
    <div class="banner">
      <h1>fake-ui</h1>
      <h3>a Vue UI library</h3>
      <p class="actions">
        <router-link to="/doc/intro">GET STARTED</router-link>
        <a class="github" href="https://github.com/hanzeyang0217/fake-ui">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github"></use>
          </svg>
          GITHUB</a>
      </p>
    </div>
    <div>

    </div>
    <div class="features">
      <ul>
        <li>
          <a href="https://github.com/vuejs/vue-next/releases/tag/v3.0.0">
            <img class="icon"
                 src="https://user-images.githubusercontent.com/499550/93624428-53932780-f9ae-11ea-8d16-af949e16a09f.png"
                 alt="vue3"
            />
          </a>

          <h3>Based on Vue3</h3>
          <p>used Vue3 Composition API</p>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>Based on TypeScript </h3>
          <p>written in TS (not strictly checked)</p>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dengpao"></use>
          </svg>
          <h3>Simple</h3>
          <p>each component is simple</p>
        </li>
      </ul>
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
  h1, h2, h3, h4, strong {
    font-weight: lighter;
    margin: 0;
    font-size: 3.2em;
    color: #273849;
  }

  .topnavAndBanner {
    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    flex-direction: column;
  }

  .banner {
    padding: 140px 0 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > .actions {
      display: flex;

      a {
        position: relative;
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

        > svg, img {
          position: absolute;
          left: 0.4em;
          top: 0.3em;
          width: 36px;
          height: 36px;
        }
      }
    }
  }

  .features {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;

    > ul {
      display: flex;
      flex-wrap: wrap;
      padding-inline-start: 0;
      margin-left: 24px;

      > li {
        width: 300px;
        margin: 16px 0;
        display: grid;
        justify-content: start;
        align-content: space-between;
        grid-template-areas: "icon title" "icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;
        margin-right: 12px;

        > svg, img {
          grid-area: icon;
          width: 64px;
          height: 64px;
        }

        > h3 {
          grid-area: title;
          font-size: 22px;
        }

        > p {
          grid-area: text
        }
        a {
          display: contents;
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