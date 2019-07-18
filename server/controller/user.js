//测试接口
module.exports.Api=(req,res)=>{
    res.end('server is running')
}

const mysql=require('mysql'); //安装mysql的包（1）
const {createToken}=require('../utils');
const {sqlConfig}=require('../config')
//连接数据库(2)
const connection=mysql.createConnection(sqlConfig)
connection.connect()
//登录接口
module.exports.Login=(req,res)=>{
      const {username,password}=req.body;
      //把前台传过来的用户名密码，拼接sql语句到数据库查询
      //查询数据步骤
      //拼接sql语句(3)
      const $sql=`select * from user where username='${username}' and password='${password}'`;
      connection.query($sql,(error,results)=>{
        if(error){
          //加状态码
          res.statusCode=500;
           res.json({
             code:0,
             msg:error
           })
           return console.error(error);
        }else{
           if(results.length){
            const token=createToken(results[0].id); //加密
            const $save=`update user set token='${token}' where id=${results[0].id}`//加密后的token
            connection.query($save,(error,results)=>{
              if(error){
                 return console.error(error);
              }
            })
            res.statusCode=200;
            res.json({
              code:1,
              msg:'success',
              token:token
            })
           }else{
            res.statusCode=401;
            res.json({
              code:0,
              msg:'用户密码不正确，请重试'
            })
            return console.error(error);
           }
        }
      })
}