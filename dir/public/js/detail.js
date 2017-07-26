$(()=>{
    //var cookieArr= document.cookie.split(';');
    //var pid = cookieArr[cookieArr.length-1].split('=')[1];
     pid = sessionStorage.pid;
    console.log(pid);
    $.ajax({
        type:'GET',
        url:'/product_detail/'+pid,
        data:{pid:pid},
        success:function(data){
            var html = "";
            var html1 = "";
            var html2 = "";
            var html3 = "";
            for(var i=0; i<data.length; i++){
                console.log(data);
                var obj = data[i];
                var introPics = data[i].introPic.split(',');
                console.log(introPics);
                var showPics = data[i].showPic.split(',');
                var mImg = showPics[0];
                //替换中图
                html += `
                   <img id="mImg" src="img/dt/${mImg}.jpg"/>
                   <div id="mask"></div>
                   <div id="superMask"></div>
                `;
                //预览小图
                for(var j=0; j<showPics.length; j++){
                    var sp = showPics[j];
                    html1 += `<li><img src="img/dt/${sp}.jpg" /></li>`;
                }
                //下方商品详情
                for(var k=0; k<introPics.length; k++){
                    var ip = introPics[k];
                    console.log(ip);
                    html2 +=` <img src="img/dt/${ip}.jpg" />`;
                }
                //右侧相关商品信息
                html3 +=`
                <h1>${obj.pname}</h1>
                 <p>货号：${obj.pid}</p>
                 <p>校妆价：<span>&yen;${obj.price}</span></p>
                 <p>所得积分：${obj.price}</p>
                 <div class="on-sale">促销信息：满98元享包邮</div>
                 <div class="buy-box">
                     <div>购买数量：
                        <div class="lf">
                            <span class="minus">+</span>
                            <input type="text" value="1"/>
                            <span class="plus">-</span>
                        </div>
                     </div>
                     <div>
                         <a class="addCart" href="${obj.pid}">加入购物车</a>
                     </div>
                 </div>
                `

            }
            $("div#mediumDiv").html(html);
            $("#icon_list").html(html1);
            $("#detail>p").html(html2);
            $("#rt-msg").html(html3);

            largerShow();
            addCart();
        }
    });
});
//加入购物车
function addCart(){   
    $("div.buy-box").on('click','a.addCart',function(e){
        e.preventDefault();
        if(document.cookie){
            var uid = document.cookie.split(';')[0].split('=')[1] ; 
        }else{
            alert("请先登录哦");
            return;
        }        
        var pid = $(e.target).attr("href");      
        $.ajax({
            data:{pid:pid,uid:uid},
            type:'POST',
            url:'/add_cart',
            success:function(data){
                alert("添加购物车成功！");
            }
        })
    })
}

//实现放大镜效果
function largerShow(){

    var LIWIDTH = 62;
    var OFFSET = 20;
    var moved = 0;
    var ulList = document.getElementById("icon_list");

    var aForward = document.querySelector(".forward");
    var aBackward = document.querySelector(".backward");

    aForward.onclick = move;
    function move(){
        if(this.className.indexOf("disabled") == -1){
            moved += (this.className == "forward"? 1:-1);
            var left = moved*-LIWIDTH+OFFSET;
            ulList.style.left = left + "px";
            checkA();
        }
    }

    aBackward.onclick = move;
    function checkA(){
        if(ulList.children.length - moved == 5){
            aForward.className = "forward disabled";
        }
        else if(moved == 0){
            aBackward.className = "backward disabled";
        }
        else{
            aForward.className = "forward";
            aBackward.className = "backward";
        }
    }

//鼠标移至小图 显示对应的中图
    var mImg = document.getElementById("mImg");
    ulList.onmouseover = function(e){
        if(e.target.nodeName == "IMG"){
            var src = e.target.src;
            //var i = src.lastIndexOf(".");
            //src = src.slice(0,i) + "-m" + src.slice(i);
            mImg.src = src;
        }
    };

    var MSIZE = 175;
    var MAX = 175;
//半透明的小遮罩层
    var mask = document.getElementById("mask");
//查找的mImg完全重合的透明div,用于分担mImg的鼠标事件
    var sMask = document.getElementById("superMask");
//查找id为largeDiv的div
    var lgDiv = document.getElementById("largeDiv");

//鼠标进入sMask 显示mask
    sMask.onmouseover = function(){
        mask.style.display = "block";
        // images/products/product-s1-m.jpg
        var src = mImg.src;
        //images/products/product-s1-l.jpg
        //var i = src.lastIndexOf(".");
        //src = src.slice(0,i-1)+"l"+src.slice(i);
        //设置lgDiv的背景图片为新的src
        lgDiv.style.backgroundImage = "url("+ src + ")";
        lgDiv.style.display = "block";
    };
//鼠标移出sMask 隐藏mask
    sMask.onmouseout = function(){
        mask.style.display = "";
        lgDiv.style.display = "";
    };
//鼠标在中图片上移动时 使遮罩层跟着鼠标移动
    sMask.onmousemove = function(e){
        //获得鼠标相对于父元素的位置
        var x = e.offsetX;
        var y = e.offsetY;
        //计算mask的top和left
        var left = x - MSIZE/ 2,
            top = y - MSIZE/2;
        if(top<0) top = 0;
        else if(top>MAX) top =MAX;
        if(left<0) left  = 0;
        else if(left>MAX) left=MAX;

        mask.style.left = left+"px";
        mask.style.top = top + "px";

        //根据mask的top和left计算lgDiv背景图片位置
        lgDiv.style.backgroundPosition = -16/7*left + "px " + -16/7*top + "px";
    };
}
