<template>
  <div class="wraper">
    <Header v-if="showHeader" :title="title"></Header>
    <slot></slot>
    <Footer v-if="showFooter"></Footer>
  </div>
</template>

<script>
import Header from "./header";
import Footer from "./footer";
export default {
  props: {
    title: {
      type: String
    },
    showHeader: {
      type: Boolean,
      default: false
    },
    showFooter: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style>
</style>
