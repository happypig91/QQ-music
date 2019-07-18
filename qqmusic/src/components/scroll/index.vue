<template>
  <div class="scroller-wraper" :ref="propRef">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    propRef: {
      type: String,
      required: false,
      default: "scroller-wraper"
    },
    scrollbar: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      defaultConfig: {
        scrollbar: this.scrollbar
      }
    };
  },
  mounted() {
    this.initScroller();
  },
  methods: {
    initScroller() {
      const wraper = this.$refs[this.propRef];
      this.scroll = new Bscroll(wraper, {
        ...this.defaultConfig
      });
    },
    refresh() {
      this.scroll && this.scroll.refresh;
    }
  }
};
</script>

<style scoped>
.scroller-wraper {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  background-color: #dec;
}
</style>
