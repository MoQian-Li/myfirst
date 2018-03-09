// createElement方法
// window.onload = function() {
//     var para = document.createElement("p");
//     var info = "nodeName:";
//     info += para.nodeName;
//     info += "nodeType: ";
//     info += para.nodeType;
//     alert(info);
// }

//输出结果为Hello World
window.onload = function() {
    //appendChild方法
    //创建一个段落节点
    var para = document.createElement("p");
    var testdiv = document.getElementById("testdiv");
    //将新建的段落节点追加指定的元素节点
    testdiv.appendChild(para);
    //createTextNode方法
    var text = document.createTextNode("Hello World");
    para.appendChild(text);
}