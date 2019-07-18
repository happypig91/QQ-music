<template>
    <div>
    <swiper :options="swiperOption" style="height:150px;">
    <swiper-slide v-for="slide in swiperSlides" :key='slide.id'>
       <img :src='slide.picUrl' alt='' style='width:100%;height:100%;'/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
   <ul style='width:100%;height:100%;'>
     <li v-for='(item,index) in musicList' :key='index'>
        <dl style='display:flex;margin:20px;'>
           <dt>
              <img :src="`http://y.gtimg.cn/music/photo_new/T002R90x90M000${item.albumMid}.jpg?max_age=25920…`" alt='' />
           </dt>
           <dd style='margin:0 0 0 30px;'>
             <h4 style='margin:15px 0 15px 0;'>{{item.title}}</h4>
             <p>{{item.singerName}}</p>
           </dd>
        </dl>
     </li>
   </ul>
  </div>
</template>
<script>
import { getSwiper } from "../../api/getswiper";
import { getMusicList} from "../../api/getMusicList";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import scroll from "@/components/scroll";

export default {
  name: "Toplist",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
     swiperOption: {
         autoplay:true,
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides:[],
        musicList:[]
      }
  },
  mounted() {
    this._getSwiper();
    this._getMusicList();
  },
  methods: {
    async _getSwiper() {
      const result = await getSwiper();
      this.swiperSlides= result.data.data;
    },
     async _getMusicList() {
      const results= await getMusicList();
      console.log(results.data.data);
      this.musicList=results.data.data;
    },
  }
};
</script>
<style>
@import url("swiper/dist/css/swiper.css");
</style>