function prepaarePlaceholder() {
    //创建一个img元素节点
    var placehoder = document.createElement("img");
    //设置图片节点的id属性
    placehoder.setAttribute("id", "placehoder");
    //设置图片节点的src属性
    placehoder.setAttribute("src", "img/pic1.jpg");
    //设置图片节点的alt属性
    placehoder.setAttribute("alt", "my photos");
    //创建一个段落元素节点
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    //创建一个文本元素
    var desctext = document.createTextNode("choose an image");
    //将文本元素插入段落元素
    description.appendChild(desctext);
    //将新建元素插入文档，内容紧跟图片清单之后
    // document.getElementsByTagName("body")[0].appendChild(placehoder);
    // document.getElementsByTagName("body")[0].appendChild(description);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placehoder, gallery);
    insertAfter(description, placehoder);
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parent;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSinling);
    }
}