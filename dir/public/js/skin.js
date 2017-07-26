
window.onload = show(1);
$("ul.page").on('click','a',function(e){
    e.preventDefault();
    var pno = $(this).html();
    console.log(pno);
    show(pno);
});
function show(pno){
    $.ajax({
        url:'/index_skin/'+pno,
        type:'GET',
        data:{pno:pno},
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
    $.ajax({
        url:'/product_page',
        type:'GET',
        success:function(data){
            console.log(data);
            var html = "";
            for(var i=1; i<=data.page; i++){
                html +=`
                <li><a href="">${i}</a><li>
                `
            }
            $("ul.page").html(html);
        }

    })
}


