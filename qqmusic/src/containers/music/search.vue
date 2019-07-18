<template>
    <div>search
        <input v-focus style='height:30px;padding:5px;'/>
         <div v-drag style='width:50px;height:50px;background:#00f;position:absolute;'></div>
         <img src="../../assets/logo.png" v-real-img="images"  alt=''/>
    </div>
</template>
<script>
import  {drag,focus,realImg} from '../../api/ziding'
export default {
    data(){
        return {
            images:'http://p8.123.sogoucdn.com/imgu/2019/07/20190710120248_496.jpg'
            // images:'../../assets/image/404_error.png'
        }
    }
}
</script>
<style>

</style>