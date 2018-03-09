function getNewContent() {
    var request = getHTTPObject();
    if (request) {
        request.open("GET", "ajax.txt", true);
        //事件处理函数，在服务器给XMLHttpRequest
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById('new').appendChild(para);
            }
        }
        request.send(null);
    } else {
        alert('sorry,your browser doesn\'t support XMLHttpRequest');
    }
    alert("Function Done");
}
AddLoadEvent(getNewContent);