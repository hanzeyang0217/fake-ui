<template>
  <button
    class="FuiButton-root"
    :class="classes"
    :size="size"
    :disabled="disabled"
    v-bind="rest">
    <span v-if="loading" class="FuiButton-loadingIndicator"></span>
    <slot/>
  </button>
</template>

<script lang="ts">
  import {computed} from 'vue';

  export default {
    name: 'Button',
    inheritAttrs: false,
    props: {
      theme: {
        type: String,
        default: 'button'
      },
      size: {
        type: String,
        default: 'medium'
      },
      color: {
        type: String,
        default: 'default'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
    },
    setup(props, context) {
      const {
        theme,
        size,
        color,
      } = props;

      const classes = computed(() => {
        return {
          [`FuiButton-theme-${theme}`]: theme,
          [`FuiButton-size-${size}`]: size,
          [`FuiButton-color-${color}`]: color,
        };
      });
      const {...rest} = context.attrs;
      return {rest, classes};
    }
  };
</script>

<style lang="scss">
  @import "./Fui-common.scss";

  $h: 32px;
  $radius: 4px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $red: red;
  $grey: grey;
  .FuiButton-root {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;

    & + & {
      margin-left: 8px;
    }

    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }

    &:focus {
      outline: none;
    }

    &::-moz-focus-inner {
      border: 0;
    }


    &.FuiButton-size-large {
      font-size: 24px;
      height: 48px;
      padding: 0 16px
    }

    &.FuiButton-size-small {
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }

    &.FuiButton-theme-link {
      border-color: transparent;
      box-shadow: none;
      color: $blue;

      &:hover, &:focus {
        color: lighten($blue, 10%);
      }
    }

    &.FuiButton-theme-text {
      border-color: transparent;
      box-shadow: none;
      color: inherit;

      &:hover, &:focus {
        background: darken(white, 5%);;
      }
    }

    &.FuiButton-theme-button {
      &.FuiButton-color-primary {
        background: $blue;
        color: white;
        border-color: $blue;

        &:hover,
        &:focus {
          background: darken($blue, 10%);
          border-color: darken($blue, 10%);
        }
      }

      &.FuiButton-color-secondary {
        background: $red;
        border-color: $red;
        color: white;

        &:hover,
        &:focus {
          background: darken($red, 10%);
          border-color: darken($red, 10%);
        }
      }
    }

    &.FuiButton-theme-link {
      &.FuiButton-color-secondary {
        color: $red;

        &:hover,
        &:focus {
          color: darken($red, 10%);
        }
      }
    }

    &.FuiButton-theme-text {
      &.FuiButton-color-primary {
        color: $blue;

        &:hover,
        &:focus {
          color: darken($blue, 10%);
        }
      }

      &.FuiButton-color-secondary {
        color: $red;

        &:hover,
        &:focus {
          color: darken($red, 10%);
        }
      }
    }

    &.FuiButton-theme-button {
      &[disabled] {
        cursor: not-allowed;
        color: $grey;

        &:hover {
          border-color: $grey;
        }
      }
    }

    &.FuiButton-theme-link, &.FuiButton-theme-text {
      &[disabled] {
        cursor: not-allowed;
        color: $grey;
      }
    }

    > .FuiButton-loadingIndicator {
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 4px;
      border-radius: 8px;
      border-color: $blue $blue $blue transparent;
      border-style: solid;
      border-width: 2px;
      animation: FuiButton-spin 1s infinite linear;
    }

    @keyframes FuiButton-spin {
      0% {
        transform: rotate(0deg)
      }
      100% {
        transform: rotate(360deg)
      }
    }
  }
</style>