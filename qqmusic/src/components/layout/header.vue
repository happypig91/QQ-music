<template>
  <header class="header">
    <slot>{{title}}</slot>
  </header>
</template>

<script>
// import  focus from '../../api/ziding'

export default {
  name: "Header",
  props: ["title"]
};
</script>

<style>
.header {
  color: #fff;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #31c27c;
}
</style>
