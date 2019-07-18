const url = require('url');
const queryString = require('querystring');

const mysql = require('mysql');
const { sqlConfig } = require('../config');
const connection = mysql.createConnection(sqlConfig)
connection.connect();

/**
 * 
 */
module.exports.MovieList = (req, res) => {
    const oUrl = url.parse(req.url);
    const oQuery = queryString.parse(oUrl.query);
    const { pagesize, pagecount } = oQuery;
    const $sql = pagecount == undefined
        ? `select * from movie`
        : `select * from movie limit ${pagesize},${pagecount}`;
    connection.query($sql, (error, result) => {
        if (error) {
            res.json({
                code: 0,
                error
            })
            return console.error(error);
        } else {
            connection.query('select count(*) as total  from movie', (t_error, t_result) => {
                if (error) throw new Error(error);
                res.json({
                    code: 1,
                    result,
                    total: t_result[0].total
                })
            })
        }
    })
}

/**
 * 
 */
module.exports.AddMoview = (req, res) => {
    const { name, imgUrl, describe, actor, start_time, end_time, score } = req.body;
    const $sql = 'insert into movie  (`name`, `imgUrl`,`describe`,`actor`,`start_time`,`end_time`,`score`) VALUES (?,?,?,?,?,?,?)';
    const $params = [name, imgUrl, describe, actor, start_time, end_time, score];
    connection.query($sql, $params, (error, result) => {
        if (error) {
            res.json({
                code: 0,
                error
            })
            return console.error(error);
        }
        res.statusCode = 200;
        res.json({
            code: 1,
            msg: 'insert success'
        })
        console.log('insert success')
    })
}