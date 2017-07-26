$(()=>{
    //var uid = 3;
    var cookie = document.cookie.split(';')[0];
    var uid = cookie.split('=')[1];
    if(uid == ""){
        alert("请先登录！");
        return;
    }
    $.ajax({
        type:'GET',
        url:'/select_cart/'+uid,  //错误！！！ 直接全部写在了字符串里 怎么都娶不到uid的值
        data:{uid:uid},
        success:function(data){
            var html = "";
            for(var i=0; i<data.length; i++){
                var obj = data[i];
                html +=`
            <tr>
                    <td>
                        <a href="" >
                            <img src="${obj.pic}" alt=""/>
                        </a>
                        <a href="">${obj.pname}</a>
                    </td>
                    <td>&yen;${obj.price}</td>
                    <td>
                        <span class="minus">-</span>
                        <input type="text" value="${obj.count}"/>
                        <span class="plus">+</span>
                    </td>
                    <td class="price">${obj.price}</td>
                    <td class="total-price">&yen;${obj.count*obj.price}</td>
                    <td><a href="${obj.cid}" class="del_btn">删除</a></td>
            </tr>
            `;
            }
            $("#tb1").html(html);
            cartResult();
        }
    });
});
    function count_change(){       
       $("#tb1").on('click','span.plus',function(e){
            var co_ch = $(e.target).parent();
            var count = $(e.target).siblings("input");
            count.attr("value",parseInt(count.attr("value"))+1);
            var cid = co_ch.siblings().children(".del_btn").attr("href");
            var c = count.val();
            var p = $(e.target).parent().siblings(".price").html();
            $(e.target).parent().siblings(".total-price").html("¥"+c*p) ;
            cartResult();

            $.ajax({
            type:'POST',
            url:'/add_count',
            data:{count:c,cid:cid},
            success:function(data){
                if(data.code<0){
                    alert(data.msg);
                }else{
                    //alert(data.msg);
                }
            }
            });
        })
        $("#tb1").on('click','span.minus',function(e){
            var co_ch = $(e.target).parent();
            var count = $(e.target).siblings("input");
            if(count.attr("value") >1){
                count.attr("value",parseInt(count.attr("value"))-1);
                var cid = co_ch.siblings().children(".del_btn").attr("href");
                var c = count.val();
                var p = $(e.target).parent().siblings(".price").html();
                $(e.target).parent().siblings(".total-price").html("¥"+c*p) ;
            } 
            cartResult();

            $.ajax({
            type:'POST',
            url:'/add_count',
            data:{count:c,cid:cid},
            success:function(data){
                if(data.code<0){
                    alert(data.msg);
                }else{
                    //alert(data.msg);
                }
            }
            });      
        });        
    }
    count_change();
//删除购物车中该商品
$("#tb1").on("click",'.del_btn',function(e){
    e.preventDefault();
    var c = $(this).attr("href");
    console.log(c);
    $.ajax({
        type:'POST',
        url:'/del_product',
        data:{cid:c},
        success:function(data){
            //console.log(data);
            if(data.code>0){
                alert(data.msg);
                $(e.target).parent().parent().remove();
            }else{
                alert(data.msg);
            }
        }
    });
});
//计算商品总件数 总积分数 以及总价
function cartResult(){
    var count = 0;
    var score = 0;
    var price = 0;
    var scoreArr = $("#tb1>tr>td.price");
    var p_countArr = $("#tb1 input");
    for(var j=0; j<p_countArr.length; j++){
        count += parseFloat(p_countArr[j].value);
        score += parseFloat(scoreArr[j].innerHTML);
        price += p_countArr[j].value*scoreArr[j].innerHTML;
    }
    var html = `
    <td colspan="6">
                            <span class="lf">x</span>
                            <a href="" class="lf">清空购物车</a>
                            <ul class="rt">
                                <li>商品数量总计：<span>${count}</span>件</li>
                                <li>赠送积分：<span>${score}</span>分</li>
                                <li>商品总额：<span>&yen;${price}</span></li>
                            </ul>
                        </td>
    `;
    $("tfoot tr").html(html);
}
//点击 去结算 跳转到订单页面
$("div.buy>a").click((e)=>{
    e.preventDefault();
    var price = $("tfoot ul>li:nth-child(2)>span").html();
    sessionStorage.setItem('price',price);
    location.href = 'finalPay.html';
});
