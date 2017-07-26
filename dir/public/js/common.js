
$("header").load("header.html",function(){
    disSub();
    login();
    logout();
    search();
    suggest();
    myOrder();
    jump();
});
$("footer").load("footer.html",function(){
    helpCenter();
});

function disSub(){
    $(".ul-all-type>li").hover(function(e){
        $(e.target).children("div.sub-main-type")
            .addClass("hover").animate({left:"200"},500);
    },function(e){
        $(e.target).children("div.sub-main-type").removeClass("hover").css("left","190px");
    })
}
function login(){
    //console.log(cookie);
    if(document.cookie){
        $("ul.login").find('li.l,li.r').remove();
        $("ul.login").find(".hidden").removeClass();
        var uname = document.cookie.split(';')[1].split('=')[1];
        console.log(uname);
        $("ul.login>li:nth-child(1)").html("欢迎您,"+uname);
    }
}
function logout(){
    $("a.logout").click(function(e){
        var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (var i = keys.length; i--;)
                document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString()
            location.href = "index.html";
        }
    }) ;
}
//模糊查询
function suggest(){
    var searchInput = $("div.search-box .search-input");
    searchInput.keyup(function(){
        var kw = $(this).val();
        if(kw == ""){
            $(this).siblings("#suggest").css("display","none");
        }else{
            $(this).siblings("#suggest").css("display","block");
            $.ajax({
                url:'/suggest/'+kw,
                type:'GET',
                data:{kw:kw},
                success:function(data){
                    var html = "";
                    for(var i=0; i<5; i++){
                        var obj = data[i];
                        html += `
                        <li>${obj.pname}</li>
                        `;
                    }
                    $("#suggest").html(html);
                }
            })
        }
    })
    $("#suggest").on('click','li',function(){
        searchInput.val($(this).html());
        $("#suggest").css("display","none");
    })
}
function search(){
    $("div.search-box .search-submit").click(
        function(){
            location.href = 'keywords.html';
            $("#suggest").css("display","none");
            var kw = $("div.search-box .search-input").val();
            console.log(kw);
            $.ajax({
                url:'/keywords/'+kw,
                type:'GET',
                data:{kw:kw},
                success:function(data){
                    var html = "";
                    for(var i=0; i<data.length; i++){
                        var obj = data[i];
                        html += `
        <li>
            <p class="p_img">
                <a href="">
                    <img src="${obj.pic}" alt=""/>
                </a>
            </p>
            <p class="p_pname">
                <a href="">${obj.pname}</a>
            </p>
            <p>&yen;${obj.price}</p>
        </li>
                    `
                    }
                    $(".skin-list").html(html);
                }
            }) ;
        }
    );

}

function myOrder(){
    $(".myorder>a").click(function(e){
        e.preventDefault();
        if(document.cookie){
            location.href = 'finalPay.html';
        }else{
            alert("请您先登录");
        }
    });
}

//
//jQuery(document).ready(function($){
//    var offset = 300, offset_opacity = 1200,scroll_top_duration = 700,
//        $back_to_top = $('.cd-top');
//    $(window).scroll(function(){
//        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
//        if( $(this).scrollTop() > offset_opacity ) {
//            $back_to_top.addClass('cd-fade-out');
//        }
//    });
//    $back_to_top.on('click', function(event){
//        event.preventDefault();
//        $('body,html').animate({
//                scrollTop: 0
//            }, scroll_top_duration
//        );
//    });
//
//});

//不同页面 高亮显示的标签头不同
function jump(){
    $(".nav-list>li>a").each(function(){
        console.log($(this));
        $this = $(this);
        if($this[0].href==(String(window.location))){
            console.log('hello');
           // console.log(String(window.location));
            //$this.addClass("hover");
            $this.css("background","#000");
        }
    });
}




function helpCenter(){
    $("ul.lf-foot-content").on('click','a',function(e){
        e.preventDefault();
        var href = $(this).attr("href");
        sessionStorage.setItem('type',href);
        location.href = 'help-center.html';
        console.log(sessionStorage.type);
    })
}