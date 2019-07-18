<template>
  <Layout :showHeader="true" title='QQ 音乐'>
    <section class='content'>
     <nav><div class='contents'>
     <router-link :to="{path:'/music/toplist',activeClass:'active'}" tag='div'>推荐</router-link>
      <router-link to='/music/rank' tag='div'>排行</router-link>
       <router-link to='/music/search' tag='div'>搜索</router-link>
     </div>
     </nav>
      <transition
        enter-active-class="animated bounceInDown"
        leave-active-class="animated bounceOut"
      >
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </section>
  </Layout>
</template>
<script>
import Layout from '@/components/layout';

export default {
 name:'Music',
 components:{
   Layout
 }
};
</script>
<style lang='scss'>
%juzhong{
  display:flex;
  align-items: center;
  justify-content: center;
}
.contents{
  width:100%;
  height:45px;
  display:flex;
  justify-content: space-around;
  align-items: center;
  div{
    flex:1;
    @extend %juzhong;
    padding:0 0 10px 0;
  }
  .active{
    color:green;
    border-bottom:2px solid green;
  }
}
</style>
