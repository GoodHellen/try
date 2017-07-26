const pool = require("./pool");
const http = require("http");
const express = require("express");
const qs = require("querystring");

var app = express();
var server = http.createServer(app);
server.listen(8080);
app.use(express.static('public'));
app.get("/",(req,res)=>{
    res.redirect('index.html');
});
//获取页面主要图片数据
app.get("/index",(req,res)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        var sql = "SELECT *FROM t_product";
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            res.json(result);
            conn.release();
        })
    })
});
//注册 添加一条记录
app.post("/register",(req,res)=>{
    req.on("data",(data)=>{
        var obj = qs.parse(data.toString());
        pool.getConnection((err,conn)=>{
            var sql = "INSERT INTO t_user VALUES(null,?,?)";
            conn.query(sql,[obj.uname,obj.upwd],(err,result)=>{
                if(err) throw err;
                var output = {code:1,msg:"注册成功"};
                res.json(output);
                conn.release();
            })
        })
    })
});
//登录 验证并登录
app.post("/login",(req,res)=>{
    req.on("data",(data)=>{
        var obj = qs.parse(data.toString());
        pool.getConnection((err,conn)=>{
            var sql = "SELECT * FROM t_user WHERE uname=? AND upwd=?";
            conn.query(sql,[obj.uname,obj.upwd],(err,result)=>{
                if(result.length>0){
                    var output = {
                        code:1,
                        msg:'登录成功',
                        uid:result[0].uid
                    }
                }else{
                    var output = {
                        code:2,
                        msg:'登录失败'
                    };
                }
                res.json(output);
                conn.release();
            })
        })
    })
});
//查询购物车数据信息
app.get('/select_cart/:uid',(req,res)=>{
    var uid = req.params.uid;
    //console.log(uid);
    pool.getConnection((err,conn)=>{
        if(err){console.log(err);}
        else{
            var sql = "SELECT c.cid,p.pic,p.price,p.pname,c.count,p.pid FROM t_cart c,t_product p WHERE c.pid=p.pid AND c.uid=?";
            conn.query(sql,[uid],(err,result)=>{
                res.json(result);
                conn.release();
            })
        }
    })
})
//增加 减少 商品数量
app.post("/add_count",(req,res)=>{
    req.on("data",(data)=>{
        var obj = qs.parse(data.toString());
        pool.getConnection((err,conn)=>{
            var sql = "UPDATE t_cart SET count=?  WHERE cid=?";
            conn.query(sql,[obj.count,obj.cid],(err,result)=>{
                if(err) throw err;
                var output = {code:1,msg:"修改成功！"};
                res.json(output);
                conn.release();
            })
        })
    })
});

//删除 在购物车 该商品
app.post("/del_product",(req,res)=>{
    req.on("data",(data)=>{
        var obj = qs.parse(data.toString());
        pool.getConnection((err,conn)=>{
            var sql = "DELETE FROM t_cart WHERE cid=?";
            conn.query(sql,[obj.cid],(err,result)=>{
                if(err) throw err;
                var output = {code:1,msg:"删除成功！"};
                res.json(output);
                conn.release();
            })
        })
    })
});

//添加商品到购物车
app.post('/add_cart',(req,res)=>{
    req.on("data",(data)=>{
        var obj = qs.parse(data.toString());
        pool.getConnection((err,conn)=>{
            var sql = "SELECT * FROM t_cart WHERE pid=? AND uid=?";
            conn.query(sql,[obj.pid,obj.uid],(err,result)=>{
                var count = 1;
                if(result.length ==0){
                    var sql1 = "INSERT INTO t_cart VALUES(null,?,1,?)";
                    conn.query(sql1,[obj.pid,obj.uid],(err,result)=>{
                        //res.json(result);
                        var output = {
                            code:1,
                            msg:'添加购物车成功！'
                            //count:count
                        };
                        res.json(output);
                    })
                }else if(result.length>0){
                    var sql2 = "UPDATE t_cart SET count=count+1 WHERE uid=? AND pid=?";
                    conn.query(sql2,[obj.pid,obj.uid],(err,result)=>{
                        //res.json(result);
                        var output = {
                            code:2,
                            msg:'添加到购物车成功'
                           // count:count
                        };
                        res.json(output);
                    })
                }

                conn.release();
            })
        })
    })
});

app.get('/index_skin/:pno',(req,res)=>{
    //var pno = req.params.pno;
    var pno = req.params.pno;
    pno = (pno-1)*8;
    pool.getConnection((err,conn)=>{
        if(err){console.log(err);}
        else{
            var sql = "SELECT *FROM t_product WHERE(tag IN('3')) LIMIT ?,8 ";
            conn.query(sql,[pno],(err,result)=>{
                res.json(result);
                conn.release();
            })
        }
    })
});

//product_page 分页查询
app.get("/product_page",(req,res)=>{
    pool.getConnection((err,conn)=>{
        var sql = "SELECT count(*) FROM t_product WHERE tag=3";
        conn.query(sql,(err,result)=>{
           var count = Math.ceil(result[0]["count(*)"]/8);
           var output = {'page':count};
           res.json(output);
        })
    })
});
//使用sessionStorage记住pid 跳转到相应详情页
app.get("/product_detail/:pid",(req,res)=>{
    var pid = req.params.pid;
    pool.getConnection((err,conn)=>{
        var sql = "SELECT d.showPic,d.introPic,p.pname,p.price,p.pid FROM t_detail d,t_product p WHERE d.pid=p.pid AND d.pid=?";
        conn.query(sql,[pid],(err,result)=>{
            res.json(result);
            conn.release();
        });

    })
});

//模糊查询 实时提示
app.get("/suggest/:kw",(req,res)=>{
    var kw = req.params.kw;
    pool.getConnection((err,conn)=>{
        var sql = "SELECT pname FROM t_product WHERE pname LIKE '%"+kw+"%'";
        conn.query(sql,[kw],(err,result)=>{
            if (err) throw err;
            res.json(result);
            conn.release();
        })
    })
});

//模糊查询
app.get("/keywords/:kw",(req,res)=>{
    var kw = req.params.kw;
    pool.getConnection((err,conn)=>{
        var sql = "SELECT *FROM t_product WHERE pname LIKE '%"+kw+"%'";
        conn.query(sql,[kw],(err,result)=>{
            if (err) throw err;
            res.json(result);
            conn.release();
        })
    })
});

