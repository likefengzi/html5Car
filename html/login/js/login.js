function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var login = 0;

  $.ajax({
    async: false,
    type: "POST",
    url: "http://122.9.33.180:8080/login",
    data: {
      carName: username,
      carPassword: password
    },
    dataType: 'json',
    success: function myresult(t) {
      console.log(t);
/*      alert("内容" + t.data);
      alert("success" + t.data);*/
      if (t.msg === "ADMIN LOGIN") {
        login = 1;
      }
      if (t.msg === "NORMAL LOGIN") {
        login = 2;
      }
    }
    ,
    error: function myerror(msg) {
/*      alert("错误内容" + msg);
      alert("error" + msg.responseText);*/
      console.log(msg);
    }
  });
  if (login === 1) {
    window.location.href = "../admin/index.html";
  } else if (login === 2) {
    window.location.href = "../user/index.html";
  } else {
    alert("账号或密码错误");
    location.reload();
  }

}
