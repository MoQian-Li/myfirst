window.onload=function(){
    if(document.getElementById("btn-message")){
        var btn_message=document.getElementById("btn-message");
        btn_message.onmousedown=function(){
            document.getElementById("message").style.visibility="visible";
            document.getElementById("document").style.visibility="hidden";
            document.getElementById("history").style.visibility="hidden";
        }
    }
    if(document.getElementById("btn-document")){
        var btn_message=document.getElementById("btn-document");
        btn_message.onmousedown=function(){
            document.getElementById("document").style.visibility="visible";
            document.getElementById("message").style.visibility="hidden";
            document.getElementById("history").style.visibility="hidden";
        }
    }
    if(document.getElementById("btn-history")){
        var btn_message=document.getElementById("btn-history");
        btn_message.onmousedown=function(){
            document.getElementById("history").style.visibility="visible";
            document.getElementById("document").style.visibility="hidden";
            document.getElementById("message").style.visibility="hidden";
        }
    }
}