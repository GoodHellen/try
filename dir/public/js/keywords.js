
    function search(){
        $("div.search-box .search-submit").click(
            function(){
                var kw = $("div.search-box .search-input").val();
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


