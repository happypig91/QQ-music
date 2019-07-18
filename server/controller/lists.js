const axios=require('axios');

module.exports.getMusicLists=(req,res)=>{
    const url='https://u.y.qq.com/cgi-bin/musicu.fcg?-=getUCGI23139527810997595&g_tk=926037591&loginUin=306826385&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22detail%22%3A%7B%22module%22%3A%22musicToplist.ToplistInfoServer%22%2C%22method%22%3A%22GetDetail%22%2C%22param%22%3A%7B%22topId%22%3A4%2C%22offset%22%3A0%2C%22num%22%3A20%2C%22period%22%3A%222019-07-09%22%7D%7D%2C%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A0%7D%7D';
    axios.get(url,{
       headers:{
       Referer:'https://y.qq.com',
       Origin:'https://y.qq.com'
     },
    }).then(result=>{
        // console.log(result.data.detail.data.data.song)
      res.json({
      code:1,
      data:result.data.detail.data.data.song
  })
})
  
}