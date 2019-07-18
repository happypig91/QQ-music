const axios=require('axios');

module.exports.SwiperList=(req,res)=>{
    const url='https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1562588108302&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1';
    axios.get(url,{
       headers:{
       Referer:'https://y.qq.com',
       Origin:'https://y.qq.com'
     }
    }).then(result=>{
        // console.log(result.data.data.slider)
      res.json({
      code:1,
      data:result.data.data.slider
  })
})
  
}