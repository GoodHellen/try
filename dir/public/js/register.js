/**
 * Created by Administrator on 2017/7/8.
 */
$("header").load('header.html');
$("footer").load("footer.html");
$("#reg").click(function(){
    var reg = /^[0-9a-z]{3,9}$/i;
    var u = $("#uname").val();
    var p = $("#upwd").val();
    var vp = $("#valipwd").val();
    if(p !== vp){
        $("#valipwd").addClass("vali");
        $("#valipwd").prev().addClass("show");
        return;
    }
    if(!reg.test(u) || !reg.test(p)  ){
        return;
    }
    $.ajax({
        url:'/register',
        type:'POST',
        data:{uname:u,upwd:p},
        success:function(data){
            if(data.code === 1){
                alert("注册成功，请登录！");
                location.href = 'login.html';
            }else{
                alert("注册失败");
            }
        }
    })
});

//前端表单验证
//1.输入框获得焦点时 span提示信息显示
//2.正则验证用户名与密码是否符合要求 不符合添加样式
//3.符合 提交表单

    function vali(){
        var reg = /^[0-9a-z]{3,9}$/i;
        $(".reg-box form").on({
            focus:function(){
                $(this).removeClass("vali");
                $(this).prev().addClass("show");
            },
            blur:function(){
                $(this).prev().removeClass("show");
                if(!reg.test($(this).val())){
                    $(this).addClass("vali");
                    $(this).prev().addClass("show");
                    return false;
                }
            }
        },'input');
    }
vali();


