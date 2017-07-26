/**
 * Created by Administrator on 2017/7/8.
 */
$("header").load('header.html');
$("footer").load("footer.html");
var uid = "";
$("#login").click(function(e){
    var u = $("#uname").val();
    var p = $("#upwd").val();

    e.preventDefault();
    $.ajax({
        type:'POST',
        url:'/login',
        data:{uname:u,upwd:p},
        success:function(data){
            if(data.code == 1){
                console.log(data);
                alert("登录成功");
                console.log("hello");
                location.href = "index.html";
                
            }else{
                alert("用户名或密码不正确");
            }
            uid = data.uid;
            uname = u;
            console.log(uname);
            document.cookie = 'uid='+uid;
            document.cookie = 'uname='+uname;
        }
    });
});
