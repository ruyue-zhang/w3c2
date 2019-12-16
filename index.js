var formValiad = {
  checkForm:function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if((username == 123) && (password == 123)) {
      alert("Login successfully！");
    }
    else {
      document.getElementById("username").value = '';
      document.getElementById("password").value = '';
      alert("Incorrect user name or password!");
    }
    return (username == 123) && (password == 123);
  }
}