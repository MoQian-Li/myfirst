//在代码复杂需要向window.onload加入多个函数时比较有用，简单是可以保留方便后面扩展
function addLoadEvent(func) {
    var oldonload = window.onload; //将现有的window.onload事件处理函数的值存入变量oldonload
    //如果这个处理函数上还没有绑定任何函数，就像平时那样将新函数添加给它
    //如果在这个处理函数上已经绑定了一些函数，就将新函数追加到现有指令的末尾
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);


//这个函数需要在网页加载完成后立即执行，网页加载完毕时会触发一个onload事件，这个事件与window对象相关联
function prepareGallery() {
    if (!document.getElementsByTagName) {
        return false; //检查当前浏览器是否理解名为getElementByTagName的DOM方法
    }
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById("imagegallery")) {
        return false; //检查要操作的元素是否存在，预防性措施
    }
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a"); //遍历imagegallery元素的所有链接
    //遍历links数组中的各个元素
    for (var i = 0; i < links.length; i++) {
        //改变行为
        //定义一个匿名函数
        links[i].onclick = function() {
                return showPic(this) ? false : true; //showpic()返回true时，返回false禁用有关链接的默认行为
                // showPic(this); //this代表link[i],对应links节点列表中的某个特定的节点
                // return false; //禁用有关链接的默认行为
            }
            //将onclick事件的所有功能赋给onkeypress事件（考虑不使用鼠标而是使用键盘的情况）
            // links[i].onkeypress = links[i].onclick;
    }
}

function showPic(whichpic) {
    // if (!document.getElementById("placeholder")) {
    //     return false;
    // }
    //添加上面被注释语句会返回false
    var source = whichpic.getAttribute("href"); //获得图片文件路径
    var placehoder = document.getElementById("placehold");
    placehoder.setAttribute("src", source); //更改显示图片
    //文字部分为可选项，如果存在将会被更新，如果不存在就忽略
    //测试title属性是否存在，不存在是变量text值设置为空字符串
    // if (document.getElementById("desciption")) {
    var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : " "; //获得图片title值
    var description = document.getElementById("description");
    // }
    //检查description元素的第一个子元素是一个文本节点
    if (description.firstChild.nodeType == 3)
        description.firstChild.nodeValue = text; //更改描述段落的文本    
    return true;
}