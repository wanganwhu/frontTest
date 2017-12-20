$(function(){
    //注册
    $("#submit").click(function(event){

        var _fparam = "{\"email\":\"" + $("#user_email").val() + "\",\"password\":\""
            + $("#password").val() + "\",\"tel\":\"" + $("#phone").val() + "\"}";
        $.ajax({
            url: "http://47.93.237.6:8080//lidar/getData.jsp",
            async: false,
            type: "POST",
            //dataType: "JSON",
            data: {
                'fname': "\"registeruserinfo\"",
                'fparam': _fparam
            },
            success: function (data1) {
                var data1 = JSON.parse(data1);
                if (data1.success == 0) {
                    alert("注册失败，请重新输入");
                    return;
                }
                var usr_id = data1.result.usr_id;
                var uid = data1.result.uid;
                var isAdmin = data1.result.isAdmin;//判断是否是管理员
                var tel = data1.result.tel;
                var default_region = data1.result.default_region;//默认管理区域

                sessionStorage.setItem('usr_id',usr_id);
                sessionStorage.setItem('uid',uid);
                sessionStorage.setItem('isAdmin',' '+isAdmin);
                sessionStorage.setItem('default_region',default_region);
                window.location.href="index.html";

                /*$("#ID_use_id").attr('value',uid);
                $("reg_form").submit();*/
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("访问服务器失败");
            },
            timeout: 8000
        });

    })
})