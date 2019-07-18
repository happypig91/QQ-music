
import Vue from 'vue';
/*/
 * 该指令用于设定自动聚焦
**/
// 注册一个全局自定义指令 `v-focus`
export const focus=Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
      // 聚焦元素
      el.focus()
    }
  })

  //拖拽
  export const drag=Vue.directive('drag',{
    inserted:  function(target){
        target.onmousedown = function(ev){
            let disX = ev.offsetX;
            let disY = ev.offsetY;
            document.onmousemove = function(eve){
                target.style.left = eve.clientX - disX + 'px';
                target.style.top = eve.clientY - disY + 'px';
            }
            document.onmouseup = function(){
                document.onmousemove = null;
                document.onmouseup = null;
            }
            return false;
        }
    }
})


//图片img-error 用于判断当前图片是否能够加载成功，可以加载成功则赋值为img的src属性，否则使用默认图片
export const realImg=Vue.directive('real-img', async function (el, binding) {
    let imgURL = binding.value;//获取图片地址
    let defaultURL = el.getAttribute('default-img');//获取默认图片地址
    if (imgURL) {
        let exist = await imageIsExist(imgURL);
        if (exist) {
            el.setAttribute('src', imgURL);
        } else {
            if (defaultURL) {
                el.setAttribute('src', defaultURL);
            }
        }
    }
})
/**
 * 检测图片是否存在
 */
let imageIsExist = function(url) {
    return new Promise((resolve) => {
        var img = new Image();
        img.onload = function () {
            if (this.complete == true){
                resolve(true);
                img = null;
            }
        }
        img.onerror = function () {
            resolve(false);
            img = null;
        }
        img.src = url;
    })
}