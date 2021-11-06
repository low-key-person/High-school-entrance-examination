function check() {
    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    if (name == "1" && pass == "1") {
        alert("登入成功");
        window.document.f.action = "./Update/index.html";
        //window.document.f.submit();
    } 
    //else {
      //  alert("用户名或密码错误");
    //}
    if (name == "2" && pass == "2") {
        alert("登入成功");
        window.document.f.action = "./Update/index.html";
        //window.document.f.submit();
    } 
    //else {
      //  alert("用户名或密码错误");
    //}
}