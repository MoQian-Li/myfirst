window.onload = function() {
    //以下为自定义右击菜单
    //oncontextmenu 事件在元素中用户右击鼠标时触发并打开上下文菜单。
    document.oncontextmenu = function(e) {
        //阻止执行浏览器默认右击事件
        e.preventDefault();
        //聊天室好友列表
        if (document.getElementById("menu-friend")) {
            var menu1 = document.getElementById("menu-friend");
            menu1.style.display = "block";
            document.getElementById("contain-friend").onmousedown = function(e) {　　　　　 //菜单定位
                menu1.style.left = e.offsetX + "px";
                menu1.style.top = document.documentElement.scrollTop + e.clientY + "px";
                //alert(menu1.style.top)
                if (document.getElementById("contain-friend")) {
                    if (e.button == 2) {
                        menu1.style.visibility = "visible";
                    } else {
                        menu1.style.visibility = "hidden";
                    }
                }
            }
        }
    }
    if (document.getElementById("btn1")) {
        document.getElementById("btn1").onmousedown = function(e) {
            document.getElementById("label1").innerHTML = "你点击了菜单一"
        }
    }
    if (document.getElementById("btn2")) {
        document.getElementById("btn2").onmousedown = function(e) {
            document.getElementById("label1").innerHTML = "你点击了菜单二"
        }
    }
    return false;
    //与e.preventDefault();功能相同，但是必须放在最后否则在return后面的内容均不执行
}