var uid = document.cookie.split(';')[0].split('=')[1];
var price = sessionStorage.price;
console.log(price);
console.log(uid);
$.ajax({
    type:'get',
    url:'/select_cart/'+uid,
    data:{uid:uid},
    success:function(data){
        console.log(data);
        var html = "";
        var html1 = "";
        for(var i=0; i<data.length; i++){
            var obj = data[i];
            html +=`
            <tr>
                        <td class="img-box">
                            <div class="lf">
                                <img src="${obj.pic}" alt=""/>
                            </div>

                            <div class="lf msg">
                                <p>${obj.pname}</p>
                                <p>商品货号：${obj.pid}</p>
                            </div>

                        </td>
                        <td>&yen;${obj.price}</td>
                        <td>${obj.price}</td>
                        <td>x ${obj.count}</td>
                    </tr>
            `;
        }
        html1 +=`
            <span>应付总额：</span>
            <strong>&yen;${price}</strong>
            `;
        $(".product-list tbody").html(html);
        $(".pay-price").html(html1);
    }
});