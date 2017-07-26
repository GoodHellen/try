$(()=> {
    $.ajax({
        type: 'GET',
        url: '/index',
        success: function (data) {
            var html = "";
            var html1 = "";
            for (var i = 0; i < data.length; i++) {
                var obj = data[i];
                var tag = data[i].tag;
                if (tag == 1) {
                    html += `
                <li class="sale-info">
                    <div class="sale-img">
                        <a class="pid" href="${obj.pid}">
                            <img src="${obj.pic}" alt=""/>
                        </a>
                    </div>
                    <p class="sale-title">
                        <a class="pid" href="${obj.pid}">
                            ${obj.pname}
                        </a>
                    </p>
                    <div class="sale-price">
                        <span>&yen;${obj.price}</span>
                        <a href="${obj.pid}" class="add_cart">现在抢购</a>
                    </div>
                </li>
                `
                }else if(tag == 2){
                    html1 += `
               <li class="hot-info">
                    <div class="hot-img">
                        <a class="pid" href="${obj.pid}">
                            <img src="${obj.pic}" alt=""/>
                        </a>
                    </div>
                    <p class="hot-title">
                        <a class="pid" href="${obj.pid}">
                            ${obj.pname}
                        </a>
                    </p>
                    <div class="hot-price">
                        <span>&yen;${obj.price}</span>
                        <a href="${obj.pid}" class="add_cart">现在抢购</a>
                    </div>
                </li>
                `;
                }

            }
            $("#super-content").html(html);
            $("#hot-content").html(html1);
            animate();
        }
    })
});

//点击现在抢购 加入购物车
$("#super-content,#hot-content").on('click','a.add_cart',function(e){
    e.preventDefault();
    console.log("clicked!");
    var cookie = document.cookie.split(';')[0];
    var uid = cookie.split('=')[1];
    var pid = $(e.target).attr('href');
    if(!uid){
        //alert("请您先登录！3s后将跳转到登录界面！");
        var result = confirm('请您先登录！');
        if(result){
            location.href = "login.html";
        }else{
            return;
        }
    }
    //console.log(uid);
    //console.log(pid);
    $.ajax({
        type:'POST',
        url:'/add_cart',
        data:{uid:uid,pid:pid},
        success:function(data){
            if(data.code >0){
                alert(data.msg);
            }
        }
    })
});

$("#container").on('click','a.pid',function(e){
    e.preventDefault();
    var pid = $(this).attr("href");
    console.log(pid);
    sessionStorage.setItem("pid",pid);
    location.href = 'product_detail.html'
});

$(window).scroll(function(){
    var sc = $(window).scrollTop();
    if(sc >400){
        $("#super-content").addClass("animated bounceInUp");
    }
    if(sc>1400){
        $("#hot-content").addClass("animated fadeIn");
    }
   if(sc>1500 && sc<5000){
        $("#toTop").css("display","block");
   }else{
       $("#toTop").css("display","none");
   }
    $("#toTop").click(function(){
        var sc = $(window).scrollTop();
        $('body').animate({
            scrollTop:'0px'
        },500);
    });
});

//动画效果
function animate(){
    $("a.add_cart").mouseover(function(){
        $(this).addClass("animated jello");
    });
}

//懒加载技术








