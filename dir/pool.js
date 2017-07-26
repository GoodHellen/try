/**
 * Created by Administrator on 2017/7/8.
 */
const mysql = require("mysql");
var pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'beauty',
    connectionLimit:10
});
module.exports = pool;